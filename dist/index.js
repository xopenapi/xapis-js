'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var coreClient = require('@azure/core-client');
var coreRestPipeline = require('@azure/core-rest-pipeline');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var coreClient__namespace = /*#__PURE__*/_interopNamespace(coreClient);
var coreRestPipeline__namespace = /*#__PURE__*/_interopNamespace(coreRestPipeline);

/** Known values of {@link StorageProvider} that the service accepts. */
exports.KnownStorageProvider = void 0;
(function (KnownStorageProvider) {
    /** Qcloud */
    KnownStorageProvider["Qcloud"] = "qcloud";
    /** Aliyun */
    KnownStorageProvider["Aliyun"] = "aliyun";
})(exports.KnownStorageProvider || (exports.KnownStorageProvider = {}));

const Config = {
    type: {
        name: "Composite",
        className: "Config",
        modelProperties: {
            id: {
                serializedName: "id",
                required: true,
                type: {
                    name: "String"
                }
            },
            resourceId: {
                serializedName: "resource_id",
                required: true,
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            templateId: {
                serializedName: "template_id",
                type: {
                    name: "String"
                }
            },
            key: {
                serializedName: "key",
                required: true,
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            createdAt: {
                serializedName: "created_at",
                required: true,
                type: {
                    name: "DateTime"
                }
            },
            updatedAt: {
                serializedName: "updated_at",
                type: {
                    name: "DateTime"
                }
            }
        }
    }
};
const ErrorModel = {
    type: {
        name: "Composite",
        className: "ErrorModel",
        modelProperties: {
            code: {
                serializedName: "code",
                required: true,
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                type: {
                    name: "String"
                }
            },
            param: {
                serializedName: "param",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const CreateConfig = {
    type: {
        name: "Composite",
        className: "CreateConfig",
        modelProperties: {
            resourceId: {
                serializedName: "resource_id",
                required: true,
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            templateId: {
                serializedName: "template_id",
                type: {
                    name: "String"
                }
            },
            key: {
                serializedName: "key",
                required: true,
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const UpdateConfig = {
    type: {
        name: "Composite",
        className: "UpdateConfig",
        modelProperties: {
            resourceId: {
                serializedName: "resource_id",
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            templateId: {
                serializedName: "template_id",
                type: {
                    name: "String"
                }
            },
            key: {
                serializedName: "key",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const ConfigTemplate = {
    type: {
        name: "Composite",
        className: "ConfigTemplate",
        modelProperties: {
            id: {
                serializedName: "id",
                required: true,
                type: {
                    name: "String"
                }
            },
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            key: {
                serializedName: "key",
                required: true,
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            },
            createdAt: {
                serializedName: "created_at",
                required: true,
                type: {
                    name: "DateTime"
                }
            },
            updatedAt: {
                serializedName: "updated_at",
                type: {
                    name: "DateTime"
                }
            }
        }
    }
};
const CreateConfigTemplate = {
    type: {
        name: "Composite",
        className: "CreateConfigTemplate",
        modelProperties: {
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            key: {
                serializedName: "key",
                required: true,
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const UpdateConfigTemplate = {
    type: {
        name: "Composite",
        className: "UpdateConfigTemplate",
        modelProperties: {
            groupId: {
                serializedName: "group_id",
                type: {
                    name: "String"
                }
            },
            key: {
                serializedName: "key",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
const CreateConfigGroup = {
    type: {
        name: "Composite",
        className: "CreateConfigGroup",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ConfigGroup = {
    type: {
        name: "Composite",
        className: "ConfigGroup",
        modelProperties: {
            id: {
                serializedName: "id",
                required: true,
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            createdAt: {
                serializedName: "created_at",
                required: true,
                type: {
                    name: "DateTime"
                }
            },
            updatedAt: {
                serializedName: "updated_at",
                type: {
                    name: "DateTime"
                }
            }
        }
    }
};
const UpdateConfigGroup = {
    type: {
        name: "Composite",
        className: "UpdateConfigGroup",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const StorageTemporaryCredentials = {
    type: {
        name: "Composite",
        className: "StorageTemporaryCredentials",
        modelProperties: {
            provider: {
                serializedName: "provider",
                required: true,
                type: {
                    name: "String"
                }
            },
            bucket: {
                serializedName: "bucket",
                required: true,
                type: {
                    name: "String"
                }
            },
            region: {
                serializedName: "region",
                required: true,
                type: {
                    name: "String"
                }
            },
            cdn: {
                serializedName: "cdn",
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                type: {
                    name: "String"
                }
            },
            credentials: {
                serializedName: "credentials",
                required: true,
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};

var Mappers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Config: Config,
    ErrorModel: ErrorModel,
    CreateConfig: CreateConfig,
    UpdateConfig: UpdateConfig,
    ConfigTemplate: ConfigTemplate,
    CreateConfigTemplate: CreateConfigTemplate,
    UpdateConfigTemplate: UpdateConfigTemplate,
    CreateConfigGroup: CreateConfigGroup,
    ConfigGroup: ConfigGroup,
    UpdateConfigGroup: UpdateConfigGroup,
    StorageTemporaryCredentials: StorageTemporaryCredentials
});

const accept = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String"
        }
    }
};
const $host = {
    parameterPath: "$host",
    mapper: {
        serializedName: "$host",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
const resourceId = {
    parameterPath: "resourceId",
    mapper: {
        serializedName: "resource_id",
        required: true,
        type: {
            name: "String"
        }
    }
};
const key = {
    parameterPath: "key",
    mapper: {
        serializedName: "key",
        required: true,
        type: {
            name: "String"
        }
    }
};
const contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String"
        }
    }
};
const body = {
    parameterPath: ["options", "body"],
    mapper: CreateConfig
};
const id = {
    parameterPath: "id",
    mapper: {
        serializedName: "id",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body1 = {
    parameterPath: ["options", "body"],
    mapper: UpdateConfig
};
const body2 = {
    parameterPath: ["options", "body"],
    mapper: CreateConfigTemplate
};
const body3 = {
    parameterPath: ["options", "body"],
    mapper: UpdateConfigTemplate
};
const body4 = {
    parameterPath: ["options", "body"],
    mapper: CreateConfigGroup
};
const body5 = {
    parameterPath: ["options", "body"],
    mapper: UpdateConfigGroup
};
const provider = {
    parameterPath: ["options", "provider"],
    mapper: {
        serializedName: "provider",
        type: {
            name: "String"
        }
    }
};
const path = {
    parameterPath: ["options", "path"],
    mapper: {
        serializedName: "path",
        type: {
            name: "String"
        }
    }
};

class XapiService extends coreClient__namespace.ServiceClient {
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
                coreRestPipeline__namespace.bearerTokenAuthenticationPolicyName);
        }
        if (!options ||
            !options.pipeline ||
            options.pipeline.getOrderedPolicies().length == 0 ||
            !bearerTokenAuthenticationPolicyFound) {
            this.pipeline.removePolicy({
                name: coreRestPipeline__namespace.bearerTokenAuthenticationPolicyName
            });
            this.pipeline.addPolicy(coreRestPipeline__namespace.bearerTokenAuthenticationPolicy({
                credential: credentials,
                scopes: `${optionsWithDefaults.credentialScopes}`,
                challengeCallbacks: {
                    authorizeRequestOnChallenge: coreClient__namespace.authorizeRequestOnClaimChallenge
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
const serializer = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const getConfigByKeyOperationSpec = {
    path: "/config/v1/configs",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Config
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    queryParameters: [resourceId, key],
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const createConfigOperationSpec = {
    path: "/config/v1/configs",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Config
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    requestBody: body,
    urlParameters: [$host],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const getConfigOperationSpec = {
    path: "/config/v1/configs/{id}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Config
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    urlParameters: [$host, id],
    headerParameters: [accept],
    serializer
};
const updateConfigOperationSpec = {
    path: "/config/v1/configs/{id}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Config
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    requestBody: body1,
    urlParameters: [$host, id],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const deleteConfigOperationSpec = {
    path: "/config/v1/configs/{id}",
    httpMethod: "DELETE",
    responses: {
        200: {},
        default: {
            bodyMapper: ErrorModel
        }
    },
    urlParameters: [$host, id],
    headerParameters: [accept],
    serializer
};
const getConfigTemplateByKeyOperationSpec = {
    path: "/config/v1/config_templates",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: ConfigTemplate
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    queryParameters: [key],
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};
const createConfigTemplateOperationSpec = {
    path: "/config/v1/config_templates",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: ConfigTemplate
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    requestBody: body2,
    urlParameters: [$host],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const getConfigTemplateOperationSpec = {
    path: "/config/v1/config_templates/{id}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: ConfigTemplate
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    urlParameters: [$host, id],
    headerParameters: [accept],
    serializer
};
const updateConfigTemplateOperationSpec = {
    path: "/config/v1/config_templates/{id}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: ConfigTemplate
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    requestBody: body3,
    urlParameters: [$host, id],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const deleteConfigTemplateOperationSpec = {
    path: "/config/v1/config_templates/{id}",
    httpMethod: "DELETE",
    responses: {
        200: {},
        default: {
            bodyMapper: ErrorModel
        }
    },
    urlParameters: [$host, id],
    headerParameters: [accept],
    serializer
};
const createConfigGroupOperationSpec = {
    path: "/config/v1/config_groups",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: ConfigGroup
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    requestBody: body4,
    urlParameters: [$host],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const getConfigGroupOperationSpec = {
    path: "/config/v1/config_groups/{id}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: ConfigGroup
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    urlParameters: [$host, id],
    headerParameters: [accept],
    serializer
};
const updateConfigGroupOperationSpec = {
    path: "/config/v1/config_groups/{id}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: ConfigGroup
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    requestBody: body5,
    urlParameters: [$host, id],
    headerParameters: [accept, contentType],
    mediaType: "json",
    serializer
};
const deleteConfigGroupOperationSpec = {
    path: "/config/v1/config_groups/{id}",
    httpMethod: "DELETE",
    responses: {
        200: {},
        default: {
            bodyMapper: ErrorModel
        }
    },
    urlParameters: [$host, id],
    headerParameters: [accept],
    serializer
};
const getStorageTemporaryCredentialsOperationSpec = {
    path: "/storage/v1/temporary_credentials",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: StorageTemporaryCredentials
        },
        default: {
            bodyMapper: ErrorModel
        }
    },
    queryParameters: [provider, path],
    urlParameters: [$host],
    headerParameters: [accept],
    serializer
};

exports.XapiService = XapiService;
//# sourceMappingURL=index.js.map
