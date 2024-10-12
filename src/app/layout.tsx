import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const playFairDisplay = localFont({
  src: [
    {
      path: './fonts/playfair/PlayfairDisplay.woff',
      style: 'normal',
      weight: '400',
    },
    {
      path: './fonts/playfair/PlayfairDisplay-Italic.woff',
      style: 'italic',
      weight: '400',
    },
    {
      path: './fonts/playfair/PlayfairDisplay-Bold.woff',
      style: 'normal',
      weight: '700',
    },
    {
      path: './fonts/playfair/PlayfairDisplay-Black.woff',
      style: 'normal',
      weight: '900',
    },
    {
      path: './fonts/playfair/PlayfairDisplay-BlackItalic.woff',
      style: 'italic',
      weight: '900',
    },
  ],
  variable: '--font-playfair-display',
  // weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'Design Build',
    template: '%s | Design Build',
  },
  description: 'Design. Build. Supply. Solutions for Life',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playFairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
