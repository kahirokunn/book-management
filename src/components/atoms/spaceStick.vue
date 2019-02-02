<template>
  <div :style="`height: ${height}px; width: ${width}px;`"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'


@Component
export default class SpaceStick extends Vue {
  @Prop({ default: 16 })
  public height!: string | number

  @Prop({ default: 0 })
  public width!: string | number
}
</script>
