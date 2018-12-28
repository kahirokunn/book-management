<template>
  <v-dialog
    :value="isOpen"
    @input="closeDialog()"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-avatar
      size="36px"
      slot="activator"
    >
      <img
        width="36"
        height="36"
        :src="user.iconFilepath"
        class="user-icon-img">
    </v-avatar>

    <UserProfileForm
      :updateProfile="updateProfile"
      :user="user"
      @cancel="closeDialog()"/>

    <!-- 登録中 -->
    <v-dialog v-model="isSending" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          更新中です...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>

    </v-dialog>

    <!-- 登録失敗 -->
    <v-dialog :value="isSendFailed" @input="toStandby()" width="500">
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

    <v-snackbar
      :value="isSendSuccess"
      @input="toStandby()"
      :timeout="3000"
      color="success"
      top>
      アカウント情報の更新に成功しました
    </v-snackbar>

  </v-dialog>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import UserProfileForm from '@/components/organisms/userProfileForm.vue'
import store from '@/store/root'
import {
  UpdateProfileAction,
  ToStandbyAction,
  CloseDialog,
} from '@/store/containers/changeUserProfileForm/boundaryAction'
import getters from '@/store/containers/changeUserProfileForm/getters'
import authGetters from '@/store/middleware/auth/getters'
import {IUser} from '@/boundary/userApplicationService/InOutType'

@Component({
  components: {
    UserProfileForm,
  },
  computed: {
    ...getters,
    ...authGetters,
  },
})
export default class ChangeUserProfileFormContainer extends Vue {
  public updateProfile(params: IUser) {
    store.commit(new UpdateProfileAction(params))
  }

  public toStandby() {
    store.commit(new ToStandbyAction())
  }

  public closeDialog() {
    store.commit(new CloseDialog())
  }
}
</script>

<style module>
.user-icon-img {
  cursor: pointer;
}
</style>
