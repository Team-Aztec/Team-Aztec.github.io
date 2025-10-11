<script setup lang="ts">
  import { useHead } from '@unhead/vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  useHead({
    title: t('app.seo.pages.competitions.title'),
  })
</script>

<template>
  <div class="competitions aztec-container">
    <div class="competitions-description">
      <h1 class="competitions-description-title">{{ t('app.pages.competitions.title') }}</h1>
      <p>{{ t('app.pages.competitions.content.paragraph.1') }}</p>
      <p>{{ t('app.pages.competitions.content.paragraph.2') }}</p>
      <ul class="list-disc ml-4">
        <li>Aztec Circuit National</li>
        <li>Aztec Cups</li>
        <li>Aztec Arena</li>
      </ul>

      <img
        class="competitions-description-banner"
        src="./../assets/images/banniere.jpeg"
        :alt="t('app.pages.competitions.content.image.label')"
        :title="t('app.pages.competitions.content.image.label')"
      />
    </div>

    <div class="competitions-acn">
      <div class="competitions-acn-image">
        <img src="./../assets/images/acn.png" alt="Aztec Circuit National" title="Aztec Circuit National" />
      </div>
      <div class="competitions-acn-content">
        <h3 class="competitions-acn-content-title">{{ t('app.pages.competitions.acn.title') }}</h3>
        <p v-html="t('app.pages.competitions.acn.paragraph.1')"> </p>
        <p v-html="t('app.pages.competitions.acn.paragraph.2')"> </p>
        <router-link class="competitions-acn-content-link" :to="{ name: 'Aztec Circuit National' }">{{
          t('app.pages.competitions.acn.button.label')
        }}</router-link>
      </div>
    </div>

    <div class="competitions-azteccup">
      <div class="competitions-azteccup-content">
        <h3 class="competitions-azteccup-content-title">{{ t('app.pages.competitions.cups.title') }}</h3>
        <p v-html="t('app.pages.competitions.cups.paragraph.1')"></p>
        <p v-html="t('app.pages.competitions.cups.paragraph.2')"> </p>
        <p v-html="t('app.pages.competitions.cups.paragraph.3')"> </p>
        <!-- <router-link class="competitions-azteccup-content-link" :to="{ name: 'Aztec Cups' }"> En savoir plus </router-link> -->
      </div>
      <div class="competitions-azteccup-image">
        <img src="./../assets/images/cup.webp" alt="Aztec cup" title="Aztec cup" />
      </div>
    </div>

    <div class="competitions-aztecarena">
      <div class="competitions-aztecarena-image">
        <img src="./../assets/images/arena.png" alt="Aztec Arena" title="Aztec Arena" />
      </div>

      <div class="competitions-aztecarena-content">
        <h3 class="competitions-aztecarena-content-title">{{ t('app.pages.competitions.arena.title') }}</h3>
        <p v-html="t('app.pages.competitions.arena.paragraph.1')"></p>
        <p v-html="t('app.pages.competitions.arena.paragraph.2')"></p>
        <ul v-html="t('app.pages.competitions.arena.paragraph.3')"> </ul>
        <p v-html="t('app.pages.competitions.arena.paragraph.4')"></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .competitions {
    padding: 128px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    &-description {
      &-title {
        @apply text-center relative font-bold text-3xl mb-4;

        &::after {
          background-color: #f6a429;
          bottom: 0;
          content: '';
          display: block;
          height: 0.1875rem;
          margin-top: 1rem;
          width: 8rem;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          right: 0;
        }
      }

      &-banner {
        @apply w-full border border-[#666] rounded mt-6;
      }
    }

    &-azteccup,
    &-aztecarena,
    &-acn {
      @apply flex flex-col gap-5
      tab-m:flex-row;

      &-image,
      &-content {
        @apply flex-1 flex flex-col gap-4;

        img {
          @apply w-full h-full object-cover;
        }

        &-title {
          @apply relative;

          &::after {
            background-color: #ffffff;
            bottom: 0;
            content: '';
            display: block;
            height: 0.1875rem;
            margin-top: 1rem;
            width: 5rem;
          }
        }

        &-link {
          text-decoration: underline;
          color: #f6a429;

          &:hover,
          &:focus {
            @apply no-underline;
          }
        }
      }
    }
  }
</style>
