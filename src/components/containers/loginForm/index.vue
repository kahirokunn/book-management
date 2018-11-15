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
import {Vue, Component} from 'vue-property-decorator'
import store from '@/store/root'
import {
  LoginByEmailAndPasswordAction,
  ToStandbyAction,
} from '@/store/containers/loginForm/boundaryAction'
import getters from '@/store/containers/loginForm/getters'
import LoginForm from '@/components/organisms/loginForm.vue'

@Component({
  components: {
    LoginForm,
  },
  computed: getters,
})
export default class LoginPage extends Vue {
  public async login(email: string, password: string) {
    store.commit(new LoginByEmailAndPasswordAction({ email, password }))
  }

  public toStandby() {
    store.commit(new ToStandbyAction())
  }
}
</script>
