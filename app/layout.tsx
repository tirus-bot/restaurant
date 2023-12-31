import './globals.css'
import type { Metadata } from 'next'
import { Poppins} from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import {Providers} from "./providers";


const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
