var { buildSchema } = require('graphql');


var typeDefs = buildSchema(`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String! 
    }

  
    type Query {
        users: [User!]!
        user(id:ID!): User!
    }
`);

module.exports = { typeDefs };