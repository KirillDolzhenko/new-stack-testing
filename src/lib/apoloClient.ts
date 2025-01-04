import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/apollo",
  cache: new InMemoryCache(),
});

export default client;
