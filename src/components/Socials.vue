<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <section class="socials">
    <h2>{{ t('app.component.socials.title') }}</h2>
    <div class="social-icons">
      <a href="https://x.com/aztecarena" target="_blank" aria-label="X Twitter">
        <i class="fa-brands fa-x-twitter"></i>
      </a>
      <a href="https://www.tiktok.com/@aztecarenac" target="_blank" aria-label="TikTok">
        <i class="fab fa-tiktok"></i>
      </a>
      <a href="https://www.youtube.com/@aztec-arena" target="_blank" aria-label="YouTube">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="https://www.twitch.tv/aztec_fr" target="_blank" aria-label="Twitch">
        <i class="fab fa-twitch"></i>
      </a>
      <a href="https://www.instagram.com/aztecarena_/" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .socials {
    color: #fff;
    padding: 40px 20px;
    text-align: center;

    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }

  .socials .social-icons {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
  }

  .social-icons a {
    color: #fff;
    font-size: 32px;
    transition: transform 0.3s, color 0.3s;
  }

  .social-icons a:hover {
    transform: scale(1.2);
    color: #fbc531;
  }
</style>
