import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Knowtly - AI Support Assistant',
  description: 'Turn your documentation into an intelligent support agent instantly. Provide instant answers to your customers and teams. Reduce support tickets by 80% with AI trained on your unique data.',
  keywords: ['AI support', 'chatbot', 'customer support', 'documentation', 'AI assistant', 'SaaS support'],
  authors: [{ name: 'Knowtly' }],
  creator: 'Knowtly',
  publisher: 'Knowtly',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://knowtly.app',
    title: 'Knowtly - AI Support Assistant',
    description: 'Turn your documentation into an intelligent support agent instantly. Reduce support tickets by 80% with AI trained on your unique data.',
    siteName: 'Knowtly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowtly - AI Support Assistant',
    description: 'Turn your documentation into an intelligent support agent instantly. Reduce support tickets by 80% with AI trained on your unique data.',
    creator: '@knowtly',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} bg-background-dark text-gray-100 font-display antialiased overflow-x-hidden selection:bg-primary/30 selection:text-white`}>
        {children}
      </body>
    </html>
  )
}

