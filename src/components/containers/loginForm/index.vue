<template>
  <v-flex xs12 sm8 md6>
    <LoginForm :login="login"/>

    <!-- ログイン中 -->
    <v-dialog
      v-model="isSending"
      persistent
      width="300"
    >
      <v-card color="primary" dark>
        <v-card-text>
          ログイン中です...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- ログイン失敗 -->
    <v-dialog :value="isFailed" @input="toStandby()" width="500">
      <v-card color="error" dark>
        <v-card-text>ログイン情報が間違っています</v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn
            @click="toStandby()"
            color="red lighten-2"
          >OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script lang="ts">
import LoginForm from '@/components/organisms/loginForm.vue'
import {
  loginByEmailAndPassword,
  toStandby,
} from '@/store/containers/loginForm/action'
import selector from '@/store/containers/loginForm/selector'
import { mapComputed } from '@/submodules/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LoginForm,
  },
  computed: mapComputed(selector),
})
export default class LoginPage extends Vue {
  public async login(email: string, password: string) {
    await this.$store.dispatch(loginByEmailAndPassword({ email, password }))
  }

  public toStandby() {
    return this.$store.dispatch(toStandby())
  }
}
</script>
