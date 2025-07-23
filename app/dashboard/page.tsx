"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Plus, Sparkles, Palette } from "lucide-react"
import Link from "next/link"
import { useUser, UserButton } from "@clerk/nextjs"
import type { Story } from "@/types"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function DashboardPage() {
  const { user, isLoaded } = useUser()
  const [recentStories, setRecentStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoaded && user) {
      fetchRecentStories()
    }
  }, [isLoaded, user])

  const fetchRecentStories = async () => {
    try {
      const response = await fetch("/api/stories")
      if (response.ok) {
        const { stories } = await response.json()
        setRecentStories(stories.slice(0, 3))
      }
    } catch (error) {
      // Error is handled silently for better UX
    } finally {
      setLoading(false)
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
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
            <Link href="/create-story">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create Story
              </Button>
            </Link>
            <UserButton />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          {/* Welcome Section */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Welcome back, {user?.firstName || "Storyteller"}!
            </h1>
            <p className="text-xl text-gray-600">Ready to create your next magical story?</p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
            <Link href="/create-story">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Create New Story</h3>
                  <p className="text-gray-600">Start with AI-powered story generation</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/my-stories">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">My Stories</h3>
                  <p className="text-gray-600">View and manage your story collection</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/gallery">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Explore Gallery</h3>
                  <p className="text-gray-600">Discover stories from the community</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Recent Stories */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  Recent Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                ) : recentStories.length > 0 ? (
                  <div className="space-y-4">
                    {recentStories.map((story) => (
                      <Link key={story.id} href={`/story/${story.id}`}>
                        <div className="p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all cursor-pointer">
                          <h4 className="font-semibold text-gray-900 mb-1">{story.title}</h4>
                          <p className="text-sm text-gray-600">
                            {story.metadata.genre} • Featuring {story.metadata.mainCharacter}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">No stories yet</h3>
                    <p className="text-gray-600 mb-4">Create your first AI-powered story to get started!</p>
                    <Link href="/create-story">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Your First Story
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
