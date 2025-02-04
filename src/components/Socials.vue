<script setup lang="ts"></script>

<template>
  <section id="reseaux">
    <h1>Réseaux</h1>
    <div class="reseaux">
      <a
        target="_blank"
        class="reseau"
        style="--bg: #7289da"
        href="https://discord.com/invite/PKFcXzezRj"
      >
        <svg class="button-icon" viewBox="0 0 100 100">
          <path
            d="M 36,12 C 30,13 19,16 15,19 5,34 -2,53 1,75 6,81 26,88 26,88 l 5,-9 c -6,-2 -8,-4 -8,-4 l 2,-2 c 15,8 35,8 50,0 l 2,2 c 0,0 -2,2 -8,4 l 5,9 C 74,88 94,81 99,75 102,53 95,34 85,19 81,16 70,13 64,12 l -3,6 C 51,17 48,17 39,18 Z M 33,64 a 9,10 0 1 1 0.1,0z M 67,64 a 9,10 0 1 1 0.1,0z"
          ></path>
        </svg>
        Discord
      </a>
      <a
        class="reseau"
        style="--bg: #e02020"
        href="https://www.youtube.com/@team-aztec"
        target="_blank"
      >
        <svg class="button-icon" viewBox="0 0 100 100">
          <path
            d="m 50,15 c 49,0 50,1 50,35 0,34 -1,35 -50,35 C 1,85 0,84 0,50 0,16 1,15 50,15 Z M 40,35 V 65 L 66,50 Z"
          ></path>
        </svg>
        Youtube
      </a>
      <a
        class="reseau"
        style="--bg: #1da1f2"
        href="https://twitter.com/Team_Aztec_"
        target="_blank"
      >
        <svg class="button-icon" viewBox="0 0 100 100">
          <path
            d="m 100,19 c -5,2 -12,3 -12,3 0,0 8,-4 9,-11 -5,3 -13,5 -13,5 C 70,1 45,14 49,35 49,35 23,34 7,13 c -9,16 6,28 6,28 0,0 -7,-1 -9,-3 0,18 16,20 16,20 0,0 -4,2 -9,1 7,15 19,14 19,14 0,0 -12,11 -30,8 41,27 91,-5 90,-51 0,0 6,-5 10,-11 z"
          />
        </svg>
        Twitter
      </a>
      <a
        class="reseau"
        style="--bg: #aaa"
        href="https://www.tiktok.com/@aztec_team"
        target="_blank"
      >
        <svg class="button-icon" viewBox="0 0 100 100">
          <path
            d="M70,0 H53 V68 C53,82 34,89 25,75 19,62 30,51 42,54 V37 C29,35 16,42 10,54 4,66 6,80 15,90 24,99 37,103 49,98 62,93 70,81 70,68 V 34 C 77,39 85,41 94,41 V 24 C 80,24 70,14 70,0 Z"
          />
        </svg>
        TikTok
      </a>
      <a
        class="reseau"
        style="--bg: #ff5a9f"
        href="https://www.instagram.com/team.aztec_"
        target="_blank"
      >
        <svg class="button-icon" viewBox="0 0 100 100">
          <path
            d="M 50,0 C 6.0,-0.9 -0.9,6.1 0.1,50 -0.9,94 6.1,101 50,100 94,101 101,94 100,50 101,6.1 94,-0.9 50,0.09 Z M 50,9.1 C 89,9 91,11 91,50 91,89 89,91 50,91 11,91 9,89 9,50 9,11 11,9 50,9 Z M 76,17 A 6,6 0 0 0 73,19 6,6 0 0 0 73,27 6,6 0 0 0 81,27 6,6 0 0 0 81,19 L 81,19 A 6,6 0 0 0 76,17 Z M 46,24 A 26,26 0 0 0 32,32 26,26 0 0 0 32,68 26,26 0 0 0 68,68 26,26 0 0 0 68,32 L 68,32 A 26,26 0 0 0 46,24 Z M 47,33 A 17,17 0 0 1 62,38 L 62,38 A 17,17 0 0 1 62,62 17,17 0 0 1 38,62 17,17 0 0 1 38,38 17,17 0 0 1 47,33 Z"
          />
        </svg>
        Instagram
      </a>
    </div>

    <a
      target="_blank"
      class="preview"
      href="https://discord.com/invite/PKFcXzezRj"
      style="
        --bg: url('./src/assets/media/join-banner.webp?1');
        --icons: url('./src/assets/media/join-icons.webp');
      "
    >
      <video class="video-background" loop autoplay muted></video>
      <div class="particle pa"></div>
      <div class="particle pb"></div>
      <div class="particle pc"></div>
      <div class="particle pd"></div>
      <img class="title" src="../assets/media/join-icons.webp" />
      <p class="time">Rejoindre Aztec</p>
    </a>
  </section>
</template>

