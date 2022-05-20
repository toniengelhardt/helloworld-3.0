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

      <!-- Terminal -->
      <VTermynal
        v-bind="terminalSettings"
        class="custom-terminal"
        @before-new-line="terminalNewLine($event)"
        @finish="terminalFinish()"
      >
        <div
          v-if="terminalAnimationComplete"
          class="qr-container"
        >
          <div
            class="flex cursor-pointer"
            @click="openQR()"
          >
            <div class="mr-6 <md:hidden">
              <img
                src="/img/nw3-logo.jpg"
                width="160"
                height="160"
              />
            </div>
            <div>
              <QrcodeVue
                :value="qr.value"
                :size="qr.size"
                :level="qr.level"
                background="rgba(0,0,0,0)"
                foreground="#fff"

              />
            </div>
          </div>
          <p class="mt-4 text-sm">
            <a :href="TELEGRAM_INVITE" target="_blank" class="hover:underline">
              {{ TELEGRAM_INVITE }}
            </a>
          </p>
        </div>
        <template v-else>
          <VtInput prompt="mrph:~$">
            Wake up, Neo...
          </VtInput>
          <VtText />
          <VtText>Uninstalling legacy systems<br></VtText>
          <VtText />
          <VtProgress prefix="[x] Finance     " />
          <VtProgress prefix="[x] Governance  " />
          <VtProgress prefix="[x] Education   " />
          <VtProgress prefix="[x] Social      " />
          <VtText />
          <VtInput prompt="mrph:~$">
            cd projects
          </VtInput>
          <VtInput prompt="mrph:~$">
            ./helloworld-3.0.py
          </VtInput>
        </template>
      </VTermynal>

    </div>
    <footer class="flex">
      <div class="flex-1 flex items-center">
        <div class="flex-1 flex justify-between text-lg">
          <div class="flex items-center ml-6 z-50 opacity-75">
            <i class="i-ph-peace mr-6" />
            <i class="i-carbon-favorite mr-6" />
            <i class="i-carbon-color-palette mr-6" />
            <i class="i-carbon-microscope mr-6" />
          </div>
          <div class="flex items-center mr-6 z-50 opacity-75">
            <NuxtLink
              to="/impressum"
              class="text-sm hover:underline"
            >
              Impressum
            </NuxtLink>
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
import QrcodeVue from 'qrcode.vue'

const { TELEGRAM_INVITE } = useRuntimeConfig()

const qr: any = {
  value: TELEGRAM_INVITE,
  size: 160,
  level: 'L' // H, L, M, Q, H
}

const terminalSettings = {
  lineDelay: 1000,
  typeDelay: 70,
  progressLength: 15,
  progressDelay: 30,
}

const terminalAnimationComplete = ref(false)
const matrixMode = ref(false)

let lineCounter = 0

// const playlistOpen = ref(false)

/** Triggered whenever the terminal pushes a newline. */
function terminalNewLine(event: Event): void {
  if (lineCounter === 4) {
    matrixMode.value = true
  } else {
    lineCounter++
  }
}

function terminalFinish() {
  terminalAnimationComplete.value = true
}

function openQR() {
  window.open(qr.value, '_blank')
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
}
.content {
  @apply place-content-center flex flex-col items-center justify-center p-4 md:p-8;
  min-height: calc(100vh - 2 * $nav-size);
  // Terminal styling:
  // https://lehoczky.github.io/vue-termynal/styling.html
  .custom-terminal {
    --vt-color-bg: rgba(0,0,0, 0.85);
    @apply min-h-20rem md:min-h-30rem p-1rem pt-4rem md:(p-3rem pt-4rem)
      shadow-xl shadow-black backdrop-filter backdrop-blur-md rounded-2xl;
    min-height: 30rem;
    &::before {
      @media (max-width: 768px) {
        opacity: 0;
      }
    }
    &::after {
      content: 'root@fsociety:~ —zsh';
      top: 10px;
    }
    .vt__line {
      @apply text-xs md:text-lg;
    }
  }
  .qr-container {
    @apply flex flex-col h-15rem md:h-23rem justify-center items-center;
  }
}
.matrix-wrapper {
  @apply fixed top-0 right-0 bottom-0 left-0;
  max-height: 100vh;
  overflow: hidden;
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
