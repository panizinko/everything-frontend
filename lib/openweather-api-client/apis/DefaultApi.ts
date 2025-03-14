/* tslint:disable */
/* eslint-disable */
/**
 * OpenWeather One Call API
 * OpenWeather One Call API 3.0 for comprehensive weather data
 *
 * The version of the OpenAPI document: 3.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { OneCallResponse } from '../models/index';
import { OneCallResponseFromJSON } from '../models/index';
import * as runtime from '../runtime';

export interface OnecallGetRequest {
  lat: number;
  lon: number;
  appid: string;
  units?: OnecallGetUnitsEnum;
  exclude?: string;
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   * Get current and forecast weather data
   */
  async onecallGetRaw(
    requestParameters: OnecallGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<OneCallResponse>> {
    if (requestParameters['lat'] == null) {
      throw new runtime.RequiredError(
        'lat',
        'Required parameter "lat" was null or undefined when calling onecallGet().',
      );
    }

    if (requestParameters['lon'] == null) {
      throw new runtime.RequiredError(
        'lon',
        'Required parameter "lon" was null or undefined when calling onecallGet().',
      );
    }

    if (requestParameters['appid'] == null) {
      throw new runtime.RequiredError(
        'appid',
        'Required parameter "appid" was null or undefined when calling onecallGet().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters['lat'] != null) {
      queryParameters['lat'] = requestParameters['lat'];
    }

    if (requestParameters['lon'] != null) {
      queryParameters['lon'] = requestParameters['lon'];
    }

    if (requestParameters['appid'] != null) {
      queryParameters['appid'] = requestParameters['appid'];
    }

    if (requestParameters['units'] != null) {
      queryParameters['units'] = requestParameters['units'];
    }

    if (requestParameters['exclude'] != null) {
      queryParameters['exclude'] = requestParameters['exclude'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/onecall`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => OneCallResponseFromJSON(jsonValue));
  }

  /**
   * Get current and forecast weather data
   */
  async onecallGet(
    requestParameters: OnecallGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<OneCallResponse> {
    const response = await this.onecallGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
}

/**
 * @export
 */
export const OnecallGetUnitsEnum = {
  Standard: 'standard',
  Metric: 'metric',
  Imperial: 'imperial',
} as const;
export type OnecallGetUnitsEnum = (typeof OnecallGetUnitsEnum)[keyof typeof OnecallGetUnitsEnum];
