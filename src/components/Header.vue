<script setup lang="ts">
  import { onMounted, onUnmounted, ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'

  const { t } = useI18n()
  const route = useRoute()

  const displayHeader = ref(false)
  const displayDrawer = ref(false)

  const checkSticky = () => {
    if (route.name === 'Home' && !displayHeader.value) {
      displayHeader.value = window.scrollY > 0
    }
  }

  const displayDrawerMobile = () => {
    displayDrawer.value = !displayDrawer.value
  }

  onMounted(() => {
    window.addEventListener('scroll', checkSticky)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkSticky)
  })

  watch(
    () => route.name,
    (value) => (displayHeader.value = value !== 'Home')
  )
</script>

<template>
  <header is="azt-header" id="header">
    <nav :class="{ nav: true, show: displayHeader, 'drawer-nav': displayDrawer }">
      <div :class="{ 'nav-content': !displayDrawer, 'drawer-nav-content': displayDrawer }">
        <template v-if="!displayDrawer">
          <router-link :to="{ name: 'Home' }" class="nav-content-logo">
            <img class="logo-icon" src="@/assets/favicon.ico" alt="Aztec icon" />
            {{ t('app.header.logo.label') }}
          </router-link>
          <!-- <div className="nav-content-logo">
          <router-link :to="{ name: 'Home' }">{{ t('app.header.logo.label') }}</router-link>
          <img class="logo-icon" src="@/assets/favicon.ico" alt="Aztec icon" />
          <router-link :to="{ name: 'Home' }">{{ t('app.header.logo.label') }}</router-link>
        </div> -->

          <ul class="nav-content-list">
            <li class="relative group">
              <router-link :to="{ name: 'Organisation' }">{{ t('app.header.links.organisation.label') }}</router-link>
              <div class="nav-content-list-dropdown"> </div>
            </li>
            <li class="relative group">
              <router-link :to="{ name: 'Tournois' }">{{ t('app.header.links.tournaments.label') }} </router-link>
              <div class="nav-content-list-dropdown"> </div>
            </li>
          </ul>

          <button class="lap-s:hidden text-main-color text-3xl" @click="displayDrawerMobile()">☰</button>
        </template>

        <template v-else>
          <div class="flex flex-col gap-24">
            <button class="text-main-color text-2xl text-right" @click="displayDrawerMobile()">X</button>
            <ul class="drawer-nav-content-list">
              <li class="relative group">
                <router-link :to="{ name: 'Statistiques' }" @click="displayDrawerMobile()"
                  >{{ t('app.header.links.statistiques.label') }}
                </router-link>
                <div class="drawer-nav-content-list-dropdown"> </div>
              </li>
              <li class="relative group">
                <router-link :to="{ name: 'Competitions' }" @click="displayDrawerMobile()"
                  >{{ t('app.header.links.competitions.label') }}
                </router-link>
                <div class="drawer-nav-content-list-dropdown"> </div>
              </li>
              <li class="relative group">
                <router-link :to="{ name: 'Historique' }" @click="displayDrawerMobile()">{{
                  t('app.header.links.history.label')
                }}</router-link>
                <div class="drawer-nav-content-list-dropdown"> </div>
              </li>
              <li class="relative group">
                <router-link :to="{ name: 'Organisation' }" @click="displayDrawerMobile()">{{
                  t('app.header.links.organisation.label')
                }}</router-link>
                <div class="drawer-nav-content-list-dropdown"> </div>
              </li>
              <li class="relative group">
                <a href="https://linktr.ee/aztecarena"> {{ t('app.header.links.contact.label') }} </a>
                <div class="drawer-nav-content-list-dropdown"> </div>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .logo {
    @apply flex gap-4 items-center font-semibold;

    &-icon {
      @apply w-[50px] h-[50px];
    }

    a {
      @apply text-main-color text-4xl;
    }
  }

  .nav {
    @apply fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg shadow-lg z-50 transition-transform duration-500;
    transform: translateY(-100%);

    &-content {
      @apply container mx-auto flex justify-between items-center py-4 px-6;

      &-logo {
        @apply text-main-color text-2xl font-extrabold uppercase tracking-wider flex items-center gap-2;
      }

      &-list {
        @apply hidden space-x-8 text-white uppercase font-bold
        lap-s:flex;

        a {
          @apply transition duration-300;

          &:hover,
          &:focus {
            @apply text-main-color;
          }
        }

        &-dropdown {
          @apply absolute left-0 w-full h-1 bg-main-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300;
        }
      }
    }
  }

  .drawer-nav {
    @apply fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg shadow-lg z-50 transition-transform duration-500 h-full;
    transform: translateY(-100%);

    &-content {
      @apply container mx-auto flex flex-col justify-between py-4 px-6 h-full;

      &-logo {
        @apply text-main-color text-2xl font-extrabold uppercase tracking-wider flex items-center gap-2;
      }

      &-list {
        @apply flex flex-col text-white uppercase font-bold text-center gap-6;

        a {
          @apply transition duration-300;

          &:hover,
          &:focus {
            @apply text-main-color;
          }
        }

        &-dropdown {
          @apply absolute left-0 w-full h-1 bg-main-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300;
        }
      }
    }
  }

  .nav.show {
    transform: translateY(0);
  }
</style>
