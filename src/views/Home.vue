<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue'
  import Countdown from '../components/Countdown.vue'
  import { useFaceit } from '../domain/faceit/faceit'

  import { Tournament } from '../types/types.ts'

  const faceit = useFaceit()
  const futureTournaments = ref<Tournament[]>([])

  const lastTournamentUrl = ref<string>('')

  onBeforeMount(async () => {
    futureTournaments.value = await faceit.getHomeTournaments()
    if (futureTournaments.value?.length > 0) {
      lastTournamentUrl.value = futureTournaments.value[0].faceit_url?.replace('{lang}', 'fr') || ''
    } else {
      lastTournamentUrl.value = ''
    }
  })
</script>

<template>
  <div class="home aztec-container">
    <div class="home-banner">
      <div
        :class="[
          {
            'home-banner-content': true,
            'home-banner-content-center': futureTournaments[0] || lastTournamentUrl,
            'home-banner-content-logo': !futureTournaments[0] && !lastTournamentUrl,
          },
        ]"
      >
        <div v-if="futureTournaments[0] && futureTournaments[0].status !== 'started'" class="home-banner-content-content">
          <Countdown
            :targetTime="new Date(futureTournaments?.[0]?.championship_start || 'December 17, 2025 03:24:00').getTime()"
          />
          <a :href="lastTournamentUrl" class="home-banner-content-button">Your Stage, Our Mission !</a>
        </div>

        <a v-else-if="lastTournamentUrl" :href="lastTournamentUrl" class="home-banner-content-button"
          >Un tournoi est en cours, rejoins maintenant !</a
        >

        <img
          v-if="!futureTournaments[0] && !lastTournamentUrl"
          src="@/assets/images/logo-aztec/Logo_Aztec_classic_opposite.png"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    @apply h-full inline px-0;

    &-banner {
      @apply relative h-full bg-[url(@/assets/images/home-banner.png)] bg-no-repeat bg-cover bg-center;

      &-content {
        @apply absolute flex flex-col items-center gap-8;

        &-center {
          @apply top-1/2 -translate-x-1/2 left-1/2;
        }

        &-content {
          @apply flex flex-col items-center gap-8;
        }

        &-logo {
          @apply h-[300px] w-[300px]  top-1/3 -translate-x-1/2 left-1/2;
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
  }
</style>
