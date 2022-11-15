import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  XapiServiceOptionalParams,
  GetConfigByKeyOptionalParams,
  GetConfigByKeyResponse,
  CreateConfigOptionalParams,
  CreateConfigResponse,
  GetConfigOptionalParams,
  GetConfigResponse,
  UpdateConfigOptionalParams,
  UpdateConfigResponse,
  DeleteConfigOptionalParams,
  GetConfigTemplateByKeyOptionalParams,
  GetConfigTemplateByKeyResponse,
  CreateConfigTemplateOptionalParams,
  CreateConfigTemplateResponse,
  GetConfigTemplateOptionalParams,
  GetConfigTemplateResponse,
  UpdateConfigTemplateOptionalParams,
  UpdateConfigTemplateResponse,
  DeleteConfigTemplateOptionalParams,
  CreateConfigGroupOptionalParams,
  CreateConfigGroupResponse,
  GetConfigGroupOptionalParams,
  GetConfigGroupResponse,
  UpdateConfigGroupOptionalParams,
  UpdateConfigGroupResponse,
  DeleteConfigGroupOptionalParams,
  GetStorageTemporaryCredentialsOptionalParams,
  GetStorageTemporaryCredentialsResponse
} from "./models";

export class XapiService extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the XapiService class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: XapiServiceOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: XapiServiceOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-xapis/0.0.3`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://api.growingbox.cn"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes: `${optionsWithDefaults.credentialScopes}`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://api.growingbox.cn";
  }

  /**
   * 根据配置项查询配置
   * @param resourceId 配置所属的资源ID
   * @param key 配置项
   * @param options The options parameters.
   */
  getConfigByKey(
    resourceId: string,
    key: string,
    options?: GetConfigByKeyOptionalParams
  ): Promise<GetConfigByKeyResponse> {
    return this.sendOperationRequest(
      { resourceId, key, options },
      getConfigByKeyOperationSpec
    );
  }

  /**
   * 创建配置
   * @param options The options parameters.
   */
  createConfig(
    options?: CreateConfigOptionalParams
  ): Promise<CreateConfigResponse> {
    return this.sendOperationRequest({ options }, createConfigOperationSpec);
  }

  /**
   * 查询配置
   * @param id 配置ID
   * @param options The options parameters.
   */
  getConfig(
    id: string,
    options?: GetConfigOptionalParams
  ): Promise<GetConfigResponse> {
    return this.sendOperationRequest({ id, options }, getConfigOperationSpec);
  }

  /**
   * 更新配置
   * @param id 配置ID
   * @param options The options parameters.
   */
  updateConfig(
    id: string,
    options?: UpdateConfigOptionalParams
  ): Promise<UpdateConfigResponse> {
    return this.sendOperationRequest(
      { id, options },
      updateConfigOperationSpec
    );
  }

  /**
   * 删除配置
   * @param id 配置ID
   * @param options The options parameters.
   */
  deleteConfig(
    id: string,
    options?: DeleteConfigOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { id, options },
      deleteConfigOperationSpec
    );
  }

  /**
   * 根据配置项查询配置模版
   * @param key 配置项
   * @param options The options parameters.
   */
  getConfigTemplateByKey(
    key: string,
    options?: GetConfigTemplateByKeyOptionalParams
  ): Promise<GetConfigTemplateByKeyResponse> {
    return this.sendOperationRequest(
      { key, options },
      getConfigTemplateByKeyOperationSpec
    );
  }

  /**
   * 创建配置模版
   * @param options The options parameters.
   */
  createConfigTemplate(
    options?: CreateConfigTemplateOptionalParams
  ): Promise<CreateConfigTemplateResponse> {
    return this.sendOperationRequest(
      { options },
      createConfigTemplateOperationSpec
    );
  }

  /**
   * 查询配置模板
   * @param id 配置模板ID
   * @param options The options parameters.
   */
  getConfigTemplate(
    id: string,
    options?: GetConfigTemplateOptionalParams
  ): Promise<GetConfigTemplateResponse> {
    return this.sendOperationRequest(
      { id, options },
      getConfigTemplateOperationSpec
    );
  }

  /**
   * 更新配置模板
   * @param id 配置模板ID
   * @param options The options parameters.
   */
  updateConfigTemplate(
    id: string,
    options?: UpdateConfigTemplateOptionalParams
  ): Promise<UpdateConfigTemplateResponse> {
    return this.sendOperationRequest(
      { id, options },
      updateConfigTemplateOperationSpec
    );
  }

  /**
   * 删除配置模板
   * @param id 配置模板ID
   * @param options The options parameters.
   */
  deleteConfigTemplate(
    id: string,
    options?: DeleteConfigTemplateOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { id, options },
      deleteConfigTemplateOperationSpec
    );
  }

  /**
   * 创建配置组
   * @param options The options parameters.
   */
  createConfigGroup(
    options?: CreateConfigGroupOptionalParams
  ): Promise<CreateConfigGroupResponse> {
    return this.sendOperationRequest(
      { options },
      createConfigGroupOperationSpec
    );
  }

  /**
   * 查询配置组
   * @param id 配置组ID
   * @param options The options parameters.
   */
  getConfigGroup(
    id: string,
    options?: GetConfigGroupOptionalParams
  ): Promise<GetConfigGroupResponse> {
    return this.sendOperationRequest(
      { id, options },
      getConfigGroupOperationSpec
    );
  }

  /**
   * 更新配置组
   * @param id 配置组ID
   * @param options The options parameters.
   */
  updateConfigGroup(
    id: string,
    options?: UpdateConfigGroupOptionalParams
  ): Promise<UpdateConfigGroupResponse> {
    return this.sendOperationRequest(
      { id, options },
      updateConfigGroupOperationSpec
    );
  }

  /**
   * 删除配置组
   * @param id 配置组ID
   * @param options The options parameters.
   */
  deleteConfigGroup(
    id: string,
    options?: DeleteConfigGroupOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { id, options },
      deleteConfigGroupOperationSpec
    );
  }

  /**
   * 获取上传文件临时凭证
   * @param options The options parameters.
   */
  getStorageTemporaryCredentials(
    options?: GetStorageTemporaryCredentialsOptionalParams
  ): Promise<GetStorageTemporaryCredentialsResponse> {
    return this.sendOperationRequest(
      { options },
      getStorageTemporaryCredentialsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getConfigByKeyOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/configs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Config
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.resourceId, Parameters.key],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createConfigOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/configs",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Config
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getConfigOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/configs/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Config
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const updateConfigOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/configs/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Config
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteConfigOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/configs/{id}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const getConfigTemplateByKeyOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_templates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigTemplate
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.key],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createConfigTemplateOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_templates",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigTemplate
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getConfigTemplateOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_templates/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigTemplate
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const updateConfigTemplateOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_templates/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigTemplate
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteConfigTemplateOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_templates/{id}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const createConfigGroupOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_groups",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigGroup
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getConfigGroupOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_groups/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigGroup
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const updateConfigGroupOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_groups/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigGroup
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteConfigGroupOperationSpec: coreClient.OperationSpec = {
  path: "/config/v1/config_groups/{id}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const getStorageTemporaryCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/storage/v1/temporary_credentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTemporaryCredentials
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.provider, Parameters.path],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
