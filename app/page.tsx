import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Wand2, Users, Headphones } from "lucide-react"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"



export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Storybook
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/gallery">
              <Button variant="ghost">Gallery</Button>
            </Link>
            <SignedOut>
              <SignInButton>
                <Button variant="ghost">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Create Magical Stories with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Unleash your creativity and bring amazing stories to life with our AI-powered storytelling platform. Perfect
            for children, parents, and creative minds of all ages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignedOut>
              <SignUpButton>
                <Button size="lg" className="px-8">
                  <Wand2 className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/create-story">
                <Button size="lg" className="px-8">
                  <Wand2 className="mr-2 h-5 w-5" />
                  Create Your Story
                </Button>
              </Link>
            </SignedIn>
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Explore Stories
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wand2 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-600">Generate unique stories with advanced AI technology</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rich Templates</h3>
            <p className="text-gray-600">Choose from various story templates and categories</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
            <p className="text-gray-600">Share and collaborate on stories with others</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Audio Narration</h3>
            <p className="text-gray-600">Listen to stories with built-in text-to-speech</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Creating?</h2>
          <p className="text-gray-600 mb-6">Join thousands of storytellers and bring your imagination to life</p>
          <SignedOut>
            <SignUpButton>
              <Button size="lg" className="px-8">
                Get Started Now - It&apos;s Free!
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/create-story">
              <Button size="lg" className="px-8">
                Create Your First Story
              </Button>
            </Link>
          </SignedIn>
        </div>
      </main>
    </div>
  )
}
