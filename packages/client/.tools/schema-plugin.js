const { printSchemaWithDirectives, parse } = require('graphql-toolkit')

module.exports = {
  plugin: (schema, documents, config) => {
    const printedSchema = printSchemaWithDirectives(schema) // Returns a string representation of the schema
    return `export const SCHEMA = gql\`${printedSchema}\``
  },
}
