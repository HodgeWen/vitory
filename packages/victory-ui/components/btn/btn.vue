<template>
  <button class="v-btn" :class="dynamicClass">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'VBtn',

  props: {
    primary: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    danger: Boolean
  },

  setup(props) {
    const dynamicClass = computed(() => {
      let classList: string[] = []
      const allColor = ['primary', 'success', 'info', 'warning', 'danger']
      allColor.some(item => {
        let ret = props[item] as boolean
        if (ret) {
          classList.push(`v-btn--${item}`)
        }
        return  ret
      })

      return classList
    })
    return {
      dynamicClass
    }
  },
})
</script>

<style lang="scss">
.v-btn {
  &--success {
    background: green;
  }

  &--primary {
    background: blue;
  }
}
</style>
