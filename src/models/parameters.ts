import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  CreateConfig as CreateConfigMapper,
  UpdateConfig as UpdateConfigMapper,
  CreateConfigTemplate as CreateConfigTemplateMapper,
  UpdateConfigTemplate as UpdateConfigTemplateMapper,
  CreateConfigGroup as CreateConfigGroupMapper,
  UpdateConfigGroup as UpdateConfigGroupMapper
} from "../models/mappers";

export const accept: OperationParameter = {
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

export const $host: OperationURLParameter = {
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

export const resourceId: OperationQueryParameter = {
  parameterPath: "resourceId",
  mapper: {
    serializedName: "resource_id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const key: OperationQueryParameter = {
  parameterPath: "key",
  mapper: {
    serializedName: "key",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
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

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CreateConfigMapper
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateConfigMapper
};

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CreateConfigTemplateMapper
};

export const body3: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateConfigTemplateMapper
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CreateConfigGroupMapper
};

export const body5: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateConfigGroupMapper
};

export const provider: OperationQueryParameter = {
  parameterPath: ["options", "provider"],
  mapper: {
    serializedName: "provider",
    type: {
      name: "String"
    }
  }
};

export const path: OperationQueryParameter = {
  parameterPath: ["options", "path"],
  mapper: {
    serializedName: "path",
    type: {
      name: "String"
    }
  }
};
