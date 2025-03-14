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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DailyForecastTemp
 */
export interface DailyForecastTemp {
    /**
     * 
     * @type {number}
     * @memberof DailyForecastTemp
     */
    day?: number;
    /**
     * 
     * @type {number}
     * @memberof DailyForecastTemp
     */
    min?: number;
    /**
     * 
     * @type {number}
     * @memberof DailyForecastTemp
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof DailyForecastTemp
     */
    night?: number;
    /**
     * 
     * @type {number}
     * @memberof DailyForecastTemp
     */
    eve?: number;
    /**
     * 
     * @type {number}
     * @memberof DailyForecastTemp
     */
    morn?: number;
}

/**
 * Check if a given object implements the DailyForecastTemp interface.
 */
export function instanceOfDailyForecastTemp(value: object): value is DailyForecastTemp {
    return true;
}

export function DailyForecastTempFromJSON(json: any): DailyForecastTemp {
    return DailyForecastTempFromJSONTyped(json, false);
}

export function DailyForecastTempFromJSONTyped(json: any, ignoreDiscriminator: boolean): DailyForecastTemp {
    if (json == null) {
        return json;
    }
    return {
        
        'day': json['day'] == null ? undefined : json['day'],
        'min': json['min'] == null ? undefined : json['min'],
        'max': json['max'] == null ? undefined : json['max'],
        'night': json['night'] == null ? undefined : json['night'],
        'eve': json['eve'] == null ? undefined : json['eve'],
        'morn': json['morn'] == null ? undefined : json['morn'],
    };
}

  export function DailyForecastTempToJSON(json: any): DailyForecastTemp {
      return DailyForecastTempToJSONTyped(json, false);
  }

  export function DailyForecastTempToJSONTyped(value?: DailyForecastTemp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'day': value['day'],
        'min': value['min'],
        'max': value['max'],
        'night': value['night'],
        'eve': value['eve'],
        'morn': value['morn'],
    };
}

