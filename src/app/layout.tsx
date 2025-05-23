// src/app/layout.tsx
import './globals.css' // Your global styles (includes Tailwind directives)
import type { Metadata } from 'next'
import Header from '../components/Header'; // Import the Header
import Footer from '../components/Footer'; // Import the Footer

export const metadata: Metadata = {
  title: 'MySite with Header/Footer', // You can update this
  description: 'A basic Next.js site with a header and footer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100"> {/* Added classes for sticky footer & bg */}
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8"> {/* flex-grow pushes footer down */}
          {children} {/* This is where your page content will go */}
        </main>
        <Footer />
      </body>
    </html>
  )
}