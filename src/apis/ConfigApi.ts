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


import * as runtime from '../runtime';
import type {
  ApiError,
  Config,
  ConfigGroup,
  ConfigTemplate,
  CreateConfig,
  CreateConfigGroup,
  CreateConfigTemplate,
  UpdateConfig,
  UpdateConfigGroup,
  UpdateConfigTemplate,
} from '../models';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    ConfigFromJSON,
    ConfigToJSON,
    ConfigGroupFromJSON,
    ConfigGroupToJSON,
    ConfigTemplateFromJSON,
    ConfigTemplateToJSON,
    CreateConfigFromJSON,
    CreateConfigToJSON,
    CreateConfigGroupFromJSON,
    CreateConfigGroupToJSON,
    CreateConfigTemplateFromJSON,
    CreateConfigTemplateToJSON,
    UpdateConfigFromJSON,
    UpdateConfigToJSON,
    UpdateConfigGroupFromJSON,
    UpdateConfigGroupToJSON,
    UpdateConfigTemplateFromJSON,
    UpdateConfigTemplateToJSON,
} from '../models';

export interface CreateConfigRequest {
    createConfig?: CreateConfig;
}

export interface CreateConfigGroupRequest {
    createConfigGroup?: CreateConfigGroup;
}

export interface CreateConfigTemplateRequest {
    createConfigTemplate?: CreateConfigTemplate;
}

export interface DeleteConfigRequest {
    id: string;
}

export interface DeleteConfigGroupRequest {
    id: string;
}

export interface DeleteConfigTemplateRequest {
    id: string;
}

export interface GetConfigRequest {
    id: string;
}

export interface GetConfigByKeyRequest {
    resourceId: string;
    key: string;
}

export interface GetConfigGroupRequest {
    id: string;
}

export interface GetConfigTemplateRequest {
    id: string;
}

export interface GetConfigTemplateByKeyRequest {
    key: string;
}

export interface UpdateConfigRequest {
    id: string;
    updateConfig?: UpdateConfig;
}

export interface UpdateConfigGroupRequest {
    id: string;
    updateConfigGroup?: UpdateConfigGroup;
}

export interface UpdateConfigTemplateRequest {
    id: string;
    updateConfigTemplate?: UpdateConfigTemplate;
}

/**
 * 
 */
export class ConfigApi extends runtime.BaseAPI {

    /**
     * 创建配置
     */
    async createConfigRaw(requestParameters: CreateConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Config>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:write"]);
        }

