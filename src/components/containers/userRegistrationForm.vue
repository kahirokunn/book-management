<template>
  <v-flex xs12 sm8 md6>
    <UserRegistrationForm :registration="userRegistration"/>

    <!-- 登録中 -->
    <v-dialog
      v-model="isSending"
      persistent
      width="300"
    >
      <v-card color="primary" dark>
        <v-card-text>
          登録中です...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- 登録失敗 -->
    <v-dialog v-model="isSendFailed" width="500">
      <v-card color="error" dark>
        <v-card-text>
          エラーが発生しました<br>
          恐れ入りますが時間を置いてから再度やり直してください
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn
            @click="toStandby()"
            color="red lighten-2"
          >OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- メールアドレスが既に使われています -->
    <v-dialog v-model="isEmailAlreadyInUse" width="500">
      <v-card color="error" dark>
        <v-card-text>
          登録しようとしたメールアドレスは既に使われています<br>
          別のメールアドレスでご登録ください
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn @click="toStandby()" color="red lighten-2">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-flex>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import UserRegistrationForm, {IUserRegistrationParams} from '@/components/organisms/userRegistrationForm.vue';
import UserApplicationService from '@/serviceLocator/UserApplicationService';

enum State {
  STANDBY,
  SENDING,
  SEND_FAILED,
  EMAIL_ALREADY_IN_USE,
}

@Component({
  components: {
    UserRegistrationForm,
  },
})
export default class UserRegistrationFormContainer extends Vue {
  private state: State = State.STANDBY;

  get isSending() {
    return this.state === State.SENDING;
  }

  get isSendFailed() {
    return this.state === State.SEND_FAILED;
  }

  get isEmailAlreadyInUse() {
    return this.state === State.EMAIL_ALREADY_IN_USE;
  }

  private async userRegistration(params: IUserRegistrationParams) {
    this.state = State.SENDING;
    try {
      await UserApplicationService.getInstance().register(params);
      this.$router.push('/');
    } catch (e) {
      console.log(e);
      if (e.code === 'auth/email-already-in-use') {
        this.state = State.EMAIL_ALREADY_IN_USE;
      } else {
        this.state = State.SEND_FAILED;
      }
    }
  }

  private toStandby() {
    this.state = State.STANDBY;
  }
}
</script>
