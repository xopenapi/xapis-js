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
 * @interface Config
 */
export interface Config {
    /**
     * 配置ID
     * @type {string}
     * @memberof Config
     */
    id: string;
    /**
     * 所属的资源ID
     * @type {string}
     * @memberof Config
     */
    resourceId: string;
    /**
     * 所属的配置组ID
     * @type {string}
     * @memberof Config
     */
    groupId?: string;
    /**
     * 配置模板ID
     * @type {string}
     * @memberof Config
     */
    templateId?: string;
    /**
     * 配置项
     * @type {string}
     * @memberof Config
     */
    key: string;
    /**
     * 配置内容
     * @type {object}
     * @memberof Config
     */
    value: object;
    /**
     * 创建时间
     * @type {Date}
     * @memberof Config
     */
    createdAt: Date;
    /**
     * 最后更新时间
     * @type {Date}
     * @memberof Config
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the Config interface.
 */
export function instanceOfConfig(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "resourceId" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function ConfigFromJSON(json: any): Config {
    return ConfigFromJSONTyped(json, false);
}

export function ConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): Config {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'resourceId': json['resource_id'],
        'groupId': !exists(json, 'group_id') ? undefined : json['group_id'],
        'templateId': !exists(json, 'template_id') ? undefined : json['template_id'],
        'key': json['key'],
        'value': json['value'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function ConfigToJSON(value?: Config | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'resource_id': value.resourceId,
        'group_id': value.groupId,
        'template_id': value.templateId,
        'key': value.key,
        'value': value.value,
        'created_at': (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

