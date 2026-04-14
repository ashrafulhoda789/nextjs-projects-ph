/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://images.unsplash.com/photo-1658194356755-22109e2c76e6
  // https://i.ibb.co.com/tpdX57cT/IMG-20211123-204150.jpg
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
