export interface Story {
  id: string
  title: string
  metadata: StoryMetadata
  chapters: Chapter[]
  collaborators: Collaborator[]
  createdAt: FirebaseTimestamp
  updatedAt: FirebaseTimestamp
  lastEditedBy?: EditInfo
}

export interface StoryMetadata {
  mainCharacter: string
  genre: string
  tone: string
  ageGroup: string
  setting: string
  supportingCharacters: string[]
  userId: string
  isDemo: boolean
}

export interface Chapter {
  chapterNumber: number
  title: string
  content: string
  imagePrompt?: string
  imageUrl?: string
}

export interface Collaborator {
  id: string
  email: string
  name: string
  role: "owner" | "editor" | "viewer"
  joinedAt: string
  avatar?: string
}

export interface EditInfo {
  userId: string
  userName: string
  timestamp: FirebaseTimestamp
}

export interface FirebaseTimestamp {
  seconds: number
  nanoseconds: number
  toDate(): Date
}

export interface StoryFormData {
  title: string
  mainCharacter: string
  ageGroup: string
  supportingCharacters: string[]
  genre: string
  tone: string
  setting: string
  customPrompt: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}

export interface GenerateStoryResponse {
  story: {
    title: string
    chapters: Chapter[]
  }
  metadata: StoryMetadata
}

export interface GenerateImageResponse {
  imageUrl: string
  originalPrompt: string
  enhancedPrompt: string
}

export interface TranscribeAudioResponse {
  transcription: string
}
