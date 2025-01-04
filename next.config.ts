import type { NextConfig } from "next";
// const { withGraphQLLoader } = require("@graphql-tools/loader");
import * as path from "path";

const nextConfig: NextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      include: [path.resolve(__dirname, "src/graphql/files")],
      use: [
        {
          loader: "graphql.macro/loader",
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
