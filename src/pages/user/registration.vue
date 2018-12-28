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
import {Vue, Component} from 'vue-property-decorator'
import AuthLayout from '@/layouts/authLayout.vue'
import UserRegistrationForm from '@/components/containers/userRegistrationForm.vue'

@Component({
  components: {
    AuthLayout,
    UserRegistrationForm,
  },
})
export default class RegistrationPage extends Vue {
}
</script>
