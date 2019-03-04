<template>
  <div>
    <button class="button is-primary" @click="onClick">
      Debounce DEMO: {{count}}
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { debounce } from 'lodash-decorators';

@Component
export default class DebounceDemo extends Vue {
  public count = 0;

  @debounce(1000)
  public onClick() {
    console.log('thisが見えないよー');
    this.count++;
  }
}
</script>
