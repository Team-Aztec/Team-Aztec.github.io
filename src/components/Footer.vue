<script setup lang="ts">
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<template>
  <footer id="footer" tabindex="-1" role="contentinfo">
    <div class="scroll-to-top">
      <button class="scroll-to-top-button" @click="scrollToTop()">Remonter en haut de la page</button>
    </div>
    <div class="footer">
      <div class="footer-content">
        <div class="footer-content-left">
          <img class="footer-content-left-logo" src="@/assets/favicon.ico" alt="Aztec icon" />
          <ul class="footer-content-left-links">
            <li><router-link :to="'#'"> Organisation </router-link></li>
            <li><router-link :to="'#'"> Contact </router-link></li>
          </ul>
        </div>

        <div class="footer-content-sponsors">
          <div class="footer-content-sponsors-items">
            <a style="--bg: #" href="https://www.pause-stat.pro/" target="_blank">
              <img
                src="@/assets/images/pause-stat.webp"
                alt="Data analyst Counter-Strike 2 : Pause State"
                title="Data analyst Counter-Strike 2 : Pause State"
              />
              Pause State
            </a>

            <a style="--bg: #" href="https://jeydrop.com/" target="_blank">
              <img src="@/assets/images/jeydrop.avif" alt="Jeydrop" title="Jeydrop" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>&copy; Aztec 2025 - Tous droits réservés</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .scroll-to-top {
    @apply text-center border-t border-main-color mx-auto bg-light-grey/60 backdrop-blur-lg;

    &-button {
      @apply block py-6 w-full;
    }
  }
  .footer {
    @apply flex flex-col w-full bg-black/60 backdrop-blur-lg shadow-lg gap-2 px-12 py-6;

    &-content {
      @apply flex flex-row justify-between items-center gap-4;

      &-sponsors {
        @apply flex flex-col gap-4;

        &-items {
          @apply flex flex-row gap-4;

          a {
            @apply border-2 border-black/60 w-48 flex flex-row items-center gap-2;

            &:hover,
            &:focus {
              @apply border-white/60 rounded-lg border-2;
            }
          }

          img {
            @apply h-16 rounded-lg;
          }
        }
      }

      &-left {
        @apply flex flex-row gap-12 items-center;

        &-links {
          a {
            &:hover,
            &:focus {
              @apply underline;
            }
          }
        }
      }
    }

    &-copyright {
      @apply flex flex-row justify-center items-center gap-4;
    }
  }
</style>
