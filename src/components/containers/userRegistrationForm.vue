<template>
  <v-flex xs12 sm8 md6>
    <UserRegistrationForm :registration="userRegistration"/>

    <!-- 登録中 -->
    <v-dialog
      :value="isSending"
      persistent
      width="300">
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

    <!-- エラー -->
    <v-dialog :value="isSendFailed" width="500">
      <v-card color="error" dark>
        <v-card-text>
          {{ errorMessage }}
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
import {Vue, Component} from 'vue-property-decorator'
import {IRegistrationParams} from '@/boundary/authApplicationService/InOutType'
import UserRegistrationForm from '@/components/organisms/userRegistrationForm.vue'
import {
  userRegistration,
  toStandby,
} from '@/store/containers/userRegistrationForm/action'
import getters from '@/store/containers/userRegistrationForm/getters'
import store from '@/store/root'

@Component({
  components: {
    UserRegistrationForm,
  },
  computed: getters,
})
export default class UserRegistrationFormContainer extends Vue {
  public userRegistration(params: IRegistrationParams) {
    store.commit(userRegistration(params))
  }

  public toStandby() {
    store.commit(toStandby())
  }
}
</script>
