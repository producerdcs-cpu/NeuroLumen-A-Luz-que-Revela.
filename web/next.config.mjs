/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// Nome do repo termina com ponto — entra no basePath do GitHub Pages
const basePath = isProd ? "/NeuroLumen-A-Luz-que-Revela." : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
