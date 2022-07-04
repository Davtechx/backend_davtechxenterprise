var express = require('express');
var { graphqlHTTP } = require('express-graphql');[]

const { typeDefs } = require('./graphql/schema/type-defs');
const { resolvers } = require('./graphql/schema/resolvers');

const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: '',
    password: '1215',
    database: 'DavtechxEnterprise'
  }
});

// db.select('*').from('login').then(data => {
//   console.log(data)
// });






var app = express();
app.use('/graphql', graphqlHTTP({
  schema: typeDefs,
  rootValue: resolvers,
  graphiql: true,
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server runing at ${PORT}/graphql`));