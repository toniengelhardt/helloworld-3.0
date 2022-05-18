<template>
  <canvas ref="canvas" :width="width" :height="height"></canvas>
</template>

<script setup lang="ts">

// From: https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din

const fps = 20
const canvas = ref<HTMLCanvasElement>()
const { width, height } = useWindowSize()

let interval: any
let ctx: any
let cols: number
let ypos: number[]

function matrix() {
  if (ctx) {
    ctx.fillStyle = '#11182711'
    ctx.fillRect(0, 0, width.value, height.value);

    ctx.fillStyle = '#fff';
    ctx.font = '15pt monospace'; // TODO: switch to Matrix Code NFI font

    // For each column put a random character at the end.
    ypos.forEach((y, ind) => {
      // Generate a random character
      const text = String.fromCharCode(Math.random() * 128)
      // x coordinate of the column, y coordinate is already given
      const x = ind * 20;
      // Render the character at (x, y)
      ctx.fillText(text, x, y)

      if (y > 100 + Math.random() * 10000) {
        // Randomly reset the end of the column if it's at least 100px high
        ypos[ind] = 0
      } else {
        // ...otherwise just move the y coordinate for the column 20px down
        ypos[ind] = y + 20
      }
    })
  } else if (canvas.value) {
    // Setup.
    ctx = canvas.value.getContext('2d')
    cols = Math.floor(width.value / 20) + 1
    ypos = Array(cols).fill(0)
    ctx.fillStyle = '#111827'
    ctx.fillRect(0, 0, width.value, height.value);
  }
}

onMounted(() => {
  // Render the animation at {fps} FPS.
  interval = setInterval(matrix, 1000 / fps)
})
onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>
