<template>
  <div class="arena">
    <div class="arena-content">
      <h1 class="arena-content-title">Aztec Arena</h1>
      <p>Ici les informations sur la Aztec Arena</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .arena {
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
