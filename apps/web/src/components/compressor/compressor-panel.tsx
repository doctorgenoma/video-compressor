import React, { useState } from 'react';
import { Button, Card, Progress } from '@workspace/ui';
import { FileDropzone } from './file-dropzone';
import { compressVideo } from '@workspace/ffmpeg-client';

export function CompressorPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Selecciona un vídeo');
  const [outputUrl, setOutputUrl] = useState<string | null>(null);

  const handleCompress = async () => {
    if (!file) return;
    setStatus('Comprimiendo...');
    setProgress(0);
    const result = await compressVideo(file, { onProgress: (p) => setProgress(p) });
    setOutputUrl(result.url);
    setStatus(`Listo: ${result.size} bytes`);
  };

  return (<Card><h2>Compresor</h2><p>{status}</p><FileDropzone onFile={setFile} /><p>{file ? `Archivo: ${file.name}` : ''}</p><Button onClick={handleCompress} disabled={!file}>Comprimir</Button><Progress value={progress} />{outputUrl ? <p><a href={outputUrl} download="compressed.mp4">Descargar resultado</a></p> : null}</Card>);
}
