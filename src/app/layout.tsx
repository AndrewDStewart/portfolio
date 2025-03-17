import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Link from "next/link"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "A showcase of my work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white text-gray-800`}>
        <header className="bg-[#034C53] text-white shadow-md">
          <div className="container mx-auto py-6 px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="text-2xl font-bold hover:text-[#FFC1B4] transition-colors">
                  Andrew Stewart
                </Link>
                <p className="text-sm text-[#FFC1B4] mt-1">Web Developer & Designer</p>
              </div>
              <nav>
                <ul className="flex flex-wrap gap-1 md:gap-2">
                  <li>
                    <Link
                      href="/"
                      className="px-4 py-2 rounded-md font-medium hover:bg-[#007074] hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resume"
                      className="px-4 py-2 rounded-md font-medium hover:bg-[#007074] hover:text-white transition-colors"
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academic"
                      className="px-4 py-2 rounded-md font-medium hover:bg-[#007074] hover:text-white transition-colors"
                    >
                      Academic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/professional"
                      className="px-4 py-2 rounded-md font-medium hover:bg-[#007074] hover:text-white transition-colors"
                    >
                      Professional
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto mt-8 px-4 pb-16 min-h-[calc(100vh-200px)]">{children}</main>

        <footer className="bg-[#034C53] text-white py-8 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#FFC1B4]">Contact</h3>
                <p className="mb-2">andrewstewart0107@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#FFC1B4]">Connect</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/andrew-stewart-a386b9329/" className="hover:text-[#F38C79] transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/AndrewDStewart" className="hover:text-[#F38C79] transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#FFC1B4]">About</h3>
                <p>Portfolio showcasing my work and professional journey.</p>
              </div>
            </div>
            <div className="border-t border-[#007074] mt-8 pt-6 text-center text-sm">
              © {new Date().getFullYear()} Andrew Stewart. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

