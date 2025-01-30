<script setup lang="ts">
import { onMounted } from "vue";

const oldPlayers = ["SprayjiN", "chRRRis"];

onMounted(() => {
  const playerNumber = document
    .getElementsByClassName("was-playing")[0]
    .getElementsByTagName("span").length;
  let activeIndex = 0;

  setInterval(() => {
    const activePlayer = document
      .getElementsByClassName("was-playing")[0]
      .getElementsByTagName("span")[activeIndex];
    const nextPlayer = document
      .getElementsByClassName("was-playing")[0]
      .getElementsByTagName("span")[activeIndex + 1];

    activePlayer.classList.add("wp-slide-out");

    if (nextPlayer) {
      nextPlayer.classList.add("wp-slide-in");
      activeIndex += 1;
    } else {
      activeIndex = 0;
      Array.from(
        document
          .getElementsByClassName("was-playing")[0]
          .getElementsByTagName("span")
      ).forEach((element) => {
        element.classList.remove("wp-slide-out");
        element.classList.remove("wp-slide-in");
      });
      document
        .getElementsByClassName("was-playing")[0]
        .getElementsByTagName("span")
        [activeIndex].classList.add("wp-slide-in");
    }
  }, 5000);
});
</script>

<template>
  <section id="a-propos">
    <div class="was-playing" style="--count: 6; --duration: 1500ms">
      <div class="wp-role">
        <span class="wp-slide-in"> Soen </span>
        <span> SprayjiN </span>
        <span> chRRRis </span>
        <span> DaViDJK </span>
        <span> Moldown </span>
        <span> Houd1ni </span>
        <span> Kodak </span>
        <span> T3zisswes </span>
        <span> Ay0k </span>
        <span> DeeN </span>
        <span> Bond1e </span>
        <span> Dorz14 </span>
        <span> Le0nich </span>
        <span> Mzizou </span>
        <span> WaRRyX </span>
        <span> Sparta </span>
        <span> Arno3K </span>
        <span> Sparro </span>
        <span> Atrium </span>
        <span> CRAZYMATT </span>
        <span> RedShotSmqked </span>
        <span> Sandro </span>
        <span> Silent </span>
      </div>
      <span>&nbsp;était&nbsp;chez&nbsp;Aztec.</span>
    </div>

    <div class="bottom">
      <p class="asso">Aztec - Association sous loi 1901</p>
      <p class="creators" v-html="$t('general.footer.creators')"></p>
    </div>
    <div class="end-spacer"></div>
  </section>
</template>

<style>
#a-propos {
  max-width: 85%;
}

.was-playing {
  text-transform: uppercase;
  max-width: 800px;
  width: fit-content;
  padding: 0 8px;
  margin: 32px auto;
  position: sticky;
  top: 50vh;
  font-size: 1.7em;
  line-height: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 16px;
  background: #000a;
}

.wp-role {
  height: 2em;
  display: inline-block;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 40%,
    black 60%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 40%,
    black 60%,
    transparent 100%
  );
}

.wp-role > span {
  margin-top: -2em;
  height: 2em;
  line-height: 2em;
  text-wrap: nowrap;
  display: block;
  font-weight: bold;
  text-align: center;
  transform: translate(0, 3.8em) rotate(-17deg);
  transform-origin: 65% 50%;
  color: transparent;
  background-image: repeating-linear-gradient(
    132deg,
    #f6b84e,
    #f6b84e 15px,
    #ffdd8b 18px,
    #ffdd8b 22px,
    #f6b84e 25px
  );
  -webkit-background-clip: text;
  background-clip: text;
}

.wp-role > span.wp-slide-in {
  transition: transform ease-out 350ms;
  transform: translate(0, 2em) rotate(0deg);
}

.wp-role > span.wp-slide-out {
  transition: transform ease-in 350ms 25ms;
  transform: translate(0, 0.2em) rotate(17deg);
}

.bottom {
  position: sticky;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.asso {
  top: calc(100vh - 65px);
  margin: 48px 0 0 0;
  font-size: 1.4em;
}

.creators {
  font-size: 0.8em;
  margin: 48px 0 0 0;
}

.pseudo {
  color: rgb(234, 179, 67);
}
</style>
