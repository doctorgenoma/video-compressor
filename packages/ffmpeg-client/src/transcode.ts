import { fetchFile } from '@ffmpeg/util';
import { createFFmpegClient } from './create-ffmpeg-client';
import { presets } from './presets';
import type { CompressVideoOptions } from './types';
export async function compressVideo(file: File, options: CompressVideoOptions = {}) { const ffmpeg = await createFFmpegClient(); const inputName='input.mp4'; const outputName='output.mp4'; ffmpeg.on('progress', ({ progress }) => options.onProgress?.(Math.round(progress * 100))); await ffmpeg.writeFile(inputName, await fetchFile(file)); await ffmpeg.exec(['-i', inputName, ...presets.web, outputName]); const data = await ffmpeg.readFile(outputName); const blob = new Blob([data], { type: 'video/mp4' }); return { url: URL.createObjectURL(blob), size: blob.size, filename: outputName }; }
