'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })

type RootLayoutProps = {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}
export default function RootLayout(props: RootLayoutProps) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
        <ul className="flex gap-4 justify-center">
          <li>Test nav 1</li>
          <li>
            <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>Test nav 3</li>
        </ul>
      </nav>
        <div>
          {props.children}
          {/* {props.analytics} */}
          {/* {props.team} */}
        </div>
      </body>
    </html>
  )
}
