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
 * 短信服务商
 * @export
 */
export const SMSProvider = {
    Qcloud: 'qcloud',
    Aliyun: 'aliyun'
} as const;
export type SMSProvider = typeof SMSProvider[keyof typeof SMSProvider];


export function SMSProviderFromJSON(json: any): SMSProvider {
    return SMSProviderFromJSONTyped(json, false);
}

export function SMSProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): SMSProvider {
    return json as SMSProvider;
}

export function SMSProviderToJSON(value?: SMSProvider | null): any {
    return value as any;
}

