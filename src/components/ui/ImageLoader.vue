<script setup lang="ts">
  import { ref, watchEffect } from 'vue'

  // Fonction pour charger dynamiquement les images avec Vite
  const images = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,webp}')

  const props = defineProps({
    filename: {
      type: String,
      required: true,
    },
  })

  const imgUrl = ref('')

  watchEffect(async () => {
    const path = `/src/assets/${props.filename}`
    const loader = images[path]
    if (loader) {
      const mod = (await loader()) as { default: string }
      imgUrl.value = mod.default
    } else {
      imgUrl.value = ''
    }
  })
</script>

<template>
  <img v-if="imgUrl" :src="imgUrl" :alt="filename" />
</template>
