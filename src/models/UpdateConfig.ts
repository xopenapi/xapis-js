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
 * @interface UpdateConfig
 */
export interface UpdateConfig {
    /**
     * 所属的资源ID
     * @type {string}
     * @memberof UpdateConfig
     */
    resourceId?: string;
    /**
     * 所属的配置组ID
     * @type {string}
     * @memberof UpdateConfig
     */
    groupId?: string;
    /**
     * 配置模板ID
     * @type {string}
     * @memberof UpdateConfig
     */
    templateId?: string;
    /**
     * 配置项
     * @type {string}
     * @memberof UpdateConfig
     */
    key?: string;
    /**
     * 配置内容
     * @type {object}
     * @memberof UpdateConfig
     */
    value?: object;
}

/**
 * Check if a given object implements the UpdateConfig interface.
 */
export function instanceOfUpdateConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateConfigFromJSON(json: any): UpdateConfig {
    return UpdateConfigFromJSONTyped(json, false);
}

export function UpdateConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resourceId': !exists(json, 'resource_id') ? undefined : json['resource_id'],
        'groupId': !exists(json, 'group_id') ? undefined : json['group_id'],
        'templateId': !exists(json, 'template_id') ? undefined : json['template_id'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function UpdateConfigToJSON(value?: UpdateConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resource_id': value.resourceId,
        'group_id': value.groupId,
        'template_id': value.templateId,
        'key': value.key,
        'value': value.value,
    };
}
