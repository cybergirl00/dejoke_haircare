import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import './global.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Dejoke Haircare',
  description: "Your hair's bestfriend",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  )
}
