<template>
  <header is="azt-header" id="header">
    <nav class="nav">
      <div class="nav-content">
        <div className="nav-content-logo">
          <img class="logo-icon" src="@/assets/favicon.ico" alt="Aztec icon" />
          <router-link :to="{ name: 'Home' }">Aztec </router-link>
        </div>

        <ul class="nav-content-list">
          <li class="relative group">
            <router-link :to="{ name: 'Home' }"> Accueil </router-link>
            <div class="nav-content-list-dropdown"> </div>
          </li>
          <li class="relative group">
            <router-link :to="{ name: 'Statistiques' }"> Statistiques </router-link>
            <div class="nav-content-list-dropdown"> </div>
          </li>
          <li class="relative group">
            <router-link :to="{ name: 'Competitions' }"> Compétitions </router-link>
            <div class="nav-content-list-dropdown"> </div>
          </li>
          <li class="relative group">
            <router-link :to="{ name: 'Historique' }"> Historique </router-link>
            <div class="nav-content-list-dropdown"> </div>
          </li>
        </ul>

        <button class="lap-s:hidden text-main-color text-3xl">☰</button>
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
    @apply fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg shadow-lg z-50;

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
</style>
