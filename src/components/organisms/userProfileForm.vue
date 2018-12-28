<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="cancel()">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>プロフィール</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout row wrap>
          <UserImageUploader v-model="iconFilepath" />
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md3>
            <v-text-field
              :value="user.emailAddress"
              prepend-icon="email"
              label="Email"
              type="text"
              disabled
              readonly/>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md3>
            <v-text-field
              v-model="displayName"
              :rules="displayNameRules"
              label="ハンドルネーム"
              type="text"
              autocomplete="displayName"/>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs5 md3>
            <v-text-field
              v-model="familyName"
              :rules="familyNameRules"
              label="姓"
              type="text"
              autocomplete="familyName"/>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs6 md3>
            <v-text-field
              v-model="firstName"
              :rules="firstNameRules"
              label="名"
              type="text"
              autocomplete="firstName"/>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs5 md3>
            <v-text-field
              v-model="familyNameKana"
              :rules="familyNameKanaRules"
              label="姓(カナ)"
              type="text"
              autocomplete="familyNameKana"/>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs6 md3>
            <v-text-field
              v-model="firstNameKana"
              :rules="firstNameKanaRules"
              label="名(カナ)"
              type="text"
              autocomplete="firstNameKana"/>
          </v-flex>
        </v-layout>
        <v-flex :class="$style.group">
          <p>生年月日</p>
          <v-layout row wrap>
            <v-flex xs4 md1>
              <v-select
                v-model.number="birthYear"
                :items="years"
                :rules="birthYearRules"
                solo/>
            </v-flex>
            <v-flex xs4 md1>
              <v-select
                v-model.number="birthMonth"
                :items="months"
                :rules="birthMonthRules"
                solo/>
            </v-flex>
            <v-flex xs4 md1>
              <v-select
                v-model.number="birthDay"
                :items="days"
                :rules="birthDayRules"
                solo/>
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- 入社日 -->
        <v-flex :class="$style.group">
          <p>入社日</p>
          <v-layout row wrap>
            <v-flex xs4 md1>
              <v-select
                v-model.number="hireYear"
                :items="years"
                :rules="hireYearRules"
                solo/>
            </v-flex>
            <v-flex xs4 md1>
              <v-select
                v-model.number="hireMonth"
                :items="months"
                :rules="hireMonthRules"
                solo/>
            </v-flex>
            <v-flex xs4 md1>
              <v-select
                v-model.number="hireDay"
                :items="days"
                :rules="hireDayRules"
                solo/>
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- 性別 -->
        <v-layout row wrap>
          <v-radio-group v-model="gender">
            <v-radio
              v-for="genderValue in genderList" :key="genderValue"
              :label="genderValue" :value="genderValue"/>
          </v-radio-group>
        </v-layout>

      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer/>
      <v-btn
        :disabled="!valid || isSending"
        @click="submit()"
        color="primary"
      >保存</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import * as rules from '@/config/user/rules'
import {genderList} from '@/config/user/gender'
import {years, months, days} from '@/config/user/birthday'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import UserImageUploader from '@/components/relay/userImageUploader.vue'

@Component({
  components: {
    UserImageUploader,
  },
})
export default class UserProfileForm extends Vue {
  public $refs!: {
    form: VForm,
  }

  @Prop({required: true}) public updateProfile!: (params: IUser) => void
  @Prop({required: true}) public user!: IUser

  public valid = true
  public isSending = false

  public iconFilepath!: string
  public displayName!: string
  public firstName!: string
  public familyName!: string
  public firstNameKana!: string
  public familyNameKana!: string
  public birthYear!: number
  public birthMonth!: number
  public birthDay!: number
  public hireYear!: number
  public hireMonth!: number
  public hireDay!: number
  public gender!: Gender

  get years() { return years }
  get months() { return months }
  get days() { return days }
  get genderList() { return genderList }

  get firstNameRules() { return rules.firstNameRules }
  get familyNameRules() { return rules.familyNameRules }
  get firstNameKanaRules() { return rules.firstNameKanaRules }
  get familyNameKanaRules() { return rules.familyNameKanaRules }
  get birthYearRules() { return rules.birthYearRules }
  get birthMonthRules() { return rules.birthMonthRules }
  get birthDayRules() { return rules.birthDayRules }
  get hireYearRules() { return rules.hireYearRules }
  get hireMonthRules() { return rules.hireMonthRules }
  get hireDayRules() { return rules.hireDayRules }
  get displayNameRules() { return rules.displayNameRules }
  get birthday() { return new Date(`${this.birthYear}/${this.birthMonth}/${this.birthDay}`) }
  get hireDate() { return new Date(`${this.hireYear}/${this.hireMonth}/${this.hireDay}`) }

  public created() {
    this.iconFilepath = this.user.iconFilepath
    this.displayName = this.user.displayName
    this.firstName = this.user.firstName
    this.familyName = this.user.familyName
    this.firstNameKana = this.user.firstNameKana
    this.familyNameKana = this.user.familyNameKana
    this.birthYear = this.user.birthday.getFullYear()
    this.birthMonth = this.user.birthday.getMonth() + 1
    this.birthDay = this.user.birthday.getDate()
    this.hireYear = this.user.hireDate.getFullYear()
    this.hireMonth = this.user.hireDate.getMonth() + 1
    this.hireDay = this.user.hireDate.getDate()
    this.gender = this.user.gender
  }

  public submit() {
    if (this.$refs.form.validate()) {
      this.isSending = true
      this.updateProfile({
        id: this.user.id,
        emailAddress: this.user.emailAddress,
        displayName: this.displayName,
        iconFilepath: this.iconFilepath,
        firstName: this.firstName,
        familyName: this.familyName,
        firstNameKana: this.firstNameKana,
        familyNameKana: this.familyNameKana,
        birthday: this.birthday,
        hireDate: this.hireDate,
        gender: this.gender,
      })
      this.isSending = false
    }
  }

  public cancel() {
    this.$emit('cancel')
  }
}
</script>

<style module>
.group {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
