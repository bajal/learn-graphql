const { ApolloServer, gql } = require("apollo-server")

// Type definitions
const typeDefs = gql`
    type Query {
        totalDays: Int!
    }

`;


//Resolvers are Functions that return data for the schema
const resolvers = {

};

const server = new ApolloServer({
    typeDefs,
    //resolvers
    mocks: true  // Right now we only worry about schema. Mock the data
});


server
    .listen()
    .then(({ url }) => console.log("Server running at ${url}"))
