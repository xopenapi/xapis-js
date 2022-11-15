import * as coreClient from "@azure/core-client";

export const Config: coreClient.CompositeMapper = {
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

export const ErrorModel: coreClient.CompositeMapper = {
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

export const CreateConfig: coreClient.CompositeMapper = {
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

export const UpdateConfig: coreClient.CompositeMapper = {
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

export const ConfigTemplate: coreClient.CompositeMapper = {
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

export const CreateConfigTemplate: coreClient.CompositeMapper = {
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

export const UpdateConfigTemplate: coreClient.CompositeMapper = {
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

export const CreateConfigGroup: coreClient.CompositeMapper = {
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

export const ConfigGroup: coreClient.CompositeMapper = {
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

export const UpdateConfigGroup: coreClient.CompositeMapper = {
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

export const StorageTemporaryCredentials: coreClient.CompositeMapper = {
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
