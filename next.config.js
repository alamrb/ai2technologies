/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                // hostname: 'ukbd-real-brands.s3.us-east-2.amazonaws.com',
                 hostname: "minio.hrapp.uk",
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
