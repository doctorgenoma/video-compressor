export type TranscodeProgress = (value: number) => void;
export type CompressVideoOptions = { onProgress?: TranscodeProgress };
