import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "sonner"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Storybook - Create Magical Stories with AI",
  description: "Create, share, and discover amazing children's stories powered by artificial intelligence.",
  keywords: "AI, stories, children, creative writing, storytelling",
  authors: [{ name: "AI Storybook Team" }],
  openGraph: {
    title: "AI Storybook - Create Magical Stories with AI",
    description: "Create personalized children's stories with AI-powered generation and custom illustrations.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {children}
          <Toaster position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  )
}
