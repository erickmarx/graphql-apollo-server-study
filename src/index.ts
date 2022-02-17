import { ApolloServer, gql } from 'apollo-server';

//TODA REQUEST É POST E BATE NO MESMO EP (/graphql)

// Query => metodo GET
// Mutation => metodo POST
// Scalar Types => String, Int, Boolean, Float e ID

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: { hello: () => 'Hello World' },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(url);
});
