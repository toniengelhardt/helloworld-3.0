<template>
  <div class="wrapper">
    <nav class="sticky flex">
      <div class="flex-1 flex justify-center items-center">
        <!-- <a class="nav-item">
          <i class="i-carbon-moon" />
        </a> -->
        <a class="nav-item">
          <i class="i-carbon-play" />
        </a>
      </div>
    </nav>
    <div class="content">
      Hello World 3.0
    </div>
    <footer class="flex">
      <div class="flex-1 flex justify-center items-center">
        <NuxtLink to="/impressum" class="text-sm">
          Impressum
        </NuxtLink>
      </div>
    </footer>
    <!-- From Nuxt starter template -->
    <div class="spotlight-wrapper">
      <div class="spotlight-gradient" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
nav  {
  height: $nav-size;
}
footer {
  height: $footer-size;
}
.nav-item {
  @apply flex justify-center items-center;
  width: calc($nav-size - .5rem);
  height: calc($nav-size - .5rem);
  i {
    @apply text-xl;
  }
}
.content {
  @apply place-content-center flex flex-col items-center justify-center p-8;
  min-height: calc(100vh - 2 * $nav-size);
}
.spotlight-wrapper {
  opacity: 0.75;
  transition: opacity 0.4s ease-in;
  .spotlight-gradient {
    @apply fixed z-10 left-0 right-0 bg-gradient-to-r from-blue-500 via-fuchsia-400 to-pink-400;
    filter: blur(20vh);
    height: 50vh;
    bottom: -30vh;
  }
}
</style>
