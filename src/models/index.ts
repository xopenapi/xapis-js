import * as coreClient from "@azure/core-client";

export interface Config {
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

export interface ErrorModel {
  /** 错误码 */
  code: string;
  /** 错误消息 */
  message?: string;
  /** 发生错误的字段 */
  param?: string;
}

export interface CreateConfig {
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

export interface UpdateConfig {
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

export interface ConfigTemplate {
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

export interface CreateConfigTemplate {
  /** 所属的配置组ID */
  groupId?: string;
  /** 配置项 */
  key: string;
  /** 配置内容 */
  value: Record<string, unknown>;
}

export interface UpdateConfigTemplate {
  /** 所属的配置组ID */
  groupId?: string;
  /** 配置项 */
  key?: string;
  /** 配置内容 */
  value?: Record<string, unknown>;
}

export interface CreateConfigGroup {
  /** 配置组名称 */
  name: string;
}

export interface ConfigGroup {
  /** 配置组ID */
  id: string;
  /** 配置组名称 */
  name: string;
  /** 创建时间 */
  createdAt: Date;
  /** 最后更新时间 */
  updatedAt?: Date;
}

export interface UpdateConfigGroup {
  /** 配置组名称 */
  name?: string;
}

export interface StorageTemporaryCredentials {
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

/** Known values of {@link StorageProvider} that the service accepts. */
export enum KnownStorageProvider {
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
export type StorageProvider = string;

/** Optional parameters. */
export interface GetConfigByKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getConfigByKey operation. */
export type GetConfigByKeyResponse = Config;

/** Optional parameters. */
export interface CreateConfigOptionalParams
  extends coreClient.OperationOptions {
  body?: CreateConfig;
}

/** Contains response data for the createConfig operation. */
export type CreateConfigResponse = Config;

/** Optional parameters. */
export interface GetConfigOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getConfig operation. */
export type GetConfigResponse = Config;

/** Optional parameters. */
export interface UpdateConfigOptionalParams
  extends coreClient.OperationOptions {
  body?: UpdateConfig;
}

/** Contains response data for the updateConfig operation. */
export type UpdateConfigResponse = Config;

/** Optional parameters. */
export interface DeleteConfigOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetConfigTemplateByKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getConfigTemplateByKey operation. */
export type GetConfigTemplateByKeyResponse = ConfigTemplate;

/** Optional parameters. */
export interface CreateConfigTemplateOptionalParams
  extends coreClient.OperationOptions {
  body?: CreateConfigTemplate;
}

/** Contains response data for the createConfigTemplate operation. */
export type CreateConfigTemplateResponse = ConfigTemplate;

/** Optional parameters. */
export interface GetConfigTemplateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getConfigTemplate operation. */
export type GetConfigTemplateResponse = ConfigTemplate;

/** Optional parameters. */
export interface UpdateConfigTemplateOptionalParams
  extends coreClient.OperationOptions {
  body?: UpdateConfigTemplate;
}

/** Contains response data for the updateConfigTemplate operation. */
export type UpdateConfigTemplateResponse = ConfigTemplate;

/** Optional parameters. */
export interface DeleteConfigTemplateOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CreateConfigGroupOptionalParams
  extends coreClient.OperationOptions {
  body?: CreateConfigGroup;
}

/** Contains response data for the createConfigGroup operation. */
export type CreateConfigGroupResponse = ConfigGroup;

/** Optional parameters. */
export interface GetConfigGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getConfigGroup operation. */
export type GetConfigGroupResponse = ConfigGroup;

/** Optional parameters. */
export interface UpdateConfigGroupOptionalParams
  extends coreClient.OperationOptions {
  body?: UpdateConfigGroup;
}

/** Contains response data for the updateConfigGroup operation. */
export type UpdateConfigGroupResponse = ConfigGroup;

/** Optional parameters. */
export interface DeleteConfigGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetStorageTemporaryCredentialsOptionalParams
  extends coreClient.OperationOptions {
  /** 指定使用的云储存平台，可选值有：qcloud（腾讯云）、aliyun（阿里云）。如果未指定，使用默认平台。 */
  provider?: StorageProvider;
  /** 上传路径，可以为空 */
  path?: string;
}

/** Contains response data for the getStorageTemporaryCredentials operation. */
export type GetStorageTemporaryCredentialsResponse = StorageTemporaryCredentials;

/** Optional parameters. */
export interface XapiServiceOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
