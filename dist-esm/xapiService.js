import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
export class XapiService extends coreClient.ServiceClient {
    /**
     * Initializes a new instance of the XapiService class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials, options) {
        var _a, _b;
        if (credentials === undefined) {
            throw new Error("'credentials' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        const defaults = {
            requestContentType: "application/json; charset=utf-8",
            credential: credentials
        };
        const packageDetails = `azsdk-js-xapis/0.0.3`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        const optionsWithDefaults = Object.assign(Object.assign(Object.assign({}, defaults), options), { userAgentOptions: {
                userAgentPrefix
            }, baseUri: (_b = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri) !== null && _b !== void 0 ? _b : "https://api.growingbox.cn" });
        super(optionsWithDefaults);
        let bearerTokenAuthenticationPolicyFound = false;
        if ((options === null || options === void 0 ? void 0 : options.pipeline) && options.pipeline.getOrderedPolicies().length > 0) {
            const pipelinePolicies = options.pipeline.getOrderedPolicies();
            bearerTokenAuthenticationPolicyFound = pipelinePolicies.some((pipelinePolicy) => pipelinePolicy.name ===
                coreRestPipeline.bearerTokenAuthenticationPolicyName);
        }
        if (!options ||
            !options.pipeline ||
            options.pipeline.getOrderedPolicies().length == 0 ||
            !bearerTokenAuthenticationPolicyFound) {
            this.pipeline.removePolicy({
                name: coreRestPipeline.bearerTokenAuthenticationPolicyName
            });
            this.pipeline.addPolicy(coreRestPipeline.bearerTokenAuthenticationPolicy({
                credential: credentials,
                scopes: `${optionsWithDefaults.credentialScopes}`,
                challengeCallbacks: {
                    authorizeRequestOnChallenge: coreClient.authorizeRequestOnClaimChallenge
                }
            }));
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
    getConfigByKey(resourceId, key, options) {
        return this.sendOperationRequest({ resourceId, key, options }, getConfigByKeyOperationSpec);
    }
    /**
     * 创建配置
     * @param options The options parameters.
     */
    createConfig(options) {
        return this.sendOperationRequest({ options }, createConfigOperationSpec);
    }
    /**
     * 查询配置
     * @param id 配置ID
     * @param options The options parameters.
     */
    getConfig(id, options) {
        return this.sendOperationRequest({ id, options }, getConfigOperationSpec);
    }
    /**
     * 更新配置
     * @param id 配置ID
     * @param options The options parameters.
     */
    updateConfig(id, options) {
        return this.sendOperationRequest({ id, options }, updateConfigOperationSpec);
    }
    /**
     * 删除配置
     * @param id 配置ID
     * @param options The options parameters.
     */
    deleteConfig(id, options) {
        return this.sendOperationRequest({ id, options }, deleteConfigOperationSpec);
    }
    /**
     * 根据配置项查询配置模版
     * @param key 配置项
     * @param options The options parameters.
     */
    getConfigTemplateByKey(key, options) {
        return this.sendOperationRequest({ key, options }, getConfigTemplateByKeyOperationSpec);
    }
    /**
     * 创建配置模版
     * @param options The options parameters.
     */
    createConfigTemplate(options) {
        return this.sendOperationRequest({ options }, createConfigTemplateOperationSpec);
    }
    /**
     * 查询配置模板
     * @param id 配置模板ID
     * @param options The options parameters.
     */
    getConfigTemplate(id, options) {
        return this.sendOperationRequest({ id, options }, getConfigTemplateOperationSpec);
    }
    /**
     * 更新配置模板
     * @param id 配置模板ID
     * @param options The options parameters.
     */
    updateConfigTemplate(id, options) {
        return this.sendOperationRequest({ id, options }, updateConfigTemplateOperationSpec);
    }
    /**
     * 删除配置模板
     * @param id 配置模板ID
     * @param options The options parameters.
     */
    deleteConfigTemplate(id, options) {
        return this.sendOperationRequest({ id, options }, deleteConfigTemplateOperationSpec);
    }
    /**
     * 创建配置组
     * @param options The options parameters.
     */
    createConfigGroup(options) {
        return this.sendOperationRequest({ options }, createConfigGroupOperationSpec);
    }
    /**
     * 查询配置组
     * @param id 配置组ID
     * @param options The options parameters.
     */
    getConfigGroup(id, options) {
        return this.sendOperationRequest({ id, options }, getConfigGroupOperationSpec);
    }
    /**
     * 更新配置组
     * @param id 配置组ID
     * @param options The options parameters.
     */
    updateConfigGroup(id, options) {
        return this.sendOperationRequest({ id, options }, updateConfigGroupOperationSpec);
    }
    /**
     * 删除配置组
     * @param id 配置组ID
     * @param options The options parameters.
     */
    deleteConfigGroup(id, options) {
        return this.sendOperationRequest({ id, options }, deleteConfigGroupOperationSpec);
    }
    /**
     * 获取上传文件临时凭证
     * @param options The options parameters.
     */
    getStorageTemporaryCredentials(options) {
        return this.sendOperationRequest({ options }, getStorageTemporaryCredentialsOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getConfigByKeyOperationSpec = {
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
const createConfigOperationSpec = {
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
const getConfigOperationSpec = {
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
const updateConfigOperationSpec = {
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
const deleteConfigOperationSpec = {
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
const getConfigTemplateByKeyOperationSpec = {
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
const createConfigTemplateOperationSpec = {
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
const getConfigTemplateOperationSpec = {
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
const updateConfigTemplateOperationSpec = {
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
const deleteConfigTemplateOperationSpec = {
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
const createConfigGroupOperationSpec = {
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
const getConfigGroupOperationSpec = {
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
const updateConfigGroupOperationSpec = {
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
const deleteConfigGroupOperationSpec = {
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
const getStorageTemporaryCredentialsOperationSpec = {
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
//# sourceMappingURL=xapiService.js.map