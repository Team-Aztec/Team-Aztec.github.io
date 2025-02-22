<template>
  <div class="new">
    <div class="new-image">
      <img src="./../assets/images/banniere.jpeg" alt="card-image" />
    </div>
    <div class="new-description">
      <h6 class="new-description-title">Article</h6>
      <p class="new-description-text">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can
        enjoy the main night life in Barcelona.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
  .new {
    @apply relative flex flex-col my-6 bg-white shadow-sm border rounded-lg transition-all cursor-pointer w-96;

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
