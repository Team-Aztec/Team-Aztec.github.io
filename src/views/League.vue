<script setup lang="ts"></script>

<template>
  <div class="league aztec-container">
    <h1 class="league-title">Aztec Circuit National</h1>

    <div class="league-partners">
      <h2 class="league-partners-title">Nos partenaires</h2>

      <div class="league-partners-list">
        <img
          class="league-partners-list-item"
          src="@/assets/images/people/wolfound.jpg"
          :alt="$t('app.pages.organisation.team.wolfound.name')"
        />
        <img
          class="league-partners-list-item"
          src="@/assets/images/people/wolfound.jpg"
          :alt="$t('app.pages.organisation.team.wolfound.name')"
        />
        <img
          class="league-partners-list-item"
          src="@/assets/images/people/wolfound.jpg"
          :alt="$t('app.pages.organisation.team.wolfound.name')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .league {
    @apply flex flex-col gap-16  mx-auto pt-32;

    &-title {
      @apply text-center relative font-bold text-3xl mb-4;

      &::after {
        background-color: #f6a429;
        bottom: 0;
        content: '';
        display: block;
        height: 0.1875rem;
        margin-top: 0.5rem;
        width: 8rem;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        right: 0;
      }
    }

    &-partners {
      &-title {
        @apply text-center relative font-bold text-3xl mb-4;

        &::after {
          background-color: #f6a429;
          bottom: 0;
          content: '';
          display: block;
          height: 0.1875rem;
          margin-top: 0.5rem;
          width: 8rem;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          right: 0;
        }
      }

      &-list {
        @apply flex flex-row gap-8 justify-center;

        &-item {
          @apply flex-1 max-h-64 max-w-64;
        }
      }
    }
  }
</style>
