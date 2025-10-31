import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactCompiler: true,
    /*async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `https://kh.fd-api.com/api/v5/:path*`, // e.g. https://api.example.com
            },
        ];
    },*/
};

export default nextConfig;
