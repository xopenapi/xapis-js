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
import type { Provider } from './Provider';
import {
    ProviderFromJSON,
    ProviderFromJSONTyped,
    ProviderToJSON,
} from './Provider';

/**
 * 
 * @export
 * @interface SendSMS
 */
export interface SendSMS {
    /**
     * 手机号
     * @type {string}
     * @memberof SendSMS
     */
    phone: string;
    /**
     * 短信内容或模版ID
     * @type {string}
     * @memberof SendSMS
     */
    content: string;
    /**
     * 模版参数
     * @type {object}
     * @memberof SendSMS
     */
    params?: object;
    /**
     * 短信签名
     * @type {string}
     * @memberof SendSMS
     */
    sign?: string;
    /**
     * 
     * @type {Provider}
     * @memberof SendSMS
     */
    provider?: Provider;
}

/**
 * Check if a given object implements the SendSMS interface.
 */
export function instanceOfSendSMS(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "phone" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function SendSMSFromJSON(json: any): SendSMS {
    return SendSMSFromJSONTyped(json, false);
}

export function SendSMSFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendSMS {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phone': json['phone'],
        'content': json['content'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'sign': !exists(json, 'sign') ? undefined : json['sign'],
        'provider': !exists(json, 'provider') ? undefined : ProviderFromJSON(json['provider']),
    };
}

export function SendSMSToJSON(value?: SendSMS | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'phone': value.phone,
        'content': value.content,
        'params': value.params,
        'sign': value.sign,
        'provider': ProviderToJSON(value.provider),
    };
}

