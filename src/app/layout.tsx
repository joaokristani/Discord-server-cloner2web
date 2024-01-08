import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style.css'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Server Cloner 2',
  description: 'By joaokristani & Infinite Community - https://discord.gg/infinite-community-1014921352500756500',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
