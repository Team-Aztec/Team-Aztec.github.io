<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { history } from '../../data/history.ts'
  import { useFaceit } from '../domain/faceit/faceit.ts'
  import { TournamentPage } from '../types/types.ts'

  import { useImage } from '../domain/images/useImage.ts'

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
  })
</script>

<template>
  <div class="tournaments aztec-container">
    <div class="tournaments-list">
      <div class="tournaments-list-active">
        <h2 class="title">Tournois en cours</h2>
        <div v-if="tournaments.actual.length" class="tournaments-list-active-links !justify-center">
          <a
            v-for="(tournament, key) in tournaments.actual"
            :key="key"
            :class="{
              'tournaments-list-active-links-item': true,
              arena: tournament.name?.toLowerCase().includes('arena'),
              cup: tournament.name?.toLowerCase()?.includes('cup'),
            }"
            :href="tournament.faceit_url"
            target="_blank"
          >
            <p>{{ tournament.name }}</p>
          </a>
        </div>
        <p class="tournaments-list-active-none">Pas de tournois actifs pour le moment</p>
      </div>

      <div class="tournaments-list-future">
        <h2 class="title">Prochains tournois</h2>
        <div v-if="tournaments.future.length" class="tournaments-list-future-links !justify-center">
          <a
            v-for="(tournament, key) in tournaments.future"
            :key="key"
            :class="{
              'tournaments-list-future-links-item': true,
              arena: tournament.name?.toLowerCase().includes('arena'),
              cup: tournament.name?.toLowerCase()?.includes('cup'),
            }"
            :href="tournament.faceit_url"
            target="_blank"
          >
            <p>{{ tournament.name }}</p>
          </a>
        </div>
        <p v-else class="tournaments-list-future-none">Pas de tournois prévus pour le moment</p>
      </div>

      <div class="tournaments-list-past">
        <h2 class="title">Tournois passés</h2>
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
            <p>{{ tournament.title }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tournaments {
    @apply flex flex-col gap-16 mx-auto pt-32;

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

      &-past,
      &-active,
      &-future {
        @apply flex flex-col justify-center items-center gap-2;

        &-none {
          @apply text-center opacity-65;
        }

        &-links {
          @apply mt-4 flex gap-4 flex-wrap justify-between w-full;

          &-item {
            @apply min-h-60 w-[45%] border rounded-lg transition-all cursor-pointer bg-cover bg-center flex items-end justify-center bg-black
            tab-m:w-[32%];

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
    }
  }
</style>
