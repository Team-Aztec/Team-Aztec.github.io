<template>
  <div class="competitions">
    <div class="competitions-description">
      <h1 class="competitions-description-title">Nos compétitions</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis diam odio, quis condimentum nibh molestie sit
        amet. Nullam nisl neque, fringilla eget sollicitudin pellentesque, imperdiet eget arcu. Suspendisse potenti. Mauris in
        eleifend enim. Morbi nec quam laoreet, porta nulla ac, facilisis nisi. Morbi vehicula, nunc a vestibulum commodo, ipsum
        augue tincidunt lorem, eu iaculis est lectus non nisl. Curabitur id purus laoreet, aliquet enim vitae, gravida tortor.
        Integer mi odio, consequat iaculis nunc vel, pellentesque euismod neque. Sed ultrices porttitor porta. In imperdiet eu
        diam ac pretium. Nullam vulputate massa vitae enim sollicitudin rutrum. Donec ornare eleifend dui, vel ullamcorper metus
        volutpat vitae. Nunc cursus auctor dui et consequat. Nulla facilisi. Aenean consectetur felis et mauris bibendum
        elementum.
      </p>
    </div>
    <div class="competitions-behopxaztec">
      <div class="competitions-behopxaztec-content">
        <h2 class="competitions-behopxaztec-content-title">BeHopGG 𝑥 Aztec</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis diam odio, quis condimentum nibh molestie
          sit amet. Nullam nisl neque, fringilla eget sollicitudin pellentesque, imperdiet eget arcu. Suspendisse potenti. Mauris
          in eleifend enim. Morbi nec quam laoreet, porta nulla ac, facilisis nisi. Morbi vehicula, nunc a vestibulum commodo,
          ipsum augue tincidunt lorem, eu iaculis est lectus non nisl.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis diam odio, quis condimentum nibh molestie
          sit amet. Nullam nisl neque, fringilla eget sollicitudin pellentesque, imperdiet eget arcu. Suspendisse potenti. Mauris
          in eleifend enim. Morbi nec quam laoreet, porta nulla ac, facilisis nisi. Morbi vehicula, nunc a vestibulum commodo,
          ipsum augue tincidunt lorem, eu iaculis est lectus non nisl.
        </p>
        <a class="competitions-behopxaztec-content-link" href="#">En savoir plus</a>
      </div>
      <div class="competitions-behopxaztec-image">
        <img src="./../assets/images/behop.jpeg" alt="Tournoi Behop x Aztec" title="Tournoi Behop x Aztec" />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
  .competitions {
    max-width: 85%;
    padding: 128px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    &-description {
      &-title {
        text-align: center;
        text-decoration: underline;
        text-decoration-color: #f6a429;
      }
    }

    &-behopxaztec {
      display: flex;
      gap: 20px;

      &-image,
      &-content {
        flex: 1;

        img {
          width: 100%;
        }

        &-link {
        }
      }
    }
  }
</style>
