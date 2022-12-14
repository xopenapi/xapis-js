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


/**
 * 云存储服务商
 * @export
 */
export const StorageProvider = {
    Qcloud: 'qcloud',
    Aliyun: 'aliyun'
} as const;
export type StorageProvider = typeof StorageProvider[keyof typeof StorageProvider];


export function StorageProviderFromJSON(json: any): StorageProvider {
    return StorageProviderFromJSONTyped(json, false);
}

export function StorageProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageProvider {
    return json as StorageProvider;
}

export function StorageProviderToJSON(value?: StorageProvider | null): any {
    return value as any;
}

