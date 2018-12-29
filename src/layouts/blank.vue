<template>
  <v-app key="blank">
    <v-content>
      <slot />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'blank',
})
</script>
