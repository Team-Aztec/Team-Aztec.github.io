<script setup lang="ts"></script>

<template>
  <section id="sponsors">
    <h1> Partenaires </h1>
    <div class="sponsors">
      <a class="sponsor" style="--bg: #" href="https://www.pause-stat.pro/" target="_blank">
        <img
          src="./../assets/images/pause-stat.webp"
          alt="Data analyst Counter-Strike 2 : Pause State"
          title="Data analyst Counter-Strike 2 : Pause State"
        />
        Data analyst Counter-Strike 2 : Pause State
      </a>

      <!-- <a class="sponsor" style="--bg: #" href="https://jeydrop.com/" target="_blank">
        <img src="./../assets/images/jeydrop.avif" alt="Jeydrop" title="Jeydrop" />
      </a> -->
    </div>

    <!--a target="_blank" class="sponsor become-sponsor" href="./sponsor.html"> Devenir Sponsor </a-->
  </section>
</template>

<style scoped lang="scss">
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
    content: '';
    border: solid 1px white;
    margin: 0 min(5vw, 64px);
  }

  #sponsors {
    margin-top: 100px;
    max-width: 1000px;
  }

  .sponsors {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .sponsor {
    padding: 8px;
    display: grid;
    width: 340px;
    max-width: calc(100vw - 16px);
    text-align: center;
    font-size: 1.2em;
    border-radius: 8px;
    grid-template: 1fr / auto 1fr;
    align-items: center;
    cursor: pointer;
    column-gap: 8px;

    img {
      height: 80px;
      max-width: 340px;
    }
  }
  .sponsor {
    aspect-ratio: 6/2;
    border: solid 2px #ffd700;
    background: #0004;
    transition: all ease-out 180ms;
  }
  .sponsor:hover {
    transform: scale(1.05);
    background: #0008;
  }
</style>
