<template>
  <div class="history">
    <div class="history-content">
      <h1 class="history-content-title">Historique</h1>
      <p>Aztec participe depuis quelques temps à l'organisation de compétitions sur Counter-Strike 2.</p>
      <p>Et voici quelques exemples de tournois organisés par l'organisation :</p>
      <ul class="history-content-links">
        <li><a href="https://liquipedia.net/counterstrike/Aztec_Arena/1" target="_blank">Aztec Arena 1 </a> </li>
        <li><a href="https://liquipedia.net/counterstrike/Aztec_Arena/2" target="_blank">Aztec Arena 2</a></li>
      </ul>
      <img
        class="history-content-banner"
        src="./../assets/images/banniere.jpeg"
        alt="Bannière aztec organisateur de tournois esports"
        title="Bannière aztec organisateur de tournois esports"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .history {
    @apply max-w-[85%] px-0 pt-32 pb-24 mx-auto flex flex-col gap-10;

    &-content {
      @apply flex flex-col gap-4;

      &-title {
        @apply text-center relative;

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

      &-links {
        @apply list-disc pl-4;

        a {
          @apply underline;

          &:hover,
          &:focus {
            @apply no-underline;
          }
        }
      }

      &-banner {
        @apply mt-4 w-full border border-light-grey rounded;
      }
    }
  }
</style>
