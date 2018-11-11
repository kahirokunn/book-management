<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <slot>
          <router-view/>
        </slot>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'blank',
})
</script>
