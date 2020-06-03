const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema
}))

app.listen(5000, () => {
  console.log('Listening port 5000')
})