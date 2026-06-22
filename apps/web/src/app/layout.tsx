import './globals.css';

export const metadata = { title: 'Video Compressor', description: 'Compress videos in the browser' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="es"><body>{children}</body></html>);
}
