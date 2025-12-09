<script setup>
import { useSlideContext } from '@slidev/client'
import { SignedIn, UserButton } from '@clerk/vue'

const { $page } = useSlideContext()
</script>

<template>
  <SignedIn>
    <!-- Logo (left side) -->
    <div v-if="$page > 1" class="absolute top-4 left-4 flex items-center gap-3 z-50">
      <img
        src="/public/stillriver-logo.jpeg"
        class="h-8 w-8 rounded"
        alt="Stillriver"
      />
    </div>

    <!-- User Button (right side) -->
    <div v-if="$page > 1" class="absolute top-4 right-4 z-50">
      <UserButton />
    </div>
  </SignedIn>
</template>
