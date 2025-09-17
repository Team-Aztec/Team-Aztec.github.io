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

    <div class="tabs-content">
      <slot :activeIndex="activeIndex" :activeTab="tabs[activeIndex]" />
    </div>
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
    @apply flex-1 cursor-pointer border-none border-r border-main-color text-3xl font-medium;

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
    padding: 1rem;
  }
</style>
