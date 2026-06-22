import React from 'react';

export function FileDropzone({ onFile }: { onFile: (file: File) => void }) {
  return (<input type="file" accept="video/*" onChange={(e)=>{const f=e.target.files?.[0]; if(f) onFile(f);}} />);
}
