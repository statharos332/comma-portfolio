import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import fragment from './fragment'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [project, fragment],
}
