<template>
  <div class="home">
    <div class="home-banner">
      <button class="home-banner-button anim">Your Stage, Our Mission ! </button>
    </div>

    <div class="home-content">
      <div class="home-content-count">
        <div class="flex justify-center">
          <a :href="lastTournamentUrl" class="home-content-count-button">
            Enregistre toi
            <img class="home-content-count-button-arrow" src="@/assets/images/arrow-right.png" alt="arrow right" />
          </a>
        </div>
        <Countdown :targetTime="new Date(futureTournaments[0].championship_start).getTime()" />
      </div>
      <div class="home-content-news">
        <h2 class="home-content-news-title">Nos dernières actualités</h2>
        <div class="home-content-news-list">
          <New
            v-for="(item, index) of newsList"
            class="home-content-news-list-item"
            :key="index"
            :title="item.title"
            :description="item.description"
            :image="item.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue'
  import Countdown from '../components/Countdown.vue'
  import New from '../components/New.vue'
  import { useFaceit } from '../domain/faceit/faceit'

  import { newsHomepage } from '../../news.ts'
  import { Tournament } from '../types/types.ts'

  const faceit = useFaceit()
  const futureTournaments = ref<Tournament[]>([])

  const newsList = ref(newsHomepage)
  const lastTournamentUrl = ref<string>('')

  onBeforeMount(async () => {
    futureTournaments.value = await faceit.getFutureTournaments()
    lastTournamentUrl.value = futureTournaments.value[0].faceit_url.replace('{lang}', 'fr')
  })
</script>

<style scoped lang="scss">
  .home {
    @apply h-full inline;

    &-banner {
      @apply relative h-full bg-[#db7806] bg-no-repeat bg-cover bg-center;

      &-button {
        @apply flex flex-row justify-center items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 px-4 py-2 bg-black text-white rounded-xl shadow-md text-xl;

        &:hover,
        &:focus {
          @apply shadow-lg bg-white text-black;
        }
      }
    }

    &-content {
      @apply flex flex-col gap-12 mt-24 items-center;

      &-count {
        @apply flex flex-col gap-4;

        &-button {
          @apply flex flex-row justify-center items-center gap-8 px-8 py-4 bg-main-color text-white rounded-full shadow-md;

          // &:hover,
          // &:focus {
          //   @apply underline;
          // }

          &-arrow {
            @apply h-[19px];
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
