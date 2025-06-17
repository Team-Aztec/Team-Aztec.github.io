<template>
  <div class="countdown countdown-container">
    <div class="countdown-item">
      <span class="countdown-number" id="days">{{ formattedTime.days }}</span>
      <span class="countdown-label">Jours</span>
    </div>
    <div>
      <span class="countdown-number" id="hours">{{ formattedTime.hours }}</span>
      <span class="countdown-label">Heures</span>
    </div>
    <div>
      <span class="countdown-number" id="minutes">{{ formattedTime.minutes }}</span>
      <span class="countdown-label">Minutes</span>
    </div>
    <div>
      <span class="countdown-number" id="seconds">{{ formattedTime.seconds }}</span>
      <span class="countdown-label">Secondes</span>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

  const props = defineProps({
    targetTime: {
      type: Number,
      required: true,
    },
  })

  let intervalId
  const currentTime = ref(new Date().getTime())
  const timeRemaining = ref(props.targetTime - currentTime.value)

  const formattedTime = computed(() => {
    const seconds = Math.floor(timeRemaining.value / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    return {
      days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    }
  })

  const updateTimer = () => {
    currentTime.value = new Date().getTime()

    timeRemaining.value = Math.max(0, props.targetTime - currentTime.value)
  }

  onMounted(() => {
    intervalId = setInterval(updateTimer, 1000)
  })

  onBeforeUnmount(() => {
    clearInterval(intervalId)
  })
</script>

<style scoped lang="scss">
  .countdown {
    @apply flex justify-center items-center gap-12 p-5 rounded-md;

    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    div {
      @apply flex flex-col items-center;
    }

    &-container {
      @apply flex justify-center gap-5 bg-black bg-opacity-60 rounded-lg border-2 border-[#ffd700] p-6;
    }

    &-item {
      @apply text-center;
    }

    &-number {
      @apply text-5xl font-bold text-white drop-shadow-lg; //animate-pulse
    }

    &-label {
      @apply text-lg uppercase tracking-wide;

      color: rgb(250 204 21 / var(--tw-text-opacity, 1));
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
