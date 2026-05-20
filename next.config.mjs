/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['vm-6r51abt3w0mj2mbw3v3neix5.vusercontent.net'],
}

export default nextConfig
