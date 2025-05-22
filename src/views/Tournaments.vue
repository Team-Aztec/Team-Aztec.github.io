<script setup lang="ts">
  import { ref } from 'vue'
  import { history } from '../../data/history.ts'

  const historyList = ref(history)
</script>

<template>
  <div class="tournaments">
    <div class="tournaments-list">
      <div class="tournaments-list-active">
        <h2 class="title">Tournois en cours</h2>
        <p class="tournaments-list-active-none">Pas de tournois actifs pour le moment</p>
      </div>
      <div class="tournaments-list-past">
        <h2 class="title">Tournois passés</h2>
        <div class="tournaments-list-past-links" role="list">
          <a
            v-for="(tournament, key) in historyList"
            :key="key"
            class="tournaments-list-past-links-item"
            :style="{ 'background-image': 'url(' + tournament.image.url + ')' }"
            :href="tournament.url"
            target="_blank"
          >
            <p>{{ tournament.title }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tournaments {
    @apply flex flex-col gap-16 max-w-[85%] mx-auto py-32;

    .title {
      @apply text-center relative font-bold text-3xl mb-4;

      &::after {
        background-color: #f6a429;
        bottom: 0;
        content: '';
        display: block;
        height: 0.1875rem;
        margin-top: 0.5rem;
        width: 8rem;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        right: 0;
      }
    }

    &-list {
      @apply flex flex-col gap-12;

      &-past {
        @apply flex flex-col justify-center items-center gap-2;

        &-links {
          @apply mt-4 flex gap-4 flex-wrap justify-between;

          &-item {
            @apply min-h-60 w-[32%] border rounded-lg transition-all cursor-pointer bg-cover bg-center flex items-end justify-center bg-black;

            &:hover {
              -webkit-box-shadow: 0px 5px 20px 3px rgba(255, 255, 255, 0.49);
              box-shadow: 0px 5px 20px 3px rgba(255, 255, 255, 0.49);
            }

            p {
              @apply bg-black bg-opacity-80 w-full text-center;
            }
          }
        }
      }

      &-active {
        @apply flex flex-col justify-center items-center gap-2;

        &-none {
          @apply text-center opacity-65;
        }
      }
    }
  }
</style>
