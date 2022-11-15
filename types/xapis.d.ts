import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';

export declare interface Config {
    /** 配置ID */
    id: string;
    /** 所属的资源ID */
    resourceId: string;
    /** 所属的配置组ID */
    groupId?: string;
    /** 配置模板ID */
    templateId?: string;
    /** 配置项 */
    key: string;
    /** 配置内容 */
    value: Record<string, unknown>;
    /** 创建时间 */
    createdAt: Date;
    /** 最后更新时间 */
    updatedAt?: Date;
}

export declare interface ConfigGroup {
    /** 配置组ID */
    id: string;
    /** 配置组名称 */
    name: string;
    /** 创建时间 */
    createdAt: Date;
    /** 最后更新时间 */
    updatedAt?: Date;
}

export declare interface ConfigTemplate {
    /** 配置模板ID */
    id: string;
    /** 所属的配置组ID */
    groupId?: string;
    /** 配置项 */
    key: string;
    /** 配置内容 */
    value: Record<string, unknown>;
    /** 创建时间 */
    createdAt: Date;
    /** 最后更新时间 */
    updatedAt?: Date;
}

export declare interface CreateConfig {
    /** 所属的资源ID */
    resourceId: string;
    /** 所属的配置组ID */
    groupId?: string;
    /** 配置模板ID */
    templateId?: string;
    /** 配置项 */
    key: string;
    /** 配置内容 */
    value: Record<string, unknown>;
}

export declare interface CreateConfigGroup {
    /** 配置组名称 */
    name: string;
}

/** Optional parameters. */
export declare interface CreateConfigGroupOptionalParams extends coreClient.OperationOptions {
    body?: CreateConfigGroup;
}

/** Contains response data for the createConfigGroup operation. */
export declare type CreateConfigGroupResponse = ConfigGroup;

/** Optional parameters. */
export declare interface CreateConfigOptionalParams extends coreClient.OperationOptions {
    body?: CreateConfig;
}

/** Contains response data for the createConfig operation. */
export declare type CreateConfigResponse = Config;

export declare interface CreateConfigTemplate {
    /** 所属的配置组ID */
    groupId?: string;
    /** 配置项 */
    key: string;
    /** 配置内容 */
    value: Record<string, unknown>;
}

/** Optional parameters. */
export declare interface CreateConfigTemplateOptionalParams extends coreClient.OperationOptions {
    body?: CreateConfigTemplate;
}

/** Contains response data for the createConfigTemplate operation. */
export declare type CreateConfigTemplateResponse = ConfigTemplate;

/** Optional parameters. */
export declare interface DeleteConfigGroupOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteConfigOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DeleteConfigTemplateOptionalParams extends coreClient.OperationOptions {
}

export declare interface ErrorModel {
    /** 错误码 */
    code: string;
    /** 错误消息 */
    message?: string;
    /** 发生错误的字段 */
    param?: string;
}

/** Optional parameters. */
export declare interface GetConfigByKeyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfigByKey operation. */
export declare type GetConfigByKeyResponse = Config;

/** Optional parameters. */
export declare interface GetConfigGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfigGroup operation. */
export declare type GetConfigGroupResponse = ConfigGroup;

/** Optional parameters. */
export declare interface GetConfigOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfig operation. */
export declare type GetConfigResponse = Config;

/** Optional parameters. */
export declare interface GetConfigTemplateByKeyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfigTemplateByKey operation. */
export declare type GetConfigTemplateByKeyResponse = ConfigTemplate;

/** Optional parameters. */
export declare interface GetConfigTemplateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getConfigTemplate operation. */
export declare type GetConfigTemplateResponse = ConfigTemplate;

/** Optional parameters. */
export declare interface GetStorageTemporaryCredentialsOptionalParams extends coreClient.OperationOptions {
    /** 指定使用的云储存平台，可选值有：qcloud（腾讯云）、aliyun（阿里云）。如果未指定，使用默认平台。 */
    provider?: StorageProvider;
    /** 上传路径，可以为空 */
    path?: string;
}

/** Contains response data for the getStorageTemporaryCredentials operation. */
export declare type GetStorageTemporaryCredentialsResponse = StorageTemporaryCredentials;

/** Known values of {@link StorageProvider} that the service accepts. */
export declare enum KnownStorageProvider {
    /** Qcloud */
    Qcloud = "qcloud",
    /** Aliyun */
    Aliyun = "aliyun"
}

/**
 * Defines values for StorageProvider. \
 * {@link KnownStorageProvider} can be used interchangeably with StorageProvider,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **qcloud** \
 * **aliyun**
 */
export declare type StorageProvider = string;

export declare interface StorageTemporaryCredentials {
    /** 使用的云存储平台 */
    provider: StorageProvider;
    /** 存储桶 */
    bucket: string;
    /** 地区 */
    region: string;
    /** 存储对应的CDN地址 */
    cdn?: string;
    /** 上传路径对应的CDN地址 */
    url?: string;
    /** 存储平台的临时上传凭证参数 */
    credentials: Record<string, unknown>;
}

export declare interface UpdateConfig {
    /** 所属的资源ID */
    resourceId?: string;
    /** 所属的配置组ID */
    groupId?: string;
    /** 配置模板ID */
    templateId?: string;
    /** 配置项 */
    key?: string;
    /** 配置内容 */
    value?: Record<string, unknown>;
}

export declare interface UpdateConfigGroup {
    /** 配置组名称 */
    name?: string;
}

/** Optional parameters. */
export declare interface UpdateConfigGroupOptionalParams extends coreClient.OperationOptions {
    body?: UpdateConfigGroup;
}

/** Contains response data for the updateConfigGroup operation. */
export declare type UpdateConfigGroupResponse = ConfigGroup;

/** Optional parameters. */
export declare interface UpdateConfigOptionalParams extends coreClient.OperationOptions {
    body?: UpdateConfig;
}

/** Contains response data for the updateConfig operation. */
export declare type UpdateConfigResponse = Config;

export declare interface UpdateConfigTemplate {
    /** 所属的配置组ID */
    groupId?: string;
    /** 配置项 */
    key?: string;
    /** 配置内容 */
    value?: Record<string, unknown>;
}

/** Optional parameters. */
export declare interface UpdateConfigTemplateOptionalParams extends coreClient.OperationOptions {
    body?: UpdateConfigTemplate;
}

/** Contains response data for the updateConfigTemplate operation. */
export declare type UpdateConfigTemplateResponse = ConfigTemplate;

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

/** Optional parameters. */
export declare interface XapiServiceOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export { }
