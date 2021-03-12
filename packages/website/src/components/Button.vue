<template>
  <v-btn>按钮测试</v-btn>
  <v-btn danger>按钮测试</v-btn>
  <v-btn success>按钮测试</v-btn>
  <v-btn primary>按钮测试</v-btn>
  <v-btn info>按钮测试</v-btn>
  <v-btn warning>按钮测试</v-btn>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { VBtn } from 'victory-ui'
export default defineComponent({
  name: 'HelloWorld',
  components: {
    VBtn
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
