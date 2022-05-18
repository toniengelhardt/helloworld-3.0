<template>
  <div class="wrapper">
    <div v-if="matrixMode" class="matrix-wrapper">
      <Matrix />
    </div>
    <nav class="sticky flex">
      <div class="flex-1 flex justify-center items-center">
        <!-- <a class="nav-item animate-pulse" @click="playlistOpen = true">
          <i class="i-carbon-play" />
        </a> -->
      </div>
    </nav>
    <div class="content">
      <VTermynal
        v-if="terminalOpen"
        v-bind="terminalSettings"
        class="custom-terminal"
        @before-new-line="newLine($event)"
      >
        <VtInput>
          Wake up, Neo...
        </VtInput>
        <VtText />
        <VtText>Uninstalling legacy systems:</VtText>
        <VtProgress prefix="Finance    " />
        <VtProgress prefix="Education  " />
        <VtProgress prefix="Social     " />
        <VtText />
        <VtInput>
          cd projects
        </VtInput>
        <VtInput>
          ./helloworld-3.0
        </VtInput>
      </VTermynal>
    </div>
    <footer class="flex">
      <div class="flex-1 flex items-center">
        <div class="flex-1 flex justify-between text-xl">
          <div class="g-item filter blur-it text-blue-300">
            <i class="i-carbon-gender-male" />
          </div>
          <div class="g-item flex-col filter">
            <div class="text-lg">
              <i class="i-carbon-transgender" />
            </div>
            <NuxtLink to="/impressum" class="text-xs">
              Impressum
            </NuxtLink>
          </div>
          <div class="g-item filter blur-it text-pink-300">
            <i class="i-carbon-gender-female" />
          </div>
        </div>
      </div>
    </footer>

    <!-- <Dialog v-if="playlistOpen" @close="playlistOpen = false">
      <Playlist />
    </Dialog> -->

    <!-- From Nuxt starter template -->
    <div class="spotlight-wrapper">
      <div class="spotlight-gradient" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VTermynal, VtInput, VtProgress, VtText, VtSpinner } from "@lehoczky/vue-termynal"

const terminalSettings = {

}

const terminalOpen = ref(true)
const lineCounter = ref(0)

const matrixMode = ref(false)

// const playlistOpen = ref(false)

/** Triggered whenever the terminal pushes a newline. */
function newLine(event: Event): void {
  lineCounter.value++
  if (lineCounter.value === 4) {
    matrixMode.value = true
  }
}

onMounted(() => {
  console.log('This project is open source.')
  console.log('Help improve it on GitHub: https://github.com/toniengelhardt/helloworld-3.0')
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  z-index: 1000;
}
nav  {
  height: $nav-size;
  .nav-item {
    @apply flex justify-center items-center;
    width: calc($nav-size - .5rem);
    height: calc($nav-size - .5rem);
    i {
      @apply text-3xl;
    }
  }
}
footer {
  height: $footer-size;
  .g-item {
    @apply flex justify-center items-center;
    min-width: $footer-size;
    height: $footer-size;
    &.blur-it {
      filter: blur(1.25px);
    }
  }
}
.content {
  @apply place-content-center flex flex-col items-center justify-center p-8;
  min-height: calc(100vh - 2 * $nav-size);
  // Terminal styling:
  // https://lehoczky.github.io/vue-termynal/styling.html
  .custom-terminal {
    --vt-color-bg: rgba(0,0,0, 0.5);
    @apply shadow-xl shadow-black backdrop-filter backdrop-blur-md rounded-2xl;
    min-height: 30rem;
  }
}
.matrix-wrapper {
  @apply fixed top-0 right-0 bottom-0 left-0;
}
.spotlight-wrapper {
  opacity: 0.75;
  transition: opacity 0.4s ease-in;
  pointer-events: none;
  .spotlight-gradient {
    @apply fixed z-10 left-0 right-0 bg-gradient-to-r from-blue-500 to-pink-400;
    filter: blur(20vh);
    height: 50vh;
    bottom: -30vh;
    pointer-events: none;
  }
}
</style>
