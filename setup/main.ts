import { defineAppSetup } from '@slidev/types'
import { clerkPlugin } from '@clerk/vue'

export default defineAppSetup(({ app }) => {
  // Get Clerk publishable key from Vite environment variables
  const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!publishableKey) {
    throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY environment variable')
  }

  // Initialize Clerk Vue plugin
  app.use(clerkPlugin, {
    publishableKey,
  })
})
