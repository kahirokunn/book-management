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
    <BookForm
      :createBook="createBook"
      :user="user"
      @cancel="closeDialog()"/>

    <!-- 登録中 -->
    <v-dialog v-model="isSending" persistent width="300">
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

    <ProxyComponent>
      <v-snackbar
        :value="isSendSuccess"
        @input="toStandby()"
        :timeout="3000"
        color="success"
        top>
        本の登録に成功しました
      </v-snackbar>
    </ProxyComponent>

  </v-dialog>
</template>

<script lang="ts">
import { IRegistrationParams } from '@/boundary/bookApplicationService/InOutType'
import BookForm from '@/components/organisms/createBookForm.vue'
import {
  closeDialog,
  createBook,
  toStandby,
} from '@/store/containers/createBookForm/action'
import selector from '@/store/containers/createBookForm/selector'
import authSelector from '@/store/middleware/auth/selector'
import { mapComputed } from '@/submodules/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    BookForm,
  },
  computed: mapComputed(selector, authSelector),
})
export default class CreateBookFormContainer extends Vue {
  public createBook(params: IRegistrationParams) {
    return this.$store.dispatch(createBook({ params }))
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
