<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Navigation } from 'swiper/modules'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  const modules = [Pagination, Navigation]
</script>

<template>
  <div class="organisation aztec-container">
    <div class="organisation-info">
      <h1 class="organisation-info-title">{{ $t('app.pages.organisation.title') }}</h1>
      <p>
        {{ $t('app.pages.organisation.content.paragraph.1') }}
      </p>
      <p>
        {{ $t('app.pages.organisation.content.paragraph.2') }}
      </p>
      <div class="organisation-info-video">
        <iframe
          class="organisation-info-video-iframe"
          src="https://www.youtube.com/embed/TALOiC339MA?si=Dx56xXbL1bdzYxfD&autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="organisation-services">
      <h2 class="organisation-services-title">{{ $t('app.pages.organisation.services.title') }}</h2>

      <div class="organisation-services-list">
        <swiper pagination navigation :loop="true" :modules="modules" :space-between="100">
          <swiper-slide>
            <img
              class="organisation-services-list-item-image"
              src="@/assets/images/services/logo_Aztec_black.png"
              aria-hidden="true"
            />
            <div class="organisation-services-list-item-content">
              <h3 class="organisation-services-list-item-content-title">{{
                $t('app.pages.organisation.service.event.title')
              }}</h3>
              <div
                class="organisation-services-list-item-content-description"
                v-html="$t('app.pages.organisation.service.event.description')"
              >
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img
              class="organisation-services-list-item-image"
              src="@/assets/images/services/logo_Aztec_classic.png"
              aria-hidden="true"
            />
            <div class="organisation-services-list-item-content">
              <h3 class="organisation-services-list-item-content-title">{{
                $t('app.pages.organisation.service.casting.title')
              }}</h3>
              <div
                class="organisation-services-list-item-content-description"
                v-html="$t('app.pages.organisation.service.casting.description')"
              >
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img
              class="organisation-services-list-item-image"
              src="@/assets/images/services/logo_Aztec_classic_opposite.png"
              aria-hidden="true"
            />
            <div class="organisation-services-list-item-content">
              <h3 class="organisation-services-list-item-content-title">{{ $t('app.pages.organisation.service.obs.title') }}</h3>
              <div
                class="organisation-services-list-item-content-description"
                v-html="$t('app.pages.organisation.service.obs.description')"
              >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="organisation-people">
      <h2 class="organisation-people-title">{{ $t('app.pages.organisation.team.title') }}</h2>

      <div class="organisation-people-list">
        <div class="organisation-people-list-item div1">
          <img src="@/assets/images/people/riggow.jpg" :alt="$t('app.pages.organisation.team.riggow.name')" />
          <h3 class="organisation-people-list-item-name">{{ $t('app.pages.organisation.team.riggow.name') }}</h3>
        </div>
        <div class="organisation-people-list-item div2">
          <img src="@/assets/images/people/ironpol.jpg" :alt="$t('app.pages.organisation.team.ironpol.name')" />
          <h3 class="organisation-people-list-item-name">{{ $t('app.pages.organisation.team.ironpol.name') }}</h3>
        </div>
        <div class="organisation-people-list-item div3">
          <img src="@/assets/images/people/Djiimy.jpg" :alt="$t('app.pages.organisation.team.djiimy.name')" />
          <h3 class="organisation-people-list-item-name">{{ $t('app.pages.organisation.team.djiimy.name') }}</h3>
        </div>
        <div class="organisation-people-list-item div4">
          <img
            class="lap-s:!w-[225px] lap-s:!h-[300px]"
            src="@/assets/images/people/arno3k.png"
            :alt="$t('app.pages.organisation.team.arno3K.name')"
          />
          <h3 class="organisation-people-list-item-name">{{ $t('app.pages.organisation.team.arno3K.name') }}</h3>
        </div>
        <div class="organisation-people-list-item div5">
          <img src="@/assets/images/people/wolfound.jpg" :alt="$t('app.pages.organisation.team.wolfound.name')" />
          <h3 class="organisation-people-list-item-name">{{ $t('app.pages.organisation.team.wolfound.name') }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .organisation {
    @apply flex flex-col gap-16  mx-auto pt-32;

    &-info {
      @apply flex flex-col gap-4;

      &-video {
        @apply mt-10 h-[500px];

        &-iframe {
          @apply w-full h-full;
        }
      }

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

    &-services {
      @apply flex flex-col gap-6 scroll-m-[82px];

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
        @apply grid;

        gap: 16px;

        &-item {
          @apply px-8 pb-8;

          img {
            @apply w-[215px] h-[215px];
          }

          &-name {
            @apply text-center mt-8;
          }
        }
      }
    }

    &-people {
      @apply flex flex-col gap-6 scroll-m-[82px];

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

      @media (min-width: 1024px) {
        &-list {
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-column-gap: 16px;
          grid-row-gap: 16px;

          .div1 {
            grid-area: 1 / 1 / 2 / 2;
          }
          .div2 {
            grid-area: 1 / 2 / 2 / 3;
          }
          .div3 {
            grid-area: 1 / 3 / 2 / 4;
          }
          .div4 {
            grid-area: 2 / 1 / 3 / 2;
          }
          .div5 {
            grid-area: 2 / 3 / 3 / 4;
          }
        }
      }

      &-list {
        display: grid;

        &-item {
          @apply px-8 pb-8 flex flex-col items-center;

          img {
            @apply w-[150px] h-[150px] rounded
            lap-s:w-[300px] lap-s:h-[300px];
          }

          &-name {
            @apply text-center mt-8;
          }
        }
      }
    }
  }

  .organisation-services-list {
    .swiper {
      @apply w-full bg-light-grey p-8 rounded-lg;

      &-slide {
        @apply w-full flex justify-center gap-8;
      }

      &-button-next {
        color: white;
      }
    }

    &-item {
      &-image {
        @apply w-[25%] hidden
        lap-s:block;
      }

      &-content {
        @apply flex flex-col gap-4;

        &-title {
          @apply font-bold;
        }

        &-description ul {
          @apply list-disc pl-6;
        }
      }
    }
  }

  .swiper-button-next {
    color: white !important;
  }

  .scroll-icon {
    @apply block w-full text-center;

    .icon:after {
      content: '\e93f';
    }
  }
</style>
