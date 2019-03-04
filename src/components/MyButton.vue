<template>
  <button class="button is-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #000;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
