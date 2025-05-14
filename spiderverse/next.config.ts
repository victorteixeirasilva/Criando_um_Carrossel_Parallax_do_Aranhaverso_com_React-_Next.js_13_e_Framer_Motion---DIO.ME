import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: "https://681b86ad17018fe5057be851.mockapi.io",
    DOMAIN_ORIGIN: "http://localhost:3000",
  },
};

export default nextConfig;
