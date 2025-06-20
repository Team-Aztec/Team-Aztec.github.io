<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Navigation } from 'swiper/modules'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  const modules = [Pagination, Navigation]
</script>

<template>
  <div class="organisation aztec-container">
    <div class="organisation-info">
      <h1 class="organisation-info-title">Qui sommes-nous ?</h1>
      <p>
        Aztec est une structure fondée par d’anciens joueurs semi-professionnels de CS:GO et CS2, avec une double expertise : le
        terrain et l’organisation. Nous savons ce qui fait un bon tournoi, parce que nous l’avons vécu des deux côtés. Grâce à
        plus de 20 événements organisés (Aztec Cup, Arena, IconX), nous proposons aujourd’hui des prestations fiables et
        professionnelles : formats sur-mesure, production maîtrisée, casting de qualité.
      </p>
      <p>
        Notre force : une approche humaine, ancrée dans la réalité des joueurs, et un niveau d’exigence à la hauteur des attentes
        des partenaires.
      </p>
    </div>

    <div class="organisation-services">
      <h2 class="organisation-services-title">Nos services</h2>

      <div class="organisation-services-list">
        <swiper pagination navigation :loop="true" :modules="modules" :space-between="100">
          <swiper-slide>
            <img
              class="organisation-services-list-item-image"
              src="@/assets/images/services/logo_Aztec_black.png"
              aria-hidden="true"
            />
            <div class="organisation-services-list-item-content">
              <h3 class="organisation-services-list-item-content-title">Organisation de tournoi</h3>
              <div class="organisation-services-list-item-content-description">
                <p>Nous vous proposons un accompagnement complet pour votre événement :</p>
                <ul>
                  <li>Gestion de planning et coordination logistique</li>
                  <li>Encadrement des admins et du staff technique</li>
                  <li>Création de formats adaptés (groupes, brackets, BOs, etc.)</li>
                  <li>Optimisation de l'événement en fonction du budget</li>
                  <li>Scouting d’équipes pour assurer des affiches de qualité</li>
                </ul>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img
              class="organisation-services-list-item-image"
              src="@/assets/images/services/logo_Aztec_classic.png"
              aria-hidden="true"
            />
            <div class="organisation-services-list-item-content">
              <h3 class="organisation-services-list-item-content-title">Casting de match/tournoi</h3>
              <div class="organisation-services-list-item-content-description">
                <p>
                  Aztec propose des prestations de cast professionnel sur Counter-Strike 2, alliant dynamisme, clarté et expertise
                  du jeu. Que ce soit pour des tournois, showmatches ou événements communautaires, nous serons là pour vous.
                </p>
                <ul>
                  <li>Une narration vivante qui donne du rythme à chaque round</li>
                  <li>Une meilleure rétention du public grâce à un cast engageant</li>
                  <li>Une image plus pro pour votre événement ou stream</li>
                  <li>Optimisation de l'événement en fonction du budget</li>
                  <li>Une valeur ajoutée au spectacle, même pour les non-initiés</li>
                </ul>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img
              class="organisation-services-list-item-image"
              src="@/assets/images/services/logo_Aztec_classic_opposite.png"
              aria-hidden="true"
            />
            <div class="organisation-services-list-item-content">
              <h3 class="organisation-services-list-item-content-title">Observateur de match/tournoi</h3>
              <div class="organisation-services-list-item-content-description">
                <p> Nous proposons également un service d'observateur pour sublimer la diffusion de vos tournois : </p>
                <ul>
                  <li>Flux ou diffusion en direct (2K 60fps 20 000kbps/S)</li>
                  <li>Plan caméra fixe et en mouvement créer par nos soins</li>
                  <li>Régie en remote</li>
                  <li>Système de replay instantané</li>
                  <li>Capture en direct des moments les plus marquants des rencontres</li>
                </ul>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="organisation-people">
      <h2 class="organisation-people-title">L'équipe</h2>

      <div class="organisation-people-list">
        <div class="organisation-people-list-item div1">
          <img src="@/assets/images/people/riggow.jpg" alt="Thomas PAYAN" />
          <h3 class="organisation-people-list-item-name">Thomas PAYAN</h3>
        </div>
        <div class="organisation-people-list-item div2">
          <img src="@/assets/images/people/ironpol.jpg" alt="Paul BOUADJEMINE" />
          <h3 class="organisation-people-list-item-name">Paul BOUADJEMINE</h3>
        </div>
        <div class="organisation-people-list-item div3">
          <img src="@/assets/images/people/Djiimy.jpg" alt="Donatien RAYNAUD" />
          <h3 class="organisation-people-list-item-name">Donatien RAYNAUD</h3>
        </div>
        <div class="organisation-people-list-item div4">
          <img src="@/assets/images/people/arno3k.jpg" alt="Arnaud FRANCOIS" />
          <h3 class="organisation-people-list-item-name">Arnaud FRANCOIS</h3>
        </div>
        <div class="organisation-people-list-item div5">
          <img src="@/assets/images/people/wolfound.jpg" alt="Lucas VANTOMME" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .organisation {
    @apply flex flex-col gap-16  mx-auto py-32;

    &-info {
      @apply flex flex-col gap-4;

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
    }

    &-services {
      @apply flex flex-col gap-6 scroll-m-[82px];

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
        @apply grid;

        gap: 16px;

        &-item {
          @apply px-8 pb-8;

          img {
            @apply w-[215px] h-[215px];
          }

          &-name {
            @apply text-center mt-8;
          }
        }
      }
    }

    &-people {
      @apply flex flex-col gap-6 scroll-m-[82px];

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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;

        .div1 {
          grid-area: 1 / 1 / 2 / 2;
        }
        .div2 {
          grid-area: 1 / 2 / 2 / 3;
        }
        .div3 {
          grid-area: 1 / 3 / 2 / 4;
        }
        .div4 {
          grid-area: 2 / 1 / 3 / 2;
        }
        .div5 {
          grid-area: 2 / 3 / 3 / 4;
        }

        &-item {
          @apply px-8 pb-8 flex flex-col items-center;

          img {
            @apply w-[150px] h-[150px]
            lap-s:w-[300px] lap-s:h-[300px];
          }

          &-name {
            @apply text-center mt-8;
          }
        }
      }
    }
  }

  .organisation-services-list {
    .swiper {
      @apply w-full bg-light-grey p-8 rounded-lg;

      &-slide {
        @apply w-full flex justify-center gap-8;
      }

      &-button-next {
        color: white;
      }
    }

    &-item {
      &-image {
        @apply w-[25%];
      }

      &-content {
        @apply flex flex-col gap-4;

        &-title {
          @apply font-bold;
        }

        &-description ul {
          @apply list-disc pl-6;
        }
      }
    }
  }

  .swiper-button-next {
    color: white !important;
  }

  .scroll-icon {
    @apply block w-full text-center;

    .icon:after {
      content: '\e93f';
    }
  }
</style>
