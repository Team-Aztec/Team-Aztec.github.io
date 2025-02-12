<template>
  <div class="stats">
    <div class="stats-content">
      <h1 class="stats-content-title">Statistiques</h1>
      <p> Vous pourrez prochainement consulter vos statistiques de vos différentes participations aux compétitions de Aztec : </p>
    </div>
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
  }
</style>
