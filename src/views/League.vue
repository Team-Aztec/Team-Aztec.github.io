<script setup lang="ts">
  // import SwissRounds from '../components/formats/SwissRounds.vue'
  import Tabs from '../components/ui/Tabs.vue'

  import { useHead } from '@unhead/vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const tabList = [{ label: 'Stage 1' }, { label: 'Stage 2' }]
  // const tabList = [{ label: 'Stage 1' }, { label: 'Stage 2' }, { label: 'Stage 3' }]

  useHead({
    title: t('app.seo.pages.league.title'),
  })
</script>

<template>
  <div class="league aztec-container">
    <h1 class="league-title">Aztec Circuit National</h1>
    <div class="league-description">
      <span>
        <p>
          Bienvenue sur Aztec Circuit National - la ligue de Counter-Strike 2 qui rassemblre le meilleur de la scène francophone.2
          divisions, 24 équipes, 1 cashprize de 5.000€ et 1 seul objectif : <strong>la Victoire</strong>
        </p>
      </span>

      <div class="league-description-actions">
        <a class="league-description-actions-link" href="#league-stages"> Voir les étapes</a>
        <a class="league-description-actions-link" href="https://www.twitch.tv/aztec_fr" target="_blank"> Regarder en direct </a>
      </div>
    </div>

    <div class="league-documents">
      <div class="league-documents-rules">
        <a href="https://playaztec.com/acn/reglement.pdf" target="_blank" class="league-documents-rules-pdf">
          <span class="league-documents-rules-pdf-text">
            <i class="fa-solid fa-file"></i>
            RÈGLEMENT COMPLET (PDF)
          </span>
          <span class="league-documents-rules-pdf-arrow">›</span>
        </a>

        <a href="https://playaztec.com/acn/reglement.pdf" target="_blank" class="league-documents-rules-pdf">
          <span class="league-documents-rules-pdf-text">
            <i class="fa-solid fa-file"></i>
            Format et Système de sélection
          </span>
          <span class="league-documents-rules-pdf-arrow">›</span>
        </a>
      </div>
    </div>

    <Tabs id="league-stages" v-slot="{ activeIndex }" :tabs="tabList" :defaultIndex="0">
      <div v-if="activeIndex === 0">
        <p>Bracket à venir</p>
      </div>
      <div v-else-if="activeIndex === 1" class="league-stages-container">
        <div class="league-teams">
          <!-- <h2 class="league-teams-title">Equipes participantes</h2> -->
          <div class="league-teams-list">
            <div class="league-teams-list-item">
              <h3 class="league-teams-list-item-title">Equipes invitées</h3>
              <div class="league-teams-list-item-teams">
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
              </div>
            </div>

            <!-- <div class="league-teams-list-item">
              <h3 class="league-teams-list-item-title">Equipes qualifiées</h3>
              <div class="league-teams-list-item-teams">
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
                <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
              </div>
            </div> -->
          </div>
        </div>

        <!-- <div class="league-swissrounds">
          <h2 class="league-swissrounds-title">Classement</h2>
          <SwissRounds />
        </div> -->
      </div>
      <div v-else-if="activeIndex === 2">
        <h2>📞 Contact</h2>
        <p>Contactez-nous via email ou téléphone.</p>
      </div>
    </Tabs>
    
    <div class="league-footer">
      <div class="league-streamers">
      <h2 class="league-streamers-title">Stream officiel</h2>

      <div class="league-streamers-list">
        <div class="league-streamers-list-card">
          <img src="@/assets/images/acn.png" :alt="'Aztec France ACN'" />
          <div class="league-streamers-list-card-info">
            <span class="league-streamers-list-card-info-name">Aztec_fr</span>
            <a class="league-streamers-list-card-info-link" href="https://www.twitch.tv/aztec_fr" target="_blank">
              twitch.tv/aztec_fr
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="league-partners">
      <h2 class="league-partners-title">Notre partenaire</h2>

      <div class="league-partners-list">
        <img
          class="league-partners-list-item"
          src="@/assets/acn/INUI_Gaming__logo_white-and-cyan.svg"
          alt="INUI Gaming"
          title="INUI Gaming"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .league {
    @apply flex flex-col gap-16 mx-auto pt-32;

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

    &-documents {
      &-rules {
        @apply flex flex-col gap-6;

        &-pdf {
          @apply flex items-center justify-between font-bold text-base border border-main-color py-3 px-6 rounded;

          transition: background 0.3s ease;

          &:hover,
          &:focus {
            @apply bg-black text-main-color;
          }

          &-arrow {
            @apply text-main-color text-lg;
          }

          &-text {
            @apply flex gap-6 items-center;
          }
        }
      }
    }

    &-description {
      @apply text-center flex flex-col gap-12;

      &-actions {
        @apply flex gap-4 flex-1 justify-around;

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

    &-stages {
      &-container {
        @apply flex flex-col gap-6;
      }
    }

    &-teams {
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
        @apply flex flex-col gap-4 items-center
        tab-m:flex-row;

        &-divider {
          @apply border border-main-color h-full;
        }

        &-item {
          @apply flex flex-col flex-1 text-center gap-2;

          &-teams {
            @apply grid grid-cols-3 gap-4 border rounded border-main-color;
          }
        }
      }
    }

    &-swissrounds {
      &-title {
        @apply text-center relative font-bold text-3xl mb-6;

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

    &-streamers {
@apply flex-1;

      &-title {
        @apply text-center relative font-bold text-3xl mb-6;

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
        &-card {
          @apply flex flex-col gap-4 items-center border rounded border-main-color;

          &-info {
            @apply flex flex-col gap-2 text-center pb-4;

            &-name {
              @apply text-lg font-bold;
            }

            &-link {
              @apply text-sm;

              &:hover,
              &:focus {
                @apply underline;
              }
            }
          }
        }
      }
    }

    &-partners {
      @apply flex-1;

      &-title {
        @apply text-center relative font-bold text-3xl mb-6;

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
        @apply flex h-full justify-center items-center;
      }
    }

    &-footer {
      @apply flex flex-col gap-6
      tab-m:flex-row;
    }
  }
</style>
