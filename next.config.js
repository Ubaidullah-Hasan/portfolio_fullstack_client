/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // This allows all hostnames
                port: '',
                pathname: '/**', // This allows all paths
            },
        ],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false, // disable useSearchParamss build time error
    },
};

module.exports = nextConfig;