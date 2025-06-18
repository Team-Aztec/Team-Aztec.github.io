<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<template>
  <footer id="footer" tabindex="-1" role="contentinfo">
    <div class="scroll-to-top">
      <button class="scroll-to-top-button" @click="scrollToTop()">{{ t('app.footer.back_to_top.button') }}</button>
    </div>
    <div class="footer">
      <div class="footer-content">
        <div class="footer-content-left">
          <img class="footer-content-left-logo" src="@/assets/favicon.ico" alt="Aztec icon" />
          <ul class="footer-content-left-links">
            <li>
              <router-link :to="{ name: 'Competitions' }">{{ t('app.footer.links.competitions') }} </router-link></li
            >
            <li>
              <router-link :to="{ name: 'Statistiques' }">{{ t('app.footer.links.statistiques') }} </router-link></li
            >
            <li
              ><a href="https://linktr.ee/aztecarena"> {{ t('app.footer.links.contact') }} </a>
            </li>
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
            </a>

            <!-- <a style="--bg: #" href="https://jeydrop.com/" target="_blank">
              <img src="@/assets/images/jeydrop.avif" alt="Jeydrop" title="Jeydrop" />
            </a> -->
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p v-html="t('app.footer.copyright')"></p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  #footer {
    @apply mt-12;
  }

  .scroll-to-top {
    @apply text-center border-t border-main-color mx-auto bg-light-grey/60 backdrop-blur-lg;

    &-button {
      @apply block py-6 w-full;
    }
  }
  .footer {
    @apply flex flex-col w-full bg-black/60 backdrop-blur-lg shadow-lg gap-6 px-12 py-6
    tab-m:gap-2;

    &-content {
      @apply flex flex-col justify-between items-center gap-4
      tab-m:flex-row;

      &-sponsors {
        @apply flex flex-col gap-4;

        &-items {
          @apply flex flex-col gap-4
          tab-m:flex-row;

          a {
            @apply border-2 border-black/60 w-56 flex flex-row items-center gap-2 rounded-lg;

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
        @apply flex flex-col gap-12 items-center text-center
        tab-m:flex-row tab-m:text-left;

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
      @apply flex flex-row justify-center items-center gap-4 text-center
      tab-m:text-left;
    }
  }
</style>
