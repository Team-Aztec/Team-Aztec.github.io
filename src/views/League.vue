<script setup lang="ts"></script>

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
        <a class="league-description-actions-link" href="#league-teams"> Voir les équipes</a>
        <a class="league-description-actions-link" href="https://www.twitch.tv/aztec_fr" target="_blank"> Regarder en direct </a>
      </div>
    </div>

    <div id="league-teams" class="league-teams">
      <h2 class="league-teams-title">Equipes participantes</h2>
      <div class="league-teams-list">
        <div class="league-teams-list-item">
          <h3 class="league-teams-list-item-title">Division 1</h3>
          <div class="league-teams-list-item-teams">
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
          </div>
        </div>

        <div class="league-teams-list-item">
          <h3 class="league-teams-list-item-title">Division 2</h3>
          <div class="league-teams-list-item-teams">
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
            <img class="league-teams-list-item-teams-logo" src="@/assets/history/3dmax.png" alt="3Dmax logo" />
          </div>
        </div>
      </div>
    </div>

    <div class="league-streamers">
      <h2 class="league-streamers-title">Stream & Casteurs officiels</h2>

      <div class="league-streamers-list">
        <div class="league-streamers-list-card">
          <img src="@/assets/images/people/wolfound.jpg" :alt="$t('app.pages.organisation.team.wolfound.name')" />
          <div class="league-streamers-list-card-info">
            <span class="league-streamers-list-card-info-name">CasterKRL</span>
            <a class="league-streamers-list-card-info-link" href="https://www.twitch.tv/casterkrl" target="_blank">
              twitch.tv/casterkrl
            </a>
          </div>
        </div>
        <div class="league-streamers-list-card">
          <img src="@/assets/images/people/wolfound.jpg" :alt="$t('app.pages.organisation.team.wolfound.name')" />
          <div class="league-streamers-list-card-info">
            <span class="league-streamers-list-card-info-name">CasterKRL</span>
            <a class="league-streamers-list-card-info-link" href="https://www.twitch.tv/casterkrl" target="_blank">
              twitch.tv/casterkrl
            </a>
          </div> </div
        ><div class="league-streamers-list-card">
          <img src="@/assets/images/people/wolfound.jpg" :alt="$t('app.pages.organisation.team.wolfound.name')" />
          <div class="league-streamers-list-card-info">
            <span class="league-streamers-list-card-info-name">CasterKRL</span>
            <a class="league-streamers-list-card-info-link" href="https://www.twitch.tv/casterkrl" target="_blank">
              twitch.tv/casterkrl
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="league-partners">
      <h2 class="league-partners-title">Nos partenaires</h2>

      <div class="league-partners-list">
        <img
          class="league-partners-list-item"
          src="@/assets/images/pause-stat.webp"
          alt="Data analyst Counter-Strike 2 : Pause State"
          title="Data analyst Counter-Strike 2 : Pause State"
        />
        <img
          class="league-partners-list-item"
          src="@/assets/images/pause-stat.webp"
          alt="Data analyst Counter-Strike 2 : Pause State"
          title="Data analyst Counter-Strike 2 : Pause State"
        />
        <img
          class="league-partners-list-item"
          src="@/assets/images/pause-stat.webp"
          alt="Data analyst Counter-Strike 2 : Pause State"
          title="Data analyst Counter-Strike 2 : Pause State"
        />
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

    &-description {
      @apply text-center flex flex-col gap-12;

      &-actions {
        @apply flex gap-4 flex-1 justify-center;

        &-link {
          @apply border border-main-color rounded-full px-4;

          &:hover,
          &:focus {
            @apply bg-main-color text-white;
          }
        }
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

    &-partners {
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
        @apply flex flex-col gap-8 justify-center items-center
        tab-m:flex-row;

        &-item {
          @apply flex-1 max-h-64 max-w-64;
        }
      }
    }

    &-streamers {
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
        @apply grid grid-cols-3 gap-4;

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
  }
</style>
