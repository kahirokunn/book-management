<template>
  <AuthLayout>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <UserRegistrationForm/>
      </v-layout>
    </v-container>
  </AuthLayout>
</template>

<script lang="ts">
import UserRegistrationForm from '@/components/containers/userRegistrationForm.vue'
import AuthLayout from '@/layouts/authLayout.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AuthLayout,
    UserRegistrationForm,
  },
})
export default class RegistrationPage extends Vue {
}
</script>
