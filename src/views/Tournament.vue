<template>
  <div class="tournament">
    <div class="tournament-description">
      <h1 class="tournament-description-title">Compétition {{ tournamentId }}</h1>
      <p> Voici la page du tournoi {{ tournamentId }} </p>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const tournamentId = route.params.tournamentId
</script>

<style scoped lang="scss">
  .tournament {
    max-width: 85%;
    padding: 128px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    &-description {
      &-title {
        text-align: center;
        position: relative;

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
    }
  }
</style>
