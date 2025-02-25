<template>
  <header is="azt-header" id="header">
    <nav>
      <div class="nav-content">
        <div class="logo">
          <img class="logo-icon" src="@/assets/favicon.ico" alt="Aztec icon" />
          <router-link :to="{ name: 'Home' }"> Team Aztec </router-link>
        </div>
        <ul class="nav-links">
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
  }
  nav.sticky {
    padding: 15px 20px;
    background: #2d5a42;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  nav .nav-content {
    height: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-content .nav-links {
    display: flex;
  }
  .nav-content .nav-links li {
    list-style: none;
    margin: 0 8px;
  }
  .nav-links li a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 4px;
    transition: all 0.3s ease;
  }
  .nav-links li a:hover,
  .nav-links li a:focus {
    text-decoration: underline;
  }
  nav.sticky .nav-links li a {
    color: #fff;
    transition: all 0.4s ease;
  }
  nav.sticky .nav-links li a:hover,
  nav.sticky .nav-links li a:focus {
    text-decoration: underline;
  }
</style>
