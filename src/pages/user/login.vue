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
import {Vue, Component} from 'vue-property-decorator'
import AuthLayout from '@/layouts/authLayout.vue'
import LoginForm from '@/components/containers/loginForm/index.vue'

@Component({
  components: {
    AuthLayout,
    LoginForm,
  },
})
export default class LoginPage extends Vue {
}
</script>
