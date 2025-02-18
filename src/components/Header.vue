<script setup lang="ts"></script>

<template>
  <header is="azt-header" id="header">
    <nav>
      <ul class="nav-list">
        <li>
          <router-link class="nav-link" :to="{ name: 'Home' }"> À Propos </router-link>
        </li>
        <li>
          <router-link class="nav-link" :to="{ name: 'Competitions' }"> Compétitions </router-link>
        </li>
        <li>
          <router-link class="nav-link" :to="{ name: 'Statistiques' }"> Statistiques </router-link>
        </li>
        <li>
          <a class="nav-link nav-soon">
            <svg class="sparks" viewBox="0 0 142 64">
              <defs>
                <path
                  id="spark"
                  d="M 50,10 C 50,30 30,50 10,50 30,50 50,70 50,90 50,70 70,50 90,50 70,50 50,30 50,10 Z"
                  fill="#f6a429"
                ></path>
              </defs>
              <use xlink:href="#spark" style="--x: 60px; --y: 0px; --delay: -0ms"></use>
              <use xlink:href="#spark" style="--x: 35px; --y: -30px; --delay: -400ms"></use>
              <use xlink:href="#spark" style="--x: -16px; --y: -24px; --delay: -150ms"></use>
              <use xlink:href="#spark" style="--x: 0px; --y: -6px; --delay: -800ms"></use>
            </svg>
            Boutique
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
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
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: min(16px, 1vw);
    white-space: nowrap;
    font-size: min(7vw, 1em);
    background: #0008;
    border-bottom: solid 1px #000;
    backdrop-filter: blur(5px);
  }
  .nav-list {
    display: contents;
    list-style: none;
  }
  .nav-link {
    position: relative;
    text-decoration: none;
    padding: 0 8px;
    line-height: 64px;
    display: block;
    transition: background 180ms ease-out;
  }
  .nav-link::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    border-bottom: solid 2px;
    transform-origin: center;
    width: 100%;
    transform: scaleX(0);
    transition: transform 180ms ease-out;
  }
  .nav-link:hover {
    background: #fff2;
  }
  .nav-link:hover::before {
    transform: scaleX(1);
    transition: transform 180ms ease-in;
  }
  .nav-soon::after {
    position: absolute;
    left: 50%;
    top: 72px;
    transform: translate(-50%, 0);
    content: 'Bientôt !';
    border-radius: 8px;
    background: #000a;
    padding: 8px 16px;
    display: none;
  }
  .nav-soon:hover::after {
    display: block;
    line-height: 1.2em;
    border: solid 2px #fff8;
  }

  .sparks {
    position: absolute;
    z-index: -1;
    left: -2px;
    height: 100%;
    width: 100%;
  }
  .sparks use {
    animation: spark infinite linear 2800ms var(--delay);
    transform-origin: calc(var(--x) + 50px) calc(var(--y) + 50px);
    x: var(--x);
    y: var(--y);
  }
  @keyframes spark {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(+100deg);
    }
    20% {
      opacity: 0.4;
      transform: scale(0.58) rotate(+20deg);
    }
    40%,
    to {
      opacity: 0;
      transform: scale(0.2) rotate(-60deg);
    }
  }
</style>
