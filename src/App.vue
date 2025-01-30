<script setup lang="ts">
import Header from "./components/Header.vue";
import Background from "./components/Background.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <Background />
  <div>
    <router-view />
  </div>
  <Footer />
</template>

<style scoped></style>
