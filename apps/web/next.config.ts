import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui', '@workspace/ffmpeg-client']
};

export default nextConfig;
