<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>ログインフォーム</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          @keyup.enter="submit()"
          prepend-icon="person"
          label="Email"
          type="text"
          autocomplete="username"
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          @keyup.enter="submit()"
          prepend-icon="lock"
          label="Password"
          id="password"
          type="password"
          autocomplete="current-password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn
        :disabled="!valid"
        @click="submit()"
        color="primary">
        ログイン
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import * as rules from '@/config/user/rules'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LoginPage extends Vue {
  public $refs!: {
    form: VForm,
  }

  @Prop({required: true}) public login!: (email: string, password: string) => Promise<void>

  public valid = true
  public email = ''
  public password = ''

  get emailRules() {
    return rules.emailRules
  }

  get passwordRules() {
    return rules.passwordRules
  }

  public async submit() {
    if (this.$refs.form.validate()) {
      await this.login(this.email, this.password)
    }
  }
}
</script>
