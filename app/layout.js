import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

export const metadata = {
  title: 'Kiran Shams — Web Developer & AI Consultant',
  description: 'Founder & CEO of AgriClima AI Consultant. Web Developer. CNV Ambassador at Hoopo Canada. Building tech that serves a purpose.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${syne.variable}`}>
        {children}
      </body>
    </html>
  )
}