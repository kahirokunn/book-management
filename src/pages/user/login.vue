<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <LoginForm/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import LoginForm from '@/components/containers/loginForm.vue'

@Component({
  layout: 'startUp',
  components: {
    LoginForm,
  },
})
export default class LoginPage extends Vue {
}
</script>