        const response = await this.request({
            path: `/config/v1/configs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateConfigToJSON(requestParameters.createConfig),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigFromJSON(jsonValue));
    }

    /**
     * 创建配置
     */
    async createConfig(requestParameters: CreateConfigRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Config> {
        const response = await this.createConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 创建配置组
     */
    async createConfigGroupRaw(requestParameters: CreateConfigGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigGroup>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:write"]);
        }

        const response = await this.request({
            path: `/config/v1/config_groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateConfigGroupToJSON(requestParameters.createConfigGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigGroupFromJSON(jsonValue));
    }

    /**
     * 创建配置组
     */
    async createConfigGroup(requestParameters: CreateConfigGroupRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigGroup> {
        const response = await this.createConfigGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 创建配置模版
     */
    async createConfigTemplateRaw(requestParameters: CreateConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigTemplate>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:write"]);
        }

        const response = await this.request({
            path: `/config/v1/config_templates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateConfigTemplateToJSON(requestParameters.createConfigTemplate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigTemplateFromJSON(jsonValue));
    }

    /**
     * 创建配置模版
     */
    async createConfigTemplate(requestParameters: CreateConfigTemplateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigTemplate> {
        const response = await this.createConfigTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 删除配置
     */
    async deleteConfigRaw(requestParameters: DeleteConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:delete"]);
        }

        const response = await this.request({
            path: `/config/v1/configs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 删除配置
     */
    async deleteConfig(requestParameters: DeleteConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteConfigRaw(requestParameters, initOverrides);
    }

    /**
     * 删除配置组
     */
    async deleteConfigGroupRaw(requestParameters: DeleteConfigGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteConfigGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:delete"]);
        }

        const response = await this.request({
            path: `/config/v1/config_groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 删除配置组
     */
    async deleteConfigGroup(requestParameters: DeleteConfigGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteConfigGroupRaw(requestParameters, initOverrides);
    }

    /**
     * 删除配置模板
     */
    async deleteConfigTemplateRaw(requestParameters: DeleteConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteConfigTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:delete"]);
        }

        const response = await this.request({
            path: `/config/v1/config_templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 删除配置模板
     */
    async deleteConfigTemplate(requestParameters: DeleteConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteConfigTemplateRaw(requestParameters, initOverrides);
    }

    /**
     * 查询配置
     */
    async getConfigRaw(requestParameters: GetConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Config>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:read"]);
        }

        const response = await this.request({
            path: `/config/v1/configs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigFromJSON(jsonValue));
    }

    /**
     * 查询配置
     */
    async getConfig(requestParameters: GetConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Config> {
        const response = await this.getConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 根据配置项查询配置
     */
    async getConfigByKeyRaw(requestParameters: GetConfigByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Config>> {
        if (requestParameters.resourceId === null || requestParameters.resourceId === undefined) {
            throw new runtime.RequiredError('resourceId','Required parameter requestParameters.resourceId was null or undefined when calling getConfigByKey.');
        }

        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling getConfigByKey.');
        }

        const queryParameters: any = {};

        if (requestParameters.resourceId !== undefined) {
            queryParameters['resource_id'] = requestParameters.resourceId;
        }

        if (requestParameters.key !== undefined) {
            queryParameters['key'] = requestParameters.key;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:read"]);
        }

        const response = await this.request({
            path: `/config/v1/configs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigFromJSON(jsonValue));
    }

    /**
     * 根据配置项查询配置
     */
    async getConfigByKey(requestParameters: GetConfigByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Config> {
        const response = await this.getConfigByKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 查询配置组
     */
    async getConfigGroupRaw(requestParameters: GetConfigGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigGroup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getConfigGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:read"]);
        }

        const response = await this.request({
            path: `/config/v1/config_groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigGroupFromJSON(jsonValue));
    }

    /**
     * 查询配置组
     */
    async getConfigGroup(requestParameters: GetConfigGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigGroup> {
        const response = await this.getConfigGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 查询配置模板
     */
    async getConfigTemplateRaw(requestParameters: GetConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigTemplate>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getConfigTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:read"]);
        }

        const response = await this.request({
            path: `/config/v1/config_templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigTemplateFromJSON(jsonValue));
    }

    /**
     * 查询配置模板
     */
    async getConfigTemplate(requestParameters: GetConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigTemplate> {
        const response = await this.getConfigTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 根据配置项查询配置模版
     */
    async getConfigTemplateByKeyRaw(requestParameters: GetConfigTemplateByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigTemplate>> {
        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling getConfigTemplateByKey.');
        }

        const queryParameters: any = {};

        if (requestParameters.key !== undefined) {
            queryParameters['key'] = requestParameters.key;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:read"]);
        }

        const response = await this.request({
            path: `/config/v1/config_templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigTemplateFromJSON(jsonValue));
    }

    /**
     * 根据配置项查询配置模版
     */
    async getConfigTemplateByKey(requestParameters: GetConfigTemplateByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigTemplate> {
        const response = await this.getConfigTemplateByKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 更新配置
     */
    async updateConfigRaw(requestParameters: UpdateConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Config>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:write"]);
        }

        const response = await this.request({
            path: `/config/v1/configs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateConfigToJSON(requestParameters.updateConfig),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigFromJSON(jsonValue));
    }

    /**
     * 更新配置
     */
    async updateConfig(requestParameters: UpdateConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Config> {
        const response = await this.updateConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 更新配置组
     */
    async updateConfigGroupRaw(requestParameters: UpdateConfigGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigGroup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateConfigGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:write"]);
        }

        const response = await this.request({
            path: `/config/v1/config_groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateConfigGroupToJSON(requestParameters.updateConfigGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigGroupFromJSON(jsonValue));
    }

    /**
     * 更新配置组
     */
    async updateConfigGroup(requestParameters: UpdateConfigGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigGroup> {
        const response = await this.updateConfigGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 更新配置模板
     */
    async updateConfigTemplateRaw(requestParameters: UpdateConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigTemplate>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateConfigTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["configs:write"]);
        }

        const response = await this.request({
            path: `/config/v1/config_templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateConfigTemplateToJSON(requestParameters.updateConfigTemplate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigTemplateFromJSON(jsonValue));
    }

    /**
     * 更新配置模板
     */
    async updateConfigTemplate(requestParameters: UpdateConfigTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigTemplate> {
        const response = await this.updateConfigTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
