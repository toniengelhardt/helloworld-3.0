<template>
  <div>
    <div>
      Hello World 3.0
    </div>
    <!-- From Nuxt starter template -->
    <div class="spotlight-wrapper">
      <div class="spotlight" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spotlight-wrapper {
  opacity: 0.75;
  transition: opacity 0.4s ease-in;
  .spotlight {
    @apply fixed z-10 left-0 right-0 bg-gradient-to-r from-blue-500 via-fuchsia-400 to-pink-400;
    filter: blur(20vh);
    height: 50vh;
    bottom: -30vh;
  }
}
</style>
