<script setup lang="ts"></script>

<template>
  <div class="organisation">
    <div class="organisation-info">
      <h1 class="organisation-info-title">Qui sommes-nous ?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nunc mauris, rutrum tristique eros volutpat ac.
        Vestibulum varius ultrices risus, vitae commodo ligula aliquam eu. Quisque vel lacus nibh. Duis vitae tincidunt ligula.
        Vestibulum lacus enim, rutrum ac dui in, pellentesque ornare felis. Curabitur ipsum tellus, sodales id semper sit amet,
        porta ac eros. Cras blandit risus id lectus molestie fermentum. Donec eget elementum nulla. Nam commodo ipsum ut finibus
        congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum condimentum diam, vel fringilla libero
        consequat in.
      </p>
      <p>
        Ut mattis ante sed purus lacinia elementum. Integer vel dolor sed ipsum lacinia feugiat. Nam condimentum eu tellus at
        condimentum. Aenean sed commodo mauris. Mauris maximus ligula a nibh vestibulum, ac bibendum ante pulvinar. Aenean finibus
        gravida urna, et fermentum diam ornare eget. In sit amet gravida massa. Suspendisse a ex ut quam efficitur mattis at eu
        sapien. Sed ullamcorper, lorem posuere porttitor molestie, lorem mauris suscipit leo, a porttitor nunc massa eu mi. Mauris
        commodo justo quis risus aliquam, volutpat faucibus elit ultricies. Phasellus eget nisl vel magna bibendum aliquam. Sed
        lectus nisi, vehicula ut fermentum id, iaculis id ex.
      </p>

      <a class="scroll-icon"> blahblah </a>
    </div>
    <div class="organisation-services">
      <h2 class="organisation-services-title">Nos services</h2>

      <div class="organisation-services-list"> </div>
    </div>
    <div class="organisation-people">
      <h2 class="organisation-people-title">L'équipe</h2>

      <div class="organisation-people-list">
        <div class="organisation-people-list-item">
          <img src="@/assets/images/people/wolfound.webp" alt="Lucas VANTOMME" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
        <div class="organisation-people-list-item">
          <img src="@/assets/images/people/wolfound.webp" alt="Wolfound" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
        <div class="organisation-people-list-item">
          <img src="@/assets/images/people/wolfound.webp" alt="Wolfound" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
        <div class="organisation-people-list-item-previous-last">
          <img src="@/assets/images/people/wolfound.webp" alt="Wolfound" />
          <h3 class="organisation-people-list-item-name">Lucas VANTOMME</h3>
        </div>
        <div class="organisation-people-list-item-last">
          <img src="@/assets/images/people/wolfound.webp" alt="Wolfound" />
          <h3 class="organisation-people-list-item-name">Lucas "Wolfound" VANTOMME</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .organisation {
    @apply flex flex-col gap-32 max-w-[85%] mx-auto py-32;

    &-info {
      @apply flex flex-col gap-4;

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
    }

    &-people,
    &-services {
      @apply flex flex-col gap-6;

      &-title {
        @apply grid -translate-x-1/2 text-3xl font-bold items-center;

        margin: 0 0 min(32px, 1vw) 0;
        grid-template-columns: 1fr auto 1fr;
        width: calc(100vw - 64px);
        margin-left: 50%;

        &::after,
        &::before {
          content: '';
          border: solid 1px white;
          margin: 0 min(5vw, 64px);
        }
      }

      &-list {
        @apply grid;

        gap: 16px;

        &-item {
          @apply px-8 pb-8;

          &-name {
            @apply text-center mt-8;
          }

          &-previous-last {
            @apply px-8 pb-8;

            grid-row-start: 2;
          }

          &-last {
            @apply px-8 pb-8;

            grid-column-start: 3;
            grid-row-start: 2;
          }
        }
      }
    }
  }

  .scroll-icon {
    @apply block w-full text-center;
  }
</style>
