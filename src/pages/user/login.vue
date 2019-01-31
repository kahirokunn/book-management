<template>
  <AuthLayout>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <LoginForm/>
      </v-layout>
    </v-container>
  </AuthLayout>
</template>

<script lang="ts">
import LoginForm from '@/components/containers/loginForm/index.vue'
import AuthLayout from '@/layouts/authLayout.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AuthLayout,
    LoginForm,
  },
})
export default class LoginPage extends Vue {
}
</script>
