import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String!
    todos: [Todo!]!
  }

  type Todo {
    title: String!
    status: Boolean!
    id: ID!
  }

  type Mutation {
    addTodo(text: String!): [Todo!]!
    changeStatus(id: Int!, status: Boolean!): Todo!
  }
`;
