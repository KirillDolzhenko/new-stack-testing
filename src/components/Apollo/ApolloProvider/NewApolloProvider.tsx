"use client";

import client from "@/lib/apoloClient";
import { ApolloProvider } from "@apollo/client";

function NewApolloProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default NewApolloProvider;
