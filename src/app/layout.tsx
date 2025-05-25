// src/app/layout.tsx
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // CSS Variable for Inter (body)
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'], // Regular, Bold, ExtraBold, Black for Playfair Display for headings
  variable: '--font-playfair-display', // CSS Variable for Playfair Display (headings)
  display: 'swap',
});

export const metadata = {
  title: 'Luke Edwards Portfolio',
  description: 'Showcasing photography, code projects, and art/music by Luke Edwards.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}> 
      <body className={`flex flex-col min-h-screen bg-white font-sans`}> {/* font-sans will use Inter */}
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
