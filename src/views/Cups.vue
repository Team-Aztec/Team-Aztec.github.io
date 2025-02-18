<template>
  <div class="cups">
    <div class="cups-content">
      <h1 class="cups-content-title">Aztec Cups</h1>
      <p
        >Les <strong>Aztec Cups</strong> sont des tournois hebdomadaires organisés chaque dimanche soir, servant de phase
        qualificative pour les prestigieuses
        <router-link class="competitions-aztecarena-content-link" :to="{ name: 'Aztec Arena' }">Aztec Arena</router-link>.
      </p>
      <p>
        Historiquement, ces compétitions ont permis aux équipes de s’affronter dans un
        <strong>format 3 BO1 à élimination directe</strong>, avec <strong>50€</strong> en jeu pour le vainqueur.
      </p>
      <p
        >Véritable tremplin pour les talents émergents, les Aztec Cups offrent une opportunité aux joueurs de prouver leur valeur
        et de gravir les échelons vers la scène compétitive de haut niveau.</p
      >
    </div>

    <div class="cups-list">
      <div v-for="cup in cups" class="cups-list-item" :key="cup.id" role="button" @click="goTo(cup)"> </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useFaceit } from '../domain/faceit/faceit'

  interface Cup {
    id: string
    name: string
  }

  const cups: Cup[] = [
    { id: '86b3bbf4-f162-4ef7-8f8e-1ec26253a232', name: 'Aztec CUP 1' },
    { id: '259bef4d-8aa0-45c4-aba5-a0581e68ac0a', name: 'Aztec CUP 2' },
    { id: 'd979b4d4-b06b-4ace-82e5-b8aafcae9a4f', name: 'Aztec CUP 3' },
    // {
    //   id: 'd785be39-df8f-451c-838b-d12fbf8be754',
    //   name: 'Aztec CUP 4',
    // },
    // {
    //   id: 'd7e227bf-04f9-41ab-844e-a05be529de98',
    //   name: 'Aztec CUP 5',
    // },
    // { id: '2c188b78-4b6c-4c01-ab28-8edca1e747a2', name: 'Aztec CUP 6' },
    // { id: 'c7900c67-2d05-43a4-a371-442d03433834', name: 'Aztec CUP 7' },
    // { id: '7e669f46-bd58-423a-9c3a-f7eba1c39182', name: 'Aztec CUP 8' },
    // { id: '6ce79479-4459-45f8-9eb0-0c1caaffdb0f', name: 'Aztec CUP 9' },
    // { id: '75b23925-e434-47e2-a3b2-f1ed42c4943f', name: 'Aztec CUP 10' },
    // { id: '702a34e6-3849-4920-ac13-1d465e99d224', name: 'Aztec CUP 11' },
    // { id: '5284bce2-b0d0-4b9c-b66d-39ffc91881a3', name: 'Aztec CUP 12' },
    // { id: '287dfeda-7172-44ad-b859-8f87e7c40f86', name: 'Behop x Aztec CUP Qualifier 1' },
    // { id: 'fa7c65dd-34d3-4f09-bf45-6ee2708454af', name: 'Behop x Aztec CUP Qualifier 2' },
    // {
    //   id: '9e837b2c-cd0a-4e0e-b06b-c058b2bdf187',
    //   name: 'Behop x Aztec CUP Qualifier 3',
    // },
  ]

  const faceit = useFaceit()

  const goTo = async (cup) => {
    // console.log(cup.id)
    // console.log(await faceit.getTournament())
  }
</script>

<style scoped lang="scss">
  .cups {
    max-width: 85%;
    padding: 128px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;

    &-content {
      a {
        font-weight: bold;

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }

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

    &-list {
      display: flex;
      flex-direction: row;
      gap: 16px;
      flex-wrap: wrap;

      &-item {
        cursor: pointer;
        flex: 1 0 auto;
        height: 300px;
        width: 200px;
        background-color: white;
      }
    }
  }
</style>
