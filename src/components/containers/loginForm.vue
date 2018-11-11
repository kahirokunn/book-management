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
    <v-dialog v-model="isFailed" width="500">
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
import {Vue, Component, Prop} from 'vue-property-decorator'
import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import LoginForm from '@/components/organisms/loginForm.vue'

enum State {
  STANDBY,
  SENDING,
  LOGIN_FAILED,
  SEND_SUCCESS,
}

@Component({
  components: {
    LoginForm,
  },
})
export default class LoginPage extends Vue {
  private valid = true
  private state: State = State.STANDBY

  get isSending() {
    return this.state === State.SENDING
  }

  get isFailed() {
    return this.state === State.LOGIN_FAILED
  }

  private async login(email: string, password: string) {
    this.state = State.SENDING
    try {
      await AuthApplicationService.getInstance().loginWithEmailAndPassword(email, password)
      this.state = State.SEND_SUCCESS
      this.$router.push('/')
    } catch (e) {
      console.log(e)
      this.state = State.LOGIN_FAILED
    }
  }

  private toStandby() {
    this.state = State.STANDBY
  }
}
</script>
