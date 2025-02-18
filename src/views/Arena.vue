<template>
  <div class="arena">
    <div class="arena-content">
      <h1 class="arena-content-title">Aztec Arena</h1>
      <p
        >La <strong>Aztec Arena</strong> est un tournoi majeur rassemblant les meilleures équipes de Counter-Strike 2, avec un
        cash prize de <strong>500€</strong>
        en jeu.
      </p>
      <p>
        Initialement disputée avec <strong>16 équipes</strong>, la compétition évolue désormais vers un format plus sélectif avec
        <strong>8 équipes</strong>
        qualifiées de différentes manières :
      </p>
      <ul>
        <li>4 équipes ayant remporté une Aztec Cup et obtenu leur ticket direct.</li>
        <li
          >4 équipes sélectionnées grâce à un système de points, récompensant leur régularité et leur engagement, ou invitées si
          elles évoluent au niveau Advanced ou supérieur.</li
        >
      </ul>
      <p
        >La Aztec Arena est l’ultime étape des compétitions Aztec, offrant un défi intense et un spectacle de haut niveau aux
        joueurs comme aux spectateurs.</p
      >
    </div>

    <div class="arena-statistiques">
      <iframe
        class="arena-statistiques-table"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ44fkrywHdr3bcprOWsRlGbXqmn3dOZS072tYK-JjtOxRJbqATPbcj8btRZl3Q1070_mltsVn4Ogff/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
      ></iframe>

      <p class="arena-statistiques-partner">
        L'ensemble des statistiques sont fournies suite à notre partenariat avec
        <a style="--bg: #" href="https://www.pause-stat.pro/" target="_blank">Pause State</a>. Merci à eux pour l'ensemble de leur
        travail.
      </p>
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

    &-statistiques {
      &-table {
        width: 100%;
        height: 300px;
      }

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
