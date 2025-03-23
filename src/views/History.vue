<template>
  <div class="history">
    <div class="history-content">
      <h1 class="history-content-title">Historique</h1>
      <p>Aztec participe depuis quelques temps à l'organisation de compétitions sur Counter-Strike 2.</p>
      <p>Et voici quelques exemples de tournois organisés par l'organisation :</p>
      <ul class="history-content-links">
        <li><a href="https://liquipedia.net/counterstrike/Aztec_Arena/1" target="_blank">Aztec Arena 1 </a> </li>
        <li><a href="https://liquipedia.net/counterstrike/Aztec_Arena/2" target="_blank">Aztec Arena 2</a></li>
        <li
          ><a href="https://www.faceit.com/fr/championship/86b3bbf4-f162-4ef7-8f8e-1ec26253a232/Aztec%20CUP%201" target="_blank"
            >Aztec Cup 1</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/259bef4d-8aa0-45c4-aba5-a0581e68ac0a/Aztec%20CUP%202" target="_blank"
            >Aztec Cup 2</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/d979b4d4-b06b-4ace-82e5-b8aafcae9a4f/Aztec%20CUP%203" target="_blank"
            >Aztec Cup 3</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/d785be39-df8f-451c-838b-d12fbf8be754/Aztec%20CUP%204" target="_blank"
            >Aztec Cup 4</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/d7e227bf-04f9-41ab-844e-a05be529de98/Aztec%20CUP%205" target="_blank"
            >Aztec Cup 5</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/2c188b78-4b6c-4c01-ab28-8edca1e747a2/Aztec%20CUP%206" target="_blank"
            >Aztec Cup 6</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/c7900c67-2d05-43a4-a371-442d03433834/Aztec%20CUP%207" target="_blank"
            >Aztec Cup 7</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/7e669f46-bd58-423a-9c3a-f7eba1c39182/Aztec%20CUP%208" target="_blank"
            >Aztec Cup 8</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/6ce79479-4459-45f8-9eb0-0c1caaffdb0f/Aztec%20CUP%209" target="_blank"
            >Aztec Cup 9</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/75b23925-e434-47e2-a3b2-f1ed42c4943f/Aztec%20CUP%2010" target="_blank"
            >Aztec Cup 10</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/702a34e6-3849-4920-ac13-1d465e99d224/Aztec%20CUP%2011" target="_blank"
            >Aztec Cup 11</a
          ></li
        >
        <li
          ><a href="https://www.faceit.com/fr/championship/5284bce2-b0d0-4b9c-b66d-39ffc91881a3/Aztec%20CUP%2012" target="_blank"
            >Aztec Cup 12</a
          ></li
        >
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
        @apply text-center relative font-bold text-2xl mb-4;

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
