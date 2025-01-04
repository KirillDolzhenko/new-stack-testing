// global.d.ts
// declare module "*.gql" {
//   import { DocumentNode } from "graphql";
//   const value: DocumentNode;
//   export default value;
// }

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export default value;
}

declare module "*.gql" {
  const value: string;
  export default value;
}
