<template>
  <div class="stats">
    <div class="stats-content">
      <h1 class="stats-content-title">Statistiques</h1>
      <p> Vous pourrez prochainement consulter vos statistiques de vos différentes participations aux compétitions de Aztec : </p>
    </div>
    <p class="stats-statistiques-partner">
      L'ensemble des statistiques sont fournies suite à notre partenariat avec
      <a style="--bg: #" href="https://www.pause-stat.pro/" target="_blank">Pause Stat</a>. Merci à eux pour l'ensemble de leur
      travail.
    </p>
  </div>
</template>
<style scoped lang="scss">
  .stats {
    max-width: 85%;
    padding: 128px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;

    &-content-title {
      text-align: center;
      position: relative;

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

    &-statistiques {
      &-partner {
        a {
          text-decoration: underline;
          color: #f6a429;

          &:hover,
          &:focus {
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
