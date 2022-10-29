import mdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          issuer: /\.[jt]sx?$/,
          resourceQuery: /react/, // *.svg?react
          use: ["@svgr/webpack"],
        },
        {
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 200,
            },
          },
        },
      ],
    });

    return config;
  },
};
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
export default withMDX({
  ...nextConfig,
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
