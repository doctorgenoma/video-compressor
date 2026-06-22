import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  transpilePackages: ['@workspace/ui', '@workspace/ffmpeg-client']
};

export default nextConfig;
