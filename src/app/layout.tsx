// src/app/layout.tsx
import './globals.css' // We'll keep this to ensure Tailwind/global styles can apply
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Basic Next App',
  description: 'Trying to get it working!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}