const { join } = require('path');

const express = require('express');
const { postgraphql } = require('postgraphql');

const { trafficDataCreds } = require('./config/postgres.creds');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static('public'))

const options = {
  disableDefaultMutations: true,
  graphiql: true,
  watchPg: true,
  // showErrorStack: 'json',
  extendedErrors: ['hint', 'detail', 'errcode'],
  enableCors: true,
  exportJsonSchemaPath: join(__dirname, 'schemas/postgraphql.json'),
  exportGqlSchemaPath: join(__dirname, 'schemas/postgraphql.graphql'),
};

const trafficDataOptions = {
  graphqlRoute: '/traffic_data/graphql',
  graphiqlRoute: '/traffic_data/graphiql',
  exportJsonSchemaPath: join(__dirname, 'schemas/postgraphql.trafficData.json'),
  exportGqlSchemaPath: join(__dirname, 'schemas/postgraphql.trafficData.graphql'),
};

const trafficDataPostgraphqlMiddleware = postgraphql(trafficDataCreds, 'public', Object.assign({}, options, trafficDataOptions));

app.use(trafficDataPostgraphqlMiddleware);

process.stdout.write(`GraphQL Server started on port ${PORT}\n`);
app.listen(PORT);
