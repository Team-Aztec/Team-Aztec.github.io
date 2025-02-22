<template>
  <div class="home">
    <div class="home-banner">
      <button class="home-banner-button anim">Your Stage, Our Mission !</button>
    </div>

    <div class="home-content">
      <div class="home-content-count">
        <div class="flex justify-center">
          <a
            href="https://www.faceit.com/fr/organizers/4a01f2c0-66f1-4958-944c-e67076dc9f41/Aztec"
            class="home-content-count-button"
            >Enregistre toi !</a
          >
        </div>
        <Countdown :targetTime="new Date('2025-12-31T23:59:59').getTime()" />
      </div>
      <div class="home-content-news">
        <h2 class="home-content-news-title">Nos dernières actualités</h2>
        <div class="home-content-news-list">
          <New class="home-content-news-list-item" />
          <New class="home-content-news-list-item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import Countdown from '../components/Countdown.vue'
  import New from '../components/New.vue'
</script>

<style scoped lang="scss">
  .home {
    @apply h-full;

    &-banner {
      @apply relative h-full bg-[url(./../assets/images/banniere.jpeg)] bg-no-repeat bg-cover bg-center;

      &-button {
        @apply absolute  left-1/2 top-1/2 -translate-x-1/2 px-4 py-2 bg-main-color text-white rounded-lg shadow-md;

        &:hover,
        &:focus {
          @apply shadow-lg bg-white text-main-color;
        }
      }
    }

    &-content {
      @apply flex flex-col gap-12 mt-24 items-center;

      &-count {
        @apply flex flex-col gap-4;

        &-button {
          @apply px-8 py-4 bg-main-color text-white rounded-full shadow-md;

          &:hover,
          &:focus {
            @apply underline;
          }
        }
      }

      &-news {
        @apply flex flex-col gap-4 w-[85%];

        &-title {
          @apply grid -translate-x-1/2 text-3xl font-bold items-center;

          margin: 0 0 min(32px, 1vw) 0;
          grid-template-columns: 1fr auto 1fr;
          width: calc(100vw - 64px);
          margin-left: 50%;

          &::after,
          &::before {
            content: '';
            border: solid 1px white;
            margin: 0 min(5vw, 64px);
          }
        }
        &-list {
          @apply flex gap-8 flex-wrap;

          &-item {
            @apply flex-1 w-[200px];
          }
        }
      }
    }
  }
</style>
