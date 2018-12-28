<template>
  <div class="square">
    <slot/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Square extends Vue {
}
</script>

<style lang="scss" scoped>
.square {
  position: relative;
  height: 100%;
}

.square::before {
  content: "";
  display: block;
  padding-top: 75%;
}

/deep/ > * {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
