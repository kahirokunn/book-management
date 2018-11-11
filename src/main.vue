<template>
  <Auth>
    <RequiredVerifyEmail>
      <PageNotFound>
        <router-view/>
      </PageNotFound>
    </RequiredVerifyEmail>
  </Auth>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Auth from '@/components/middleware/auth.vue'
import RequiredVerifyEmail from '@/components/middleware/requiredVerifyEmail.vue'
import PageNotFound from '@/components/middleware/pageNotFound.vue'

@Component({
  components: {
    Auth,
    RequiredVerifyEmail,
    PageNotFound,
  },
})
export default class Main extends Vue {
}
</script>
