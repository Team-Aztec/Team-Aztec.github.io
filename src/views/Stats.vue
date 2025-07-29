<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useFaceit } from '../domain/faceit/faceit'
  import { Tournament } from '../types/types'

  const faceit = useFaceit()
  const tournaments = ref<Tournament[]>([])

  onMounted(async () => {
    tournaments.value = await faceit.getStatistiquesTournaments()
  })
</script>

<template>
  <div class="stats aztec-container">
    <div class="stats-content">
      <h1 class="stats-content-title">{{ $t('app.pages.statistics.title') }}</h1>
      <p>{{ $t('app.pages.statistics.description') }}</p>
    </div>
    <div class="stats-statistiques">
      <div class="stats-statistiques-tournaments" role="list">
        <a
          v-for="(item, index) of tournaments"
          :key="index"
          :class="{
            'stats-statistiques-tournaments-item': true,
            arena: item.name?.toLowerCase().includes('arena'),
            cup: item.name?.toLowerCase()?.includes('cup'),
          }"
          role="listitem"
          :href="item.faceit_url"
          target="_blank"
        >
          <p>{{ item.name }}</p>
        </a>
      </div>
      <p class="stats-statistiques-partner" v-html="$t('app.pages.statistics.partner.label')"> </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .stats {
    padding: 128px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;

    &-content-title {
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

    &-statistiques {
      @apply flex flex-col gap-12;

      &-tournaments {
        @apply flex gap-4 flex-wrap justify-between;

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
      &-partner {
        a {
          @apply underline text-main-color;

          &:hover,
          &:focus {
            @apply no-underline;
          }
        }
      }
    }
  }
</style>
