<template>
  <button class="v-btn" :class="dynamicClass">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'VBtn',

  emits: [''],

  props: {
    color: String, // primary success info warning danger
    size: String, // large medium small mini
    type: String //
  },

  setup(props) {
    const dynamicClass = computed(() => {
      let classList: string[] = []
      const { color, type, size } = props
      color && classList.push(`--${color}`)
      size && classList.push(`--${size}`)
      type && classList.push(`--${type}`)

      return classList
    })
    return {
      dynamicClass
    }
  }
})
</script>
