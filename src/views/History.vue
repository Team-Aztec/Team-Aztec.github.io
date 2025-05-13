<template>
  <div class="history">
    <div class="history-content">
      <h1 class="history-content-title">Historique</h1>
      <p>Aztec participe depuis quelques temps à l'organisation de compétitions sur Counter-Strike 2.</p>
      <p>Et voici quelques exemples de tournois organisés par l'organisation :</p>
      <div class="history-content-links" role="list">
        <a
          v-for="(tournament, key) in historyList"
          :key="key"
          class="history-content-links-item"
          :style="{ 'background-image': 'url(' + tournament.image.url + ')' }"
          :href="tournament.url"
          target="_blank"
        >
          <p>{{ tournament.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { history } from '../../data/history.ts'

  const historyList = ref(history)
</script>

<style scoped lang="scss">
  .history {
    @apply max-w-[85%] px-0 pt-32 pb-24 mx-auto flex flex-col gap-10;

    &-content {
      @apply flex flex-col gap-4;

      &-title {
        @apply text-center relative font-bold text-2xl mb-4;

        &::after {
          background-color: #f6a429;
          bottom: 0;
          content: '';
          display: block;
          height: 0.1875rem;
          margin-top: 1rem;
          width: 8rem;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          right: 0;
        }
      }

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

      &-banner {
        @apply mt-4 w-full border border-light-grey rounded;
      }
    }
  }
</style>
