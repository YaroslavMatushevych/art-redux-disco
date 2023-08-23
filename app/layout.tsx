import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BlurryFilter from '@/components/BlurryFilter/BlurryFilter';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artworks Redux App',
  description: 'Artworks bring you to the world of magic!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlurryFilter />
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
