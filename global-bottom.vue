<script setup>
import { SignedIn, SignedOut, SignInButton } from '@clerk/vue'
</script>

<template>
  <!-- Show sign-in prompt for unauthenticated users -->
  <SignedOut>
    <div class="fixed inset-0 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center z-50">
      <div class="text-center p-8">
        <div class="mb-8">
          <img
            src="/public/stillriver-banner-no-tagline.jpeg"
            alt="Stillriver"
            class="mx-auto mb-6 rounded-xl shadow-lg"
            style="max-width: 400px;"
          />
          <h1 class="text-4xl font-bold text-sky-900 mb-2">AI Enablement Workshop</h1>
          <p class="text-sky-700 text-lg">Please sign in to access the workshop content</p>
        </div>
        <SignInButton mode="modal">
          <button class="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors shadow-md">
            Sign In to Continue
          </button>
        </SignInButton>
      </div>
    </div>
  </SignedOut>
</template>
