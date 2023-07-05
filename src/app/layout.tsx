import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Watch List',
  description: 'Manage your watch list',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <div className="flex gap-2">
          <Link href={'/'}>Home</Link>
          <Link href={'/register'}>Novo</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
