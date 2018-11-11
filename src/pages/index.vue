<template>
  <v-container fluid fill-height>
    <v-layout align-center column justify-center fill-height>
      <h1 class="display-2 font-weight-thin mb-3">
        ダッシュボード
      </h1>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import getters from '@/store/middleware/auth/getters'

@Component
export default class Home extends Vue {
  public created() {
    if (!getters.isLoggedIn()) {
      this.$router.push('/user/login')
    }
  }
}
</script>
