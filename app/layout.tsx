import '@/app/ui/global.css'
import { inter } from './ui/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* By adding the font to the body element, the font will be applied across the application */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
