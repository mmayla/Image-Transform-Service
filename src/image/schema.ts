import { JSONSchemaType } from 'ajv'

export const imageResizeOptionsSchema: JSONSchemaType<{
  source: string
  width?: number
  height?: number
  fit?: string
  quality?: number
}> = {
  type: 'object',
  properties: {
    source: {
      type: 'string',
      minLength: 1,
    },
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
    fit: {
      type: 'string',
      nullable: true,
      enum: ['cover', 'contain', 'fill', 'inside', 'outside'],
    },
    quality: {
      type: 'number',
      nullable: true,
      minimum: 10,
      maximum: 100,
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
