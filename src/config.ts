import * as typedDotenv from 'typed-dotenv'
import type { Env } from 'typed-dotenv/dist/lib/types'

const { error, env } = typedDotenv.config({
  includeProcessEnv: true,
  template: {
    path: '.env.template',
    errorOnFileNotFound: true,
    errorOnMissingAnnotation: true,
  },
})

if (error) {
  console.error('Error validating environment variables')
  console.error(error)
}

export const config = env as Env
