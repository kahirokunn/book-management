<template>
  <Blank>
    <v-layout align-center column justify-center fill-height>
      <h1 class="display-2 font-weight-thin mb-3">リンク付き確認メールを送信しました</h1>
      <h4 class="subheading">メール内にあるリンクをクリックしてアカウントを有効化してください</h4>
    </v-layout>
  </Blank>
</template>

<script lang="ts">
import Blank from '@/layouts/blank.vue'
import router from '@/router'
import selector from '@/store/middleware/auth/selector'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Blank,
  },
})
export default class RequiredVerifyEmailPage extends Vue {
  public created() {
    // メールアドレス認証が完了しているユーザーには見せない
    if (selector.isEmailVerified(this.$store.state)) {
      router.push('/')
    } else if (!selector.isLoggedIn(this.$store.state)) {
      router.push(('/'))
    }
  }
}
</script>