<style scoped>
h1 {
  font-size: 2em;
  font-weight: bold;
  margin: 0 0 min(32px, 1vw) 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: calc(100vw - 64px);
  margin-left: 50%;
  transform: translateX(-50%);
}
h1:before,
h1:after {
  content: "";
  border: solid 1px white;
  margin: 0 min(5vw, 64px);
}

#reseaux {
  margin-top: 100px;
  max-width: 1000px;
}

.reseaux {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.reseau {
  padding: 8px;
  display: grid;
  max-width: calc(100vw - 16px);
  text-align: center;
  font-size: 1.2em;
  border-radius: 8px;
  grid-template: 1fr / auto 1fr;
  align-items: center;
  cursor: pointer;
  aspect-ratio: 9/2;
  width: 300px;
  background-color: #000a;
  transition: 180ms ease-out;
  transition-property: background;
}
.reseau:hover {
  background-color: var(--bg);
}

.button-icon {
  height: 100%;
  aspect-ratio: 140 / 120;
  fill: #fff;
}

.preview {
  color: inherit;
  margin: 64px auto 0 auto;
  position: relative;
  display: grid;
  text-decoration: none;
  aspect-ratio: 20/9;
  cursor: pointer;
  max-width: 600px;
  border-radius: 8px;
  background-image: var(--bg);
  background-size: cover;
  background-position: 50%;
  grid-template: 1fr auto 1fr 54px / 1fr 200px 1fr;
  transition: transform 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  box-shadow: #00000029 0 3px 6px, #0000003b 0 3px 6px;
  animation: display 240ms var(--delay, 0) forwards;
}
.preview:hover {
  transform: scale(1.05);
  z-index: 1;
}
.video-background {
  grid-area: 1/1/5/4;
  border-radius: 8px;
  transition: opacity 280ms ease-in;
  opacity: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: #000;
}
.preview:hover .video-background {
  transition: opacity 380ms cubic-bezier(0.22, 0.61, 0.36, 1);
  opacity: 1;
}
.title {
  grid-area: 4/2/5/3;
  transition: transform 180ms cubic-bezier(0.22, 0.61, 0.36, 1);
  width: 200px;
  height: 70px;
  object-fit: none;
  object-position: 0px -200px;
}
.preview:hover > .title {
  transform: translateY(-16px) scale(1.15);
}

.time {
  grid-area: 2/1/3/4;
  text-align: center;
  padding: 0 16px;
  font-size: 2.4em;
  filter: drop-shadow(1px 1px 2px black) drop-shadow(-1px -1px 1px black);

  font-weight: bold;
  background-image: linear-gradient(
    40deg,
    rgb(234, 179, 67) 40%,
    rgb(255, 240, 220) 50%,
    rgb(234, 179, 67) 60%
  );
  background-size: 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  animation: swip 3s linear infinite;
}
@keyframes swip {
  from {
    background-position: 160% 50%;
  }
  to {
    background-position: -60% 50%;
  }
}

.particle {
  position: absolute;
  height: 100px;
  width: 100px;
  transition: transform 280ms linear;
  pointer-events: none;
  transform-origin: center;
  transition-delay: 0ms;
}
.particle::after {
  content: "";
  opacity: 0;
  display: block;
  height: 100px;
  width: 100px;
  background: var(--icons);
  transform: scale(0.3);
  transition: transform 280ms cubic-bezier(0.5, 1.4, 0.95, 1),
    opacity 100ms ease-out;
  transition-delay: 0ms;
}
.preview:hover .particle::after {
  opacity: 1;
}
.pa::after,
.pd::after {
  transition: transform 280ms cubic-bezier(0.5, 2, 0.9, 1),
    opacity 100ms ease-out;
}
.pa {
  bottom: -20px;
  left: 80px;
}
.pa::after {
  background-position: 0px 0px;
}
.preview:hover .pa {
  transform: translateX(-140px);
  transition-delay: 100ms;
}
.preview:hover .pa::after {
  transform: translateY(-100px) rotate(-10deg) scale(1);
  transition-delay: 100ms;
}
.pb {
  top: 100px;
  right: 50%;
  transform: rotate(15deg);
}
.pb::after {
  background-position: 0px -100px;
}
.preview:hover .pb {
  transform: translateX(-40px) rotate(-15deg);
  transition-delay: 40ms;
}
.preview:hover .pb::after {
  transform: translateY(-160px) rotate(-10deg) scale(1);
  transition-delay: 40ms;
}
.pc {
  top: 100px;
  left: 50%;
  transform: rotate(-15deg);
}
.pc::after {
  background-position: -100px 0px;
}
.preview:hover .pc {
  transform: translateX(40px) rotate(15deg);
  transition-delay: 80ms;
}
.preview:hover .pc::after {
  transform: translateY(-160px) rotate(10deg) scale(1);
  transition-delay: 80ms;
}
.pd {
  bottom: -20px;
  right: 80px;
}
.pd::after {
  background-position: -100px -100px;
}
.preview:hover .pd {
  transform: translateX(140px);
}
.preview:hover .pd::after {
  transform: translateY(-100px) rotate(10deg) scale(1);
}
</style>
