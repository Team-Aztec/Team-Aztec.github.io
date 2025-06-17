<script setup lang="ts">
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style lang="postcss">
  @import './css/tailwind.pcss';
</style>
