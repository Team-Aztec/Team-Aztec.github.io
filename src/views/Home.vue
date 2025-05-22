<template>
  <div class="home">
    <div class="home-banner">
      <div v-if="futureTournaments[0]" class="home-banner-content">
        <div v-if="futureTournaments[0].status !== 'started'" class="home-banner-content-content">
          <Countdown
            :targetTime="new Date(futureTournaments?.[0]?.championship_start || 'December 17, 2025 03:24:00').getTime()"
          />
          <a :href="lastTournamentUrl" class="home-banner-content-button">Your Stage, Our Mission !</a>
        </div>

        <a v-else :href="lastTournamentUrl" class="home-banner-content-button">Un tournoi est en cours, rejoins maintenant !</a>
      </div>
    </div>

    <div class="home-content">
      <div class="home-content-video">
        <iframe
          class="home-content-video-iframe"
          src="https://www.youtube.com/embed/TALOiC339MA?si=Dx56xXbL1bdzYxfD&autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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

  import { newsHomepage } from '../../data/news.ts'
  import { Tournament } from '../types/types.ts'

  const faceit = useFaceit()
  const futureTournaments = ref<Tournament[]>([])

  const newsList = ref(newsHomepage)
  const lastTournamentUrl = ref<string>('')

  onBeforeMount(async () => {
    futureTournaments.value = await faceit.getFutureTournaments()
    if (futureTournaments.value?.length > 0) {
      lastTournamentUrl.value = futureTournaments.value[0].faceit_url.replace('{lang}', 'fr')
    } else {
      lastTournamentUrl.value = ''
    }
  })
</script>

<style scoped lang="scss">
  .home {
    @apply h-full inline;

    &-banner {
      @apply relative h-full bg-[url(@/assets/images/home-banner.png)] bg-no-repeat bg-cover bg-center;

      &-content {
        @apply absolute left-1/2 top-1/2 -translate-x-1/2 flex flex-col items-center gap-8;

        &-content {
          @apply flex flex-col items-center gap-8;
        }

        &-button {
          @apply text-white font-bold border-2 border-[#ffd700] bg-black bg-opacity-80 py-3 px-6 rounded-lg text-base uppercase;

          transition: all 0.3s ease-in-out;

          &:hover,
          &:focus {
            @apply cursor-pointer text-black;

            background: rgba(255, 215, 0, 0.8);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
          }
        }

        &-text {
          @apply text-white font-bold border-2 border-[#ffd700] bg-black bg-opacity-80 py-3 px-6 rounded-lg text-base uppercase;
        }
      }
    }

    &-content {
      @apply flex flex-col gap-12 mt-20 items-center;

      &-video {
        @apply h-[500px] w-[85%];

        &-iframe {
          @apply w-full h-full;
        }
      }

      &-news {
        @apply flex flex-col gap-4 w-[85%];

        &-title {
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
          @apply flex gap-8 flex-wrap;

          &-item {
            @apply flex-1 w-[200px];
          }
        }
      }
    }
  }
</style>
