<template>
  <v-dialog
    :value="isOpen"
    @input="closeDialog()"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
    dark
  >
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
import { IUser } from '@/boundary/userApplicationService/InOutType'
import UserProfileForm from '@/components/organisms/userProfileForm.vue'
import {
  closeDialog,
  toStandby,
  updateProfile,
} from '@/store/containers/changeUserProfileForm/action'
import selector from '@/store/containers/changeUserProfileForm/selector'
import authSelector from '@/store/middleware/auth/selector'
import { mapComputed } from '@/submodules/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    UserProfileForm,
  },
  computed: mapComputed(selector, authSelector),
})
export default class ChangeUserProfileFormContainer extends Vue {
  public updateProfile(params: IUser) {
    return this.$store.dispatch(updateProfile({ user: params }))
  }

  public toStandby() {
    return this.$store.dispatch(toStandby())
  }

  public closeDialog() {
    return this.$store.dispatch(closeDialog())
  }
}
</script>

<style module>
.user-icon-img {
  cursor: pointer;
}
</style>
