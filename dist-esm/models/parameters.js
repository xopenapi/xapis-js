import { CreateConfig as CreateConfigMapper, UpdateConfig as UpdateConfigMapper, CreateConfigTemplate as CreateConfigTemplateMapper, UpdateConfigTemplate as UpdateConfigTemplateMapper, CreateConfigGroup as CreateConfigGroupMapper, UpdateConfigGroup as UpdateConfigGroupMapper } from "../models/mappers";
export const accept = {
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
export const $host = {
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
export const resourceId = {
    parameterPath: "resourceId",
    mapper: {
        serializedName: "resource_id",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const key = {
    parameterPath: "key",
    mapper: {
        serializedName: "key",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const contentType = {
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
export const body = {
    parameterPath: ["options", "body"],
    mapper: CreateConfigMapper
};
export const id = {
    parameterPath: "id",
    mapper: {
        serializedName: "id",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const body1 = {
    parameterPath: ["options", "body"],
    mapper: UpdateConfigMapper
};
export const body2 = {
    parameterPath: ["options", "body"],
    mapper: CreateConfigTemplateMapper
};
export const body3 = {
    parameterPath: ["options", "body"],
    mapper: UpdateConfigTemplateMapper
};
export const body4 = {
    parameterPath: ["options", "body"],
    mapper: CreateConfigGroupMapper
};
export const body5 = {
    parameterPath: ["options", "body"],
    mapper: UpdateConfigGroupMapper
};
export const provider = {
    parameterPath: ["options", "provider"],
    mapper: {
        serializedName: "provider",
        type: {
            name: "String"
        }
    }
};
export const path = {
    parameterPath: ["options", "path"],
    mapper: {
        serializedName: "path",
        type: {
            name: "String"
        }
    }
};
//# sourceMappingURL=parameters.js.map