import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
    title: 'Knowtly: Turn Documentation into an AI Support Agent',
    description: 'Turn your documentation into an intelligent support agent instantly. Reduce support tickets by 80% with AI trained on your unique data.',
    siteName: 'Knowtly',
    images: [
      {
        url: 'https://knowtly.app/og-image2.jpg',
        width: 1200,
        height: 630,
        alt: 'Knowtly: Turn Documentation into an AI Support Agent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowtly: Turn Documentation into an AI Support Agent',
    description: 'Turn your documentation into an intelligent support agent instantly. Reduce support tickets by 80% with AI trained on your unique data.',
    creator: '@knowtly',
    images: ['https://knowtly.app/og-image2.jpg'],
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
        <Script
          id="posthog-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_3Kv6BfZWf3QrtUESzjHvHWsQ9MRrU1Ay4zo7N01Q9Gz', {
                  api_host: 'https://us.i.posthog.com',
              })
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}

