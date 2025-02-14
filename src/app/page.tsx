"use client";

import styles from "./page.module.css";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GetTodosDocument, GetTodosQuery } from "@/generated/graphql";

const MUTATE_TODOS = gql`
  mutation ($text: String!) {
    addTodo(text: $text) {
      title
      status
      id
    }
  }
`;

console.log(GetTodosDocument.toString());

export default function Home() {
  const { loading, error, data } = useQuery<GetTodosQuery>(
    gql(GetTodosDocument.toString())
  );

  const [
    mutationFunc,
    { data: dataMutation, loading: loadingMutation, error: errorMutation },
  ] = useMutation<{ text: string }>(MUTATE_TODOS);

  useEffect(() => {
    if (data) {
      mutationFunc({
        variables: {
          text: "something NEEEEW",
        },
      });
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className={styles.page}>
      <h1>Todo</h1>

      <ul>
        {data ? (
          data.todos.map((el) => <li key={el.id}>{el.title}</li>)
        ) : (
          <>There is nothing out here</>
        )}
      </ul>
    </div>
  );
}
