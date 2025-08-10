import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TerrazaWeb",
  description: "Book venues",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold">TerrazaWeb</a>
            <div className="flex items-center gap-4 text-sm">
              <a href="/host" className="hover:underline">Host</a>
              <a href="/login" className="hover:underline">Login</a>
            </div>
          </nav>
        </header>

        <main className="flex-1 mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>

        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} TerrazaWeb
          </div>
        </footer>
      </body>
    </html>
  )
}
