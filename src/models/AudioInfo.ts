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
 * @interface AudioInfo
 */
export interface AudioInfo {
    /**
     * 音频时长（秒）
     * @type {number}
     * @memberof AudioInfo
     */
    duration: number;
    /**
     * 音频大小（字节）
     * @type {number}
     * @memberof AudioInfo
     */
    size: number;
    /**
     * 音频格式
     * @type {string}
     * @memberof AudioInfo
     */
    format?: string;
}

/**
 * Check if a given object implements the AudioInfo interface.
 */
export function instanceOfAudioInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "size" in value;

    return isInstance;
}

export function AudioInfoFromJSON(json: any): AudioInfo {
    return AudioInfoFromJSONTyped(json, false);
}

export function AudioInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AudioInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': json['duration'],
        'size': json['size'],
        'format': !exists(json, 'format') ? undefined : json['format'],
    };
}

export function AudioInfoToJSON(value?: AudioInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'size': value.size,
        'format': value.format,
    };
}
