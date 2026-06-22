export type CompressionProgress = number;
export type CompressionResult = { url: string; size: number; filename: string };
export type CompressionOptions = { onProgress?: (value: CompressionProgress) => void };
