<script lang="ts" setup>
  import { ref, defineProps } from 'vue'

  interface Tab {
    label: string
  }

  const props = defineProps<{
    tabs: Tab[]
    defaultIndex?: number
  }>()

  const activeIndex = ref(props.defaultIndex ?? 0)

  function selectTab(index: number) {
    activeIndex.value = index
  }
</script>

<template>
  <div class="tabs-container">
    <div class="tabs-header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: index === activeIndex }]"
        @click="selectTab(index)"
      >
        {{ tab.label }}
      </button>
    </div>

    <transition name="fade-slide" mode="out-in">
      <div class="tabs-content" :key="activeIndex">
        <slot :activeIndex="activeIndex" :activeTab="tabs[activeIndex]" />
      </div>
    </transition>
  </div>
</template>

<style scoped langs="scss">
  .tabs-container {
    @apply w-full border border-main-color rounded overflow-hidden;
  }

  .tabs-header {
    @apply flex border-b border-main-color;
  }

  .tab-button {
    @apply flex-1 cursor-pointer border-none border-r border-main-color text-xl font-medium py-2 px-4;

    transition: background 0.2s;
  }

  .tab-button:last-child {
    border-right: none;
  }

  .tab-button:hover {
    @apply bg-main-color text-white;
  }

  .tab-button.active {
    @apply font-bold text-main-color border-b-2 border-main-color;
  }

  .tab-button.active:hover {
    @apply text-white;
  }

  .tabs-content {
    @apply p-4;
  }

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.3s ease;
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }

  .fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
