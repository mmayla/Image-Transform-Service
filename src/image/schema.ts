import { JSONSchemaType } from 'ajv'

export const imageResizeOptionsSchema: JSONSchemaType<{
  source: string
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
    source: {
      type: 'string',
      minLength: 1,
    },
  },
  required: ['source'],
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
