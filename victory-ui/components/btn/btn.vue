<template>
  <button v-ripple class="v-btn" :class="dynamicClass" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Ripple } from '../../directives'
export default defineComponent({
  name: 'VBtn',

  directives: {
    ripple: Ripple
  },

  emits: {
    click(e: MouseEvent) {}
  },

  props: {
    color: String, // primary success info warning danger
    size: String, // large medium small mini
    round: Boolean,
    circle: Boolean
  },

  methods: {
    a() {}
  },

  setup: props => {
    const dynamicClass = computed(() => {
      let classList: string[] = []
      const { color, size } = props
      color && classList.push(`--${color}`)
      size && classList.push(`--${size}`)

      return classList
    })
    return {
      dynamicClass
    }
  }
})
</script>
