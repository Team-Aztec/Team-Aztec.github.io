<template>
  <div class="competitions">
    <div class="competitions-description">
      <h1 class="competitions-description-title">Toutes nos compétitions</h1>
      <p>Aztec est un acteur majeur de la scène francophone dans l'organisation de compétitions sur Counter-Strike 2.</p>
      <p
        >Grâce à des événements compétitifs de qualité, Aztec s’impose comme une plateforme incontournable pour les joueurs et les
        équipes souhaitant se mesurer aux meilleurs. Vous pourrez notamment trouver ici :</p
      >
      <ul class="list-disc ml-4">
        <li>Les Aztec Cups</li>
        <li>La Aztec Arena</li>
      </ul>

      <img
        class="competitions-description-banner"
        src="./../assets/images/banniere.jpeg"
        alt="Bannière aztec organisateur de tournois esports"
        title="Bannière aztec organisateur de tournois esports"
      />
    </div>

    <div class="competitions-azteccup">
      <div class="competitions-azteccup-content">
        <h3 class="competitions-azteccup-content-title">Aztec Cups</h3>
        <p
          >Les <strong>Aztec Cups</strong> sont des tournois hebdomadaires organisés chaque dimanche soir, servant de phase
          qualificative pour les prestigieuses <strong>Aztec Arena</strong>.
        </p>
        <p>
          Historiquement, ces compétitions ont permis aux équipes de s’affronter dans un
          <strong>format 3 BO1 à élimination directe</strong>, avec <strong>50€</strong> en jeu pour le vainqueur.
        </p>
        <p
          >Véritable tremplin pour les talents émergents, les Aztec Cups offrent une opportunité aux joueurs de prouver leur
          valeur et de gravir les échelons vers la scène compétitive de haut niveau.</p
        >
        <br />
        <!-- <router-link class="competitions-azteccup-content-link" :to="{ name: 'Aztec Cups' }"> En savoir plus </router-link> -->
      </div>
      <div class="competitions-azteccup-image">
        <img src="./../assets/images/cup.webp" alt="Aztec cup" title="Aztec cup" />
      </div>
    </div>

    <div class="competitions-aztecarena">
      <div class="competitions-aztecarena-image">
        <img src="./../assets/images/arena.jpeg" alt="Aztec Arena" title="Aztec Arena" />
      </div>

      <div class="competitions-aztecarena-content">
        <h3 class="competitions-aztecarena-content-title">Aztec Arena</h3>
        <p
          >La <strong>Aztec Arena</strong> est un tournoi majeur rassemblant les meilleures équipes de Counter-Strike 2, avec un
          cash prize de <strong>500€</strong>
          en jeu.
        </p>
        <p>
          Initialement disputée avec <strong>16 équipes</strong>, la compétition évolue désormais vers un format plus sélectif
          avec <strong>8 équipes</strong>
          qualifiées de différentes manières :
        </p>
        <ul>
          <li>4 équipes ayant remporté une Aztec Cup et obtenu leur ticket direct.</li>
          <li
            >4 équipes sélectionnées grâce à un système de points, récompensant leur régularité et leur engagement, ou invitées si
            elles évoluent au niveau Advanced ou supérieur.</li
          >
        </ul>
        <p
          >La Aztec Arena est l’ultime étape des compétitions Aztec, offrant un défi intense et un spectacle de haut niveau aux
          joueurs comme aux spectateurs.</p
        >
        <!-- <router-link class="competitions-aztecarena-content-link" :to="{ name: 'Aztec Arena' }"> En savoir plus </router-link> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
  .competitions {
    max-width: 85%;
    padding: 128px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    &-description {
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

      &-banner {
        @apply w-full border border-[#666] rounded mt-6;
      }
    }

    &-azteccup,
    &-aztecarena {
      @apply flex flex-col gap-5
      tab-m:flex-row;

      &-image,
      &-content {
        @apply flex-1 flex flex-col gap-4;

        img {
          @apply w-full h-full object-cover;
        }

        &-title {
          @apply relative;

          &::after {
            background-color: #ffffff;
            bottom: 0;
            content: '';
            display: block;
            height: 0.1875rem;
            margin-top: 1rem;
            width: 5rem;
          }
        }

        &-link {
          text-decoration: underline;
          color: #f6a429;

          &:hover,
          &:focus {
            @apply no-underline;
          }
        }
      }
    }
  }
</style>
