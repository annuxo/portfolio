/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → plain HTML in out/, deployable to GitHub Pages
  output: 'export',
  images: { unoptimized: true },
  // On GitHub Pages the site lives at /<owner>/<repo>/, so the deploy
  // workflow sets npm_package_basePath. Locally this stays undefined.
  basePath: process.env.npm_package_basePath || undefined,
}

module.exports = nextConfig
