<template>
  <v-container fluid fill-height>
    ダッシュボード
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  beforeRouteEnter(to, from, next) {
    // 認証情報見て変えるようにする
    next('/user/login');
  },
});
</script>
