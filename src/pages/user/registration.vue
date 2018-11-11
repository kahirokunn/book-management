<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <UserRegistrationForm/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import UserRegistrationForm from '@/components/containers/userRegistrationForm.vue'

@Component({
  layout: 'startUp',
  components: {
    UserRegistrationForm,
  },
})
export default class RegistrationPage extends Vue {
}
</script>
