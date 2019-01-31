<template>
  <LoggedInLayout>
    <v-container fluid fill-height>
      <v-layout align-center column justify-center fill-height>
        <h1 class="display-2 font-weight-thin mb-3">
          ダッシュボード
        </h1>
      </v-layout>
    </v-container>
  </LoggedInLayout>
</template>

<script lang="ts">
import LoggedInLayout from '@/layouts/loggedInLayout.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LoggedInLayout,
  },
})
export default class Home extends Vue {
}
</script>
