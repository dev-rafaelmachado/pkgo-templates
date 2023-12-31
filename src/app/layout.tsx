import './globals.css'
import type { Metadata } from 'next'
import { Convergence } from 'next/font/google'

const convergence = Convergence({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={convergence.className}>{children}</body>
    </html>
  )
}
