<script setup lang="ts">
  import DefaultTeamLogo from '../../assets/swissrounds/default_team.svg'
  import DefaultTeamLogoWhite from '../../assets/swissrounds/default_team_white.svg'
  import { unbeatableArena, teams, splitsRounds } from '../../../data/acn.ts'
  import { filename } from 'pathe/utils'

  const glob = import.meta.glob('@/assets/swissrounds/*.{png,jpg,jpeg,svg,webp}', { eager: true })
  const images = Object.fromEntries(Object.entries(glob).map(([key, value]) => [filename(key), value.default]))

  const tournaments = unbeatableArena

  const teamLogo = (team, white) => {
    const selectedTeam = teams.find((t) => t.name === team.name)

    const logo = selectedTeam?.logo
      .replace('.png', '')
      .replace('.jpg', '')
      .replace('.jpeg', '')
      .replace('.svg', '')
      .replace('.webp', '')

    return selectedTeam && selectedTeam.logo ? images[`${logo}`] : !white ? DefaultTeamLogoWhite : DefaultTeamLogo
  }
</script>

<template>
  <div class="swiss-rounds">
    <table class="hidden tab-m:inline-table table-fixed">
      <thead>
        <tr>
          <th scope="col" class="text-base garet-bold-uppercase">#</th>
          <th scope="col" class="text-base garet-bold-uppercase">Equipes</th>
          <th scope="col" class="text-base garet-bold-uppercase">Scores</th>
          <th scope="col" class="text-base garet-bold-uppercase">Round 1</th>
          <th scope="col" class="text-base garet-bold-uppercase">Round 2</th>
          <th scope="col" class="text-base garet-bold-uppercase">Round 3</th>
          <th scope="col" class="text-base garet-bold-uppercase">Round 4</th>
          <th scope="col" class="text-base garet-bold-uppercase">Round 5</th>
          <th scope="col" class="text-base garet-bold-uppercase">Round 6</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in tournaments">
          <th>
            <p class="text-format">{{ index + 1 }}</p>
          </th>
          <th>
            <div class="flex flex-row items-center gap-4">
              <img class="w-[50px] h-[50px]" :src="teamLogo(element, false)" :alt="element.name" />
              <p class="text-format">{{ element.name }}</p>
            </div>
          </th>
          <th>
            <p class="text-format">{{ element.score }}</p>
          </th>
          <th :class="[element.matchs.round1?.win ? 'match-win' : element.matchs.round1?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round1" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round1, element.matchs.round1?.win == !null)"
                :alt="element.matchs.round1.name"
              />
            </p>
          </th>
          <th :class="[element.matchs.round2?.win ? 'match-win' : element.matchs.round2?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round2" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round2, element.matchs.round2?.win == !null)"
                :alt="element.matchs.round2.name"
              />
            </p>
          </th>
          <th :class="[element.matchs.round3?.win ? 'match-win' : element.matchs.round3?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round3" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round3, element.matchs.round3?.win == !null)"
                :alt="element.matchs.round3.name"
              />
            </p>
          </th>
          <th :class="[element.matchs.round4?.win ? 'match-win' : element.matchs.round4?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round4" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round4, element.matchs.round4?.win == !null)"
                :alt="element.matchs.round4.name"
              />
            </p>
          </th>
          <th :class="[element.matchs.round5?.win ? 'match-win' : element.matchs.round5?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round5" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round5, element.matchs.round5?.win == !null)"
                :alt="element.matchs.round5.name"
              />
            </p>
          </th>
          <th :class="[element.matchs.round6?.win ? 'match-win' : element.matchs.round6?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round6" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round6, element.matchs.round6?.win == !null)"
                :alt="element.matchs.round6.name"
              />
            </p>
          </th>
        </tr>
      </tbody>
    </table>

    <div class="swiss-rounds-cards">
      <table v-for="(element, index) in tournaments" class="swiss-rounds-cards-item">
        <thead>
          <tr>
            <th scope="col" class="text-base garet-bold-uppercase">
              {{ element.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p class="text-format">{{ element.score }}</p>
            </td>
          </tr>
          <tr :class="[element.matchs.round1?.win ? 'match-win' : element.matchs.round1?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round1" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round1, element.matchs.round1?.win == !null)"
                :alt="element.matchs.round1.name"
              />
            </p>
          </tr>
          <tr :class="[element.matchs.round2?.win ? 'match-win' : element.matchs.round2?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round2" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round2, element.matchs.round2?.win == !null)"
                :alt="element.matchs.round2.name"
              />
            </p>
          </tr>
          <tr :class="[element.matchs.round3?.win ? 'match-win' : element.matchs.round3?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round3" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round3, element.matchs.round3?.win == !null)"
                :alt="element.matchs.round3.name"
              />
            </p>
          </tr>
          <tr :class="[element.matchs.round4?.win ? 'match-win' : element.matchs.round4?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round4" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round4, element.matchs.round4?.win == !null)"
                :alt="element.matchs.round4.name"
              />
            </p>
          </tr>
          <tr :class="[element.matchs.round5?.win ? 'match-win' : element.matchs.round5?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round5" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round5, element.matchs.round5?.win == !null)"
                :alt="element.matchs.round5.name"
              />
            </p>
          </tr>
          <tr :class="[element.matchs.round6?.win ? 'match-win' : element.matchs.round6?.win == false ? 'lose-win' : '']">
            <p v-if="element.matchs.round6" class="text-base">
              vs
              <img
                class="w-[50px] h-[50px]"
                :src="teamLogo(element.matchs.round6, element.matchs.round6?.win == !null)"
                :alt="element.matchs.round6.name"
              />
            </p>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <div class="swiss-rounds-rounds">
      <div v-for="(rounds, index) in splitsRounds" class="swiss-rounds-rounds-item">
        <span class="swiss-rounds-rounds-item-title garet-bold-uppercase">{{ rounds.name }}</span>
        <div class="swiss-rounds-rounds-item-categories">
          <div v-for="(category, index) in rounds.categories" class="swiss-rounds-rounds-item-categories-item">
            <span class="swiss-rounds-rounds-item-categories-item-title"> {{ category.title }}</span>
            <ul v-for="(match, index) in category.matchs">
              <li class="swiss-rounds-rounds-item-categories-item-match">
                <span>
                  <p>
                    {{ match.team1 }}
                  </p>
                  <p>{{ match.score }}</p>
                  <p>{{ match.team2 }}</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
  .swiss-rounds {
    @apply text-white flex flex-col gap-12;

    table {
      @apply border border-main-color;

      th,
      td {
        @apply border border-main-color p-2;

        p {
          @apply flex justify-center items-center gap-3;
        }
      }
    }

    &-cards {
      @apply flex flex-col gap-8 tab-m:hidden;

      &-item {
        @apply text-center text-base;

        tr,
        td {
          @apply border border-main-color p-2;

          p {
            @apply flex justify-center items-center gap-3;
          }
        }
      }
    }

    &-rounds {
      @apply flex flex-col gap-8;

      &-item {
        @apply flex flex-auto flex-col gap-2 items-center;

        &-title {
          @apply font-extrabold text-xl underline;
        }

        &-categories {
          @apply flex gap-8 flex-col
        tab-m:flex-row;

          &-item {
            @apply flex flex-col;

            &-title {
              @apply text-main-color text-lg text-center;
            }

            &-match {
              span {
                @apply flex gap-2 items-center;
              }

              p {
                @apply w-[100px] text-center;
              }
            }
          }
        }
      }
    }
  }

  .match-win {
    @apply bg-win-background;
  }
  .lose-win {
    @apply bg-lose-background;
  }
</style>
