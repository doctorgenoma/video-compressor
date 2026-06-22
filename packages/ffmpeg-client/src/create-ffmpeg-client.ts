import { FFmpeg } from '@ffmpeg/ffmpeg';
let ffmpegInstance: FFmpeg | null = null;
export async function createFFmpegClient() { if (!ffmpegInstance) { ffmpegInstance = new FFmpeg(); await ffmpegInstance.load({ coreURL: '/ffmpeg/ffmpeg-core.js', wasmURL: '/ffmpeg/ffmpeg-core.wasm' }); } return ffmpegInstance; }
