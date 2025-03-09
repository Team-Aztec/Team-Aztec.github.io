<script setup lang="ts">
  import Background from './components/Background.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <!-- <Background /> -->
  <router-view />
  <Footer />
</template>

<style scoped></style>
