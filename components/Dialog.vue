<template>
  <div>
    <transition name="modal">
      <div class="modal-mask" @click="$emit('close')">
        <div class="modal-wrapper">
          <div class="modal-container" @click.stop>
            <div class="modal-body">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(47, 51, 49, 0.85);
  transition: opacity 0.3s ease;
  backdrop-filter: blur(7.5px);
  .modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    max-height: 100vh;
    overflow: visible;
    overscroll-behavior: contain !important;
    .modal-container {
      display: flex;
      flex-flow: column;
      width: min-content; // Fix for Safari
      max-width: calc(100vw - 1.5rem);
      margin: 1rem auto;
      box-sizing: border-box;
      transition: all 0.3s ease;
      background-color: hsl(var(--base));
      box-shadow: var(--shadow-modal);
      .modal-body {
        padding: 1.5rem;
        overflow: scroll;
      }
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
