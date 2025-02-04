<template>
  <div class="home">
    <h1>Qui sommes nous ?</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis diam odio, quis condimentum nibh molestie sit
      amet. Nullam nisl neque, fringilla eget sollicitudin pellentesque, imperdiet eget arcu. Suspendisse potenti. Mauris in
      eleifend enim. Morbi nec quam laoreet, porta nulla ac, facilisis nisi. Morbi vehicula, nunc a vestibulum commodo, ipsum
      augue tincidunt lorem, eu iaculis est lectus non nisl. Curabitur id purus laoreet, aliquet enim vitae, gravida tortor.
      Integer mi odio, consequat iaculis nunc vel, pellentesque euismod neque. Sed ultrices porttitor porta. In imperdiet eu diam
      ac pretium. Nullam vulputate massa vitae enim sollicitudin rutrum. Donec ornare eleifend dui, vel ullamcorper metus volutpat
      vitae. Nunc cursus auctor dui et consequat. Nulla facilisi. Aenean consectetur felis et mauris bibendum elementum.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis diam odio, quis condimentum nibh molestie sit
      amet. Nullam nisl neque, fringilla eget sollicitudin pellentesque, imperdiet eget arcu. Suspendisse potenti. Mauris in
      eleifend enim. Morbi nec quam laoreet, porta nulla ac, facilisis nisi. Morbi vehicula, nunc a vestibulum commodo, ipsum
      augue tincidunt lorem, eu iaculis est lectus non nisl. Curabitur id purus laoreet, aliquet enim vitae, gravida tortor.
      Integer mi odio, consequat iaculis nunc vel, pellentesque euismod neque. Sed ultrices porttitor porta. In imperdiet eu diam
      ac pretium. Nullam vulputate massa vitae enim sollicitudin rutrum. Donec ornare eleifend dui, vel ullamcorper metus volutpat
      vitae. Nunc cursus auctor dui et consequat. Nulla facilisi. Aenean consectetur felis et mauris bibendum elementum.
    </p>

    <img
      class="home-banner"
      src="./../assets/images/banniere.jpeg"
      alt="Bannière aztec organisateur de tournois esports"
      title="Bannière aztec organisateur de tournois esports"
    />

    <iframe
      class="home-video"
      src="https://www.youtube.com/embed/YbJGUhsfnu4?si=mNA5IHyWff8TlEzw&autoplay=1&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>

    <Socials />
  </div>
</template>
<script setup>
  import Socials from '../components/Socials.vue'
</script>

<style scoped lang="scss">
  .home {
    max-width: 85%;
    padding: 128px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 32px;

    &-video {
      width: 85%;
      height: 500px;
    }
  }

  .home-banner {
    width: 100%;
    border: 1px solid #666;
    border-radius: 4px;
  }
</style>
