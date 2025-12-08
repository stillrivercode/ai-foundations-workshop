<script setup>
import { useSlideContext } from '@slidev/client'

const { $page } = useSlideContext()
</script>

<template>
  <div v-if="$page > 1" class="absolute top-4 left-4 flex items-center gap-3">
    <img src="/stillriver-logo.jpeg" class="h-8 w-8 rounded" alt="Stillriver" />
  </div>
  <div v-if="$page > 1" class="absolute top-4 right-4 flex items-center gap-2">
    <img src="/stillriver-banner-no-tagline.jpeg" class="h-6" alt="Stillriver" />
  </div>
</template>
