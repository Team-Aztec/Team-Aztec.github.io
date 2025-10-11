<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { history } from '../../data/history.ts'
  import { useFaceit } from '../domain/faceit/faceit.ts'
  import { TournamentPage } from '../types/types.ts'

  import { useImage } from '../domain/images/useImage.ts'
  import { useHead } from '@unhead/vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const faceit = useFaceit()
  const { getImage } = useImage()

  const images = ref<Record<string, string>>({})
  const historyList = ref(history)
  const tournaments = ref<TournamentPage>({
    actual: [],
    future: [],
  })

  onMounted(async () => {
    for (const tournament of historyList.value) {
      const resolved = await getImage(tournament.image.url)
      if (resolved) {
        images.value[tournament.image.url] = resolved
      }
    }

    tournaments.value = await faceit.getTournaments()

    const counters = document.querySelectorAll('.counter')
    const speed = 50

    counters.forEach((counter: any) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText.replace(/\D/g, '')
        const increment = Math.ceil(target / speed)

        if (count < target) {
          counter.innerText = count + increment > target ? target : count + increment
          setTimeout(updateCount, 20)
        } else {
          counter.innerText = target.toLocaleString()
        }
      }
      updateCount()
    })
  })

  useHead({
    title: t('app.seo.pages.tournaments.title'),
  })
</script>

