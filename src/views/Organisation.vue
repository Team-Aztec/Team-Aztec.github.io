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
  <div class="organisation">
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
        <swiper pagination navigation :modules="modules" :space-between="100">
          <swiper-slide>
            <img
              class="organisation-services-list-item-image"
              src="@/assets/images/services/faceit-logo.png"
              alt="Organisation de tournoi"
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
              src="@/assets/images/services/faceit-logo.png"
              alt="Organisation de tournoi"
            />
            <div class="organisation-services-list-item-content">
              <h3 class="organisation-services-list-item-content-title">Casting de match/tournoi</h3>
              <p>Lorem impseu nian nian naina nedfezf fez fez fez fez f ezfez fze fez</p>
            </div>
          </swiper-slide>
          <swiper-slide
            ><img
              class="organisation-services-list-item-image"
              src="@/assets/images/services/faceit-logo.png"
              alt="Organisation de tournoi"
            />
            <div class="organisation-services-list-item-content">
              <h3 class="organisation-services-list-item-content-title">Observateur de match/tournoi</h3>
              <p>Lorem impseu nian nian naina nedfezf fez fez fez fez f ezfez fze fez</p>
            </div></swiper-slide
          >
        </swiper>
      </div>
    </div>
    <div class="organisation-people">
      <h2 class="organisation-people-title">L'équipe</h2>

      <div class="organisation-people-list">
        <div class="organisation-people-list-item">
          <img src="@/assets/images/people/wolfound.webp" alt="Lucas VANTOMME" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
        <div class="organisation-people-list-item">
          <img src="@/assets/images/people/wolfound.webp" alt="Wolfound" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
        <div class="organisation-people-list-item">
          <img src="@/assets/images/people/wolfound.webp" alt="Wolfound" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
        <div class="organisation-people-list-item-previous-last">
          <img src="@/assets/images/people/wolfound.webp" alt="Wolfound" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
        <div class="organisation-people-list-item-last">
          <img src="@/assets/images/people/wolfound.webp" alt="Wolfound" />
          <h3 class="organisation-people-list-item-name">Lucas "Wolfound" VANTOMME</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .organisation {
    @apply flex flex-col gap-16 max-w-[85%] mx-auto py-32;

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

    &-people,
    &-services {
      @apply flex flex-col gap-6 scroll-m-[82px];

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
        @apply grid;

        gap: 16px;

        &-item {
          @apply px-8 pb-8;

          &-name {
            @apply text-center mt-8;
          }

          &-previous-last {
            @apply px-8 pb-8;

            grid-row-start: 2;
          }

          &-last {
            @apply px-8 pb-8;

            grid-column-start: 3;
            grid-row-start: 2;
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
        @apply w-[33%];
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
