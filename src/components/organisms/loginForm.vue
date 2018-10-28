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
import {VForm} from 'vuetify/src/components/VForm/index';
import {Vue, Component, Prop} from 'vue-property-decorator';
import * as rules from '@/config/user/rules';

@Component
export default class LoginPage extends Vue {
  @Prop({required: true}) private login!: (email: string, password: string) => Promise<void>;

  private valid = true;
  private email = '';
  private password = '';

  get emailRules() {
    return rules.emailRules;
  }

  get passwordRules() {
    return rules.passwordRules;
  }

  private async submit() {
    const vform = this.$refs.form as VForm;
    if (vform.validate()) {
      await this.login(this.email, this.password);
    }
  }
}
</script>
