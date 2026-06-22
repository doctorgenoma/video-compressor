import Link from 'next/link';
import { Card, Button } from '@workspace/ui';

export default function HomePage() {
  return (<main style={{maxWidth:960,margin:'0 auto',padding:24}}><Card><h1>Video Compressor</h1><p>Compresión local en navegador con Next.js + TypeScript.</p><Link href="/compress"><Button>Probar compresor</Button></Link></Card></main>);
}
