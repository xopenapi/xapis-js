/* tslint:disable */
/* eslint-disable */
/**
 * xapi services
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiError
 */
export interface ApiError {
    /**
     * 错误码
     * @type {string}
     * @memberof ApiError
     */
    code: string;
    /**
     * 错误消息
     * @type {string}
     * @memberof ApiError
     */
    message?: string;
    /**
     * 发生错误的字段
     * @type {string}
     * @memberof ApiError
     */
    param?: string;
}

/**
 * Check if a given object implements the ApiError interface.
 */
export function instanceOfApiError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiErrorFromJSON(json: any): ApiError {
    return ApiErrorFromJSONTyped(json, false);
}

export function ApiErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'param': !exists(json, 'param') ? undefined : json['param'],
    };
}

export function ApiErrorToJSON(value?: ApiError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'param': value.param,
    };
}
