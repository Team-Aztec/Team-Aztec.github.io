<template>
  <div class="countdown">
    <div>
      <span id="days">{{ formattedTime.days }}</span>
      <span>Jours</span>
    </div>
    <div>
      <span id="hours">{{ formattedTime.hours }}</span>
      <span>Heures</span>
    </div>
    <div>
      <span id="minutes">{{ formattedTime.minutes }}</span>
      <span>Minutes</span>
    </div>
    <div>
      <span id="seconds">{{ formattedTime.seconds }}</span>
      <span>Secondes</span>
    </div>
    <!--  -->
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

    span {
      @apply text-4xl font-bold;

      &:last-child {
        @apply text-lg text-center relative;

        &::before {
          @apply bg-white bottom-0 content-[''] block h-[0.1875rem] my-4 w-14 left-0 mx-auto right-0;
        }
      }
    }
  }
</style>
