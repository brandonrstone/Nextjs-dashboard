import { Metadata } from 'next'
import Head from 'next/head'
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export const metadata: Metadata = {
  // Give a string template that can dynamically update
  title: { template: '%s | Acme Dashboard', default: 'Acme Dashboard' },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <meta name='author' content='Brandon Stone' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      {/* By adding the font to the body element, the font will be applied across the application */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
