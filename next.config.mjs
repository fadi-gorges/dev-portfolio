import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default withContentlayer(nextConfig);
