<template>
  <div>
    <button class="button is-primary" @click="onClick">
      Throttle DEMO: {{count}}
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { throttle } from 'lodash-decorators';

@Component
export default class ThrottleDemo extends Vue {
  public count = 0;

  @throttle(1000, {leading: false})
  public onClick() {
    console.log('thisが見えないよー');
    this.count++;
  }
}
</script>
