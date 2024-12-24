import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vitor Hugo - Fullstack Developer',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <style>
          {`
            html {
              zoom: 125%;
            }
          `}
        </style>
      </head>
      <body className={`${jetbrainsMono.className} bg-[#1E2028] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
