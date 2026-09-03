import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blair Chappell — Videographer & UGC Creator',
  description:
    "Ads, reviews and stories for AI tools, cameras and the brands building what's next. Open to brand collaborations.",
  openGraph: {
    title: 'Blair Chappell — Videographer & UGC Creator',
    description:
      "Ads, reviews and stories for AI tools, cameras and the brands building what's next.",
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c0a09',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
