<template>
  <Auth>
    <RequiredVerifyEmail>
      <router-view/>
    </RequiredVerifyEmail>
  </Auth>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Auth from '@/components/middleware/auth.vue'
import RequiredVerifyEmail from '@/components/middleware/requiredVerifyEmail.vue'

@Component({
  components: {
    Auth,
    RequiredVerifyEmail,
  },
})
export default class Main extends Vue {
}
</script>
