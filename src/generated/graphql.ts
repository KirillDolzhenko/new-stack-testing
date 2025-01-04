/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Array<Todo>;
  changeStatus: Todo;
};


export type MutationAddTodoArgs = {
  text: Scalars['String']['input'];
};


export type MutationChangeStatusArgs = {
  id: Scalars['Int']['input'];
  status: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  todos: Array<Todo>;
  todosPag?: Maybe<Array<Todo>>;
};


export type QueryTodosPagArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID']['output'];
  status: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, status: boolean }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetTodosDocument = new TypedDocumentString(`
    query GetTodos {
  todos {
    id
    title
    status
  }
}
    `) as unknown as TypedDocumentString<GetTodosQuery, GetTodosQueryVariables>;
export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, status: boolean }> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Array<Todo>;
  changeStatus: Todo;
};


export type MutationAddTodoArgs = {
  text: Scalars['String']['input'];
};


export type MutationChangeStatusArgs = {
  id: Scalars['Int']['input'];
  status: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  todos: Array<Todo>;
  todosPag?: Maybe<Array<Todo>>;
};


export type QueryTodosPagArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID']['output'];
  status: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};
