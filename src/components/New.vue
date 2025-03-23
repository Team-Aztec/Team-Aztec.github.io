<template>
  <a class="new" :href="link">
    <div class="new-image">
      <img :src="image.url" :alt="image.alt" />
    </div>
    <div class="new-description">
      <h6 class="new-description-title">{{ title }}</h6>
      <p class="new-description-text">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
  defineProps({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { url: { url: String, alt: String }, default: { url: '', alt: '' } },
    link: { type: String, default: '' },
  })
</script>

<style scoped lang="scss">
  .new {
    @apply relative flex flex-col my-6 bg-white shadow-sm border rounded-lg transition-all w-96;

    &:hover {
      -webkit-box-shadow: 0px 5px 20px 3px rgba(255, 255, 255, 0.49);
      box-shadow: 0px 5px 20px 3px rgba(255, 255, 255, 0.49);
    }

    &-image {
      @apply relative h-56 m-2.5 overflow-hidden text-white rounded-md;
    }

    &-description {
      @apply text-black p-4;

      &-title {
        @apply mb-2 text-xl font-semibold;
      }

      &-text {
        @apply leading-normal font-light;
      }
    }
  }
</style>
