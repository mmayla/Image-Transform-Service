import { JSONSchemaType } from 'ajv'

export const imageResizeOptionsSchema: JSONSchemaType<{
  width?: number
  height?: number
}> = {
  type: 'object',
  properties: {
    width: {
      type: 'integer',
      minimum: 0,
      nullable: true,
    },
    height: {
      type: 'integer',
      minimum: 0,
      nullable: true,
    },
  },
  additionalProperties: false,
}

export const sourceURLSchema: JSONSchemaType<{
  sourceURL: string
}> = {
  type: 'object',
  properties: {
    sourceURL: {
      type: 'string',
      minLength: 1,
    },
  },
  required: ['sourceURL'],
  additionalProperties: false,
}
