<template>
  <header is="azt-header" id="header">
    <nav>
      <div class="nav-content">
        <div class="logo">
          <img class="logo-icon" src="@/assets/favicon.ico" alt="Aztec icon" />
          <router-link :to="{ name: 'Home' }"> Team Aztec </router-link>
        </div>
        <ul class="nav-links">
          <li><router-link :to="{ name: 'Home' }"> Accueil </router-link></li>
          <li><router-link :to="{ name: 'Statistiques' }"> Statistiques </router-link></li>
          <li><router-link :to="{ name: 'Competitions' }"> Compétitions </router-link></li>
          <li><router-link :to="'#'"> Historique </router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

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

  header {
    color: #fff;
    position: absolute;
    width: 100%;
    top: 0;
    height: 0;
    font-size: 1.6em;
    z-index: 10;
  }
  nav {
    background: #0008;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 40px;
    transition: all 0.4s ease;

    .nav-content {
      height: 100%;
      max-width: 1200px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .nav-links {
    @apply flex;

    li {
      @apply list-none mx-2;

      a {
        @apply text-white text-2xl py-3 px-1 font-bold;
        transition: all 0.4s ease;

        &:hover,
        &.focus {
          @apply underline;
        }
      }
    }
  }
</style>
