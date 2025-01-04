import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/apollo",
  documents: ["src/graphql/files/**/*.gql"],
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: ["typescript-operations", "typescript"],
      config: {
        rawRequest: true,
        documentMode: "string",
      },
    },
  },
};

export default config;