<template>
  <div class="tournaments aztec-container">
    <div class="tournaments-description">
      <div class="tournaments-description-stats">
        <p class="tournaments-description-stats-item">
          <span
            class="tournaments-description-stats-item-number counter"
            :data-target="historyList.length + tournaments.future.length + tournaments.actual.length"
            >0</span
          >
          <span class="text-2xl w-1/2">{{ $t('app.pages.tournaments.descriptions.tournaments.label') }}</span>
        </p>

        <p class="tournaments-description-stats-item">
          <span class="tournaments-description-stats-item-number counter" data-target="342">0</span>
          <span class="text-2xl w-1/2">{{ $t('app.pages.tournaments.descriptions.teams.label') }}</span>
        </p>

        <p class="tournaments-description-stats-item">
          <span class="tournaments-description-stats-item-number counter" data-target="13485">0</span>
          <span class="text-2xl w-1/2">{{ $t('app.pages.tournaments.descriptions.cashprize.label') }}</span>
        </p>
      </div>

      <div class="tournaments-description-actions">
        <a class="tournaments-description-actions-link" href="#tournaments-active">
          {{ $t('app.pages.tournaments.tournament_on_going.title') }}
        </a>
        <a class="tournaments-description-actions-link" href="#tournaments-future">
          {{ $t('app.pages.tournaments.tournament_future.title') }}
        </a>
        <a class="tournaments-description-actions-link" href="#tournaments-past">
          {{ $t('app.pages.tournaments.tournament_past.title') }}
        </a>
      </div>
    </div>

    <div class="tournaments-list">
      <div id="tournaments-active" class="tournaments-list-active">
        <h2 class="title">{{ $t('app.pages.tournaments.tournament_on_going.title') }}</h2>
        <div v-if="tournaments.actual.length" class="tournaments-list-active-links !justify-center">
          <a
            v-for="(tournament, key) in tournaments.actual"
            :key="key"
            :class="{
              'tournaments-list-active-links-item': true,
              arena: tournament.name?.toLowerCase().includes('Aztec arena'),
              cup: tournament.name?.toLowerCase()?.includes('Aztec cup'),
            }"
            :href="tournament.faceit_url"
            target="_blank"
          >
            <p>{{ tournament.name }}</p>
          </a>
        </div>
        <p v-else class="tournaments-list-active-none">{{ $t('app.pages.tournaments.tournament_on_going.nothing.label') }}</p>
      </div>

      <div id="tournaments-future" class="tournaments-list-future">
        <h2 class="title">{{ $t('app.pages.tournaments.tournament_future.title') }}</h2>
        <div v-if="tournaments.future.length" class="tournaments-list-future-links !justify-center">
          <a
            v-for="(tournament, key) in tournaments.future"
            :key="key"
            :class="{
              'tournaments-list-future-links-item': true,
              arena: tournament.name?.toLowerCase().includes('Aztec arena'),
              cup: tournament.name?.toLowerCase()?.includes('Aztec cup'),
            }"
            :href="tournament.faceit_url"
            target="_blank"
          >
            <p>{{ tournament.name }}</p>
          </a>
        </div>
        <p v-else class="tournaments-list-future-none">{{ $t('app.pages.tournaments.tournament_future.nothing.title') }}</p>
      </div>

      <div id="tournaments-past" class="tournaments-list-past">
        <h2 class="title">{{ $t('app.pages.tournaments.tournament_past.title') }}</h2>
        <div class="tournaments-list-past-links" role="list">
          <a
            v-for="(tournament, key) in historyList"
            :key="key"
            class="tournaments-list-past-links-item"
            :style="{
              'background-image': images[tournament.image.url] ? 'url(' + images[tournament.image.url] + ')' : 'none',
            }"
            :href="tournament.url"
            target="_blank"
            role="listitem"
          >
            <div v-if="tournament.winner" class="tournaments-list-past-links-item-winner">{{
              $t('app.pages.tournaments.tournament_winner.label', { winner: tournament.winner })
            }}</div>
            <p>{{ tournament.title }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tournaments {
    @apply flex flex-col gap-16 mx-auto;

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

    &-description {
      @apply flex items-center justify-center min-h-screen flex-col gap-32;

      &-stats {
        @apply space-y-6 text-main-color font-bold tracking-wide uppercase;

        font-family: 'Orbitron', sans-serif;

        &-item {
          @apply flex flex-col items-center space-x-4 w-full
          tab-m:flex-row;

          &-number {
            @apply text-8xl w-1/2 text-end;

            color: transparent;
            -webkit-text-stroke: 2px #f6a429;
          }
        }
      }

      &-actions {
        @apply flex w-full justify-around;

        &-link {
          @apply text-center font-bold text-2xl mb-4;

          &::after {
            background-color: #f6a429;
            bottom: 0;
            content: '';
            display: block;
            height: 2px;
            margin-top: 0.5rem;
            width: 8rem;
            left: 0;
            margin-left: auto;
            margin-right: auto;
            right: 0;
            transition: width 0.3s ease;
          }

          &:hover,
          &:focus {
            @apply text-main-color;

            &::after {
              @apply w-full;
            }
          }
        }
      }
    }

    &-list {
      @apply flex flex-col gap-12;

      &-past,
      &-active,
      &-future {
        @apply flex flex-col justify-center items-center gap-2;

        &-none {
          @apply text-center opacity-65;
        }

        &-number {
          text-align: center;
          font-size: 1em;
          color: white;
          margin-bottom: 10px;
        }

        &-links {
          @apply mt-4 flex gap-4 flex-wrap justify-between w-full;

          &-item {
            @apply min-h-60 w-[45%] relative border rounded-lg transition-all cursor-pointer bg-contain bg-no-repeat bg-center flex items-end justify-center bg-black
            tab-m:w-[32%];

            background-image: url(@/assets/images/default.jpg);

            &:hover {
              -webkit-box-shadow: 0px 5px 20px 3px rgba(255, 255, 255, 0.49);
              box-shadow: 0px 5px 20px 3px rgba(255, 255, 255, 0.49);
            }

            p {
              @apply bg-black bg-opacity-80 w-full text-center;
            }

            &-winner {
              position: absolute;
              top: 0;
              right: 0;
              background-color: #fbbf24;
              color: black;
              font-weight: bold;
              font-size: 0.75rem;
              padding: 4px 8px;
              border-radius: 0 6px 0 6px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
    }
  }
</style>
