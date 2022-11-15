import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { XapiServiceOptionalParams, GetConfigByKeyOptionalParams, GetConfigByKeyResponse, CreateConfigOptionalParams, CreateConfigResponse, GetConfigOptionalParams, GetConfigResponse, UpdateConfigOptionalParams, UpdateConfigResponse, DeleteConfigOptionalParams, GetConfigTemplateByKeyOptionalParams, GetConfigTemplateByKeyResponse, CreateConfigTemplateOptionalParams, CreateConfigTemplateResponse, GetConfigTemplateOptionalParams, GetConfigTemplateResponse, UpdateConfigTemplateOptionalParams, UpdateConfigTemplateResponse, DeleteConfigTemplateOptionalParams, CreateConfigGroupOptionalParams, CreateConfigGroupResponse, GetConfigGroupOptionalParams, GetConfigGroupResponse, UpdateConfigGroupOptionalParams, UpdateConfigGroupResponse, DeleteConfigGroupOptionalParams, GetStorageTemporaryCredentialsOptionalParams, GetStorageTemporaryCredentialsResponse } from "./models";
export declare class XapiService extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the XapiService class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: XapiServiceOptionalParams);
    /**
     * 根据配置项查询配置
     * @param resourceId 配置所属的资源ID
     * @param key 配置项
     * @param options The options parameters.
     */
    getConfigByKey(resourceId: string, key: string, options?: GetConfigByKeyOptionalParams): Promise<GetConfigByKeyResponse>;
    /**
     * 创建配置
     * @param options The options parameters.
     */
    createConfig(options?: CreateConfigOptionalParams): Promise<CreateConfigResponse>;
    /**
     * 查询配置
     * @param id 配置ID
     * @param options The options parameters.
     */
    getConfig(id: string, options?: GetConfigOptionalParams): Promise<GetConfigResponse>;
    /**
     * 更新配置
     * @param id 配置ID
     * @param options The options parameters.
     */
    updateConfig(id: string, options?: UpdateConfigOptionalParams): Promise<UpdateConfigResponse>;
    /**
     * 删除配置
     * @param id 配置ID
     * @param options The options parameters.
     */
    deleteConfig(id: string, options?: DeleteConfigOptionalParams): Promise<void>;
    /**
     * 根据配置项查询配置模版
     * @param key 配置项
     * @param options The options parameters.
     */
    getConfigTemplateByKey(key: string, options?: GetConfigTemplateByKeyOptionalParams): Promise<GetConfigTemplateByKeyResponse>;
    /**
     * 创建配置模版
     * @param options The options parameters.
     */
    createConfigTemplate(options?: CreateConfigTemplateOptionalParams): Promise<CreateConfigTemplateResponse>;
    /**
     * 查询配置模板
     * @param id 配置模板ID
     * @param options The options parameters.
     */
    getConfigTemplate(id: string, options?: GetConfigTemplateOptionalParams): Promise<GetConfigTemplateResponse>;
    /**
     * 更新配置模板
     * @param id 配置模板ID
     * @param options The options parameters.
     */
    updateConfigTemplate(id: string, options?: UpdateConfigTemplateOptionalParams): Promise<UpdateConfigTemplateResponse>;
    /**
     * 删除配置模板
     * @param id 配置模板ID
     * @param options The options parameters.
     */
    deleteConfigTemplate(id: string, options?: DeleteConfigTemplateOptionalParams): Promise<void>;
    /**
     * 创建配置组
     * @param options The options parameters.
     */
    createConfigGroup(options?: CreateConfigGroupOptionalParams): Promise<CreateConfigGroupResponse>;
    /**
     * 查询配置组
     * @param id 配置组ID
     * @param options The options parameters.
     */
    getConfigGroup(id: string, options?: GetConfigGroupOptionalParams): Promise<GetConfigGroupResponse>;
    /**
     * 更新配置组
     * @param id 配置组ID
     * @param options The options parameters.
     */
    updateConfigGroup(id: string, options?: UpdateConfigGroupOptionalParams): Promise<UpdateConfigGroupResponse>;
    /**
     * 删除配置组
     * @param id 配置组ID
     * @param options The options parameters.
     */
    deleteConfigGroup(id: string, options?: DeleteConfigGroupOptionalParams): Promise<void>;
    /**
     * 获取上传文件临时凭证
     * @param options The options parameters.
     */
    getStorageTemporaryCredentials(options?: GetStorageTemporaryCredentialsOptionalParams): Promise<GetStorageTemporaryCredentialsResponse>;
}
//# sourceMappingURL=xapiService.d.ts.map