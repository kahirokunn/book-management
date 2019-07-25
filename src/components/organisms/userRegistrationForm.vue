<template>
  <v-card class="elevation-12">
    <v-app-bar dark color="primary">
      <v-toolbar-title>会員登録フォーム</v-toolbar-title>
    </v-app-bar>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              prepend-icon="email"
              label="Email"
              type="text"
              autocomplete="username"
            />
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              prepend-icon="lock"
              label="Password"
              type="password"
              autocomplete="current-password"
            />
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs5>
            <v-text-field
              v-model="displayName"
              :rules="displayNameRules"
              label="ハンドルネーム"
              type="text"
              autocomplete="displayName"
            />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs5>
            <v-text-field
              v-model="familyName"
              :rules="familyNameRules"
              label="姓"
              type="text"
              autocomplete="familyName"
            />
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="firstName"
              :rules="firstNameRules"
              label="名"
              type="text"
              autocomplete="firstName"
            />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs5>
            <v-text-field
              v-model="familyNameKana"
              :rules="familyNameKanaRules"
              label="姓(カナ)"
              type="text"
              autocomplete="familyNameKana"
            />
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="firstNameKana"
              :rules="firstNameKanaRules"
              label="名(カナ)"
              type="text"
              autocomplete="firstNameKana"
            />
          </v-flex>
        </v-layout>
        <v-flex :class="$style.group">
          <p>生年月日</p>
          <v-layout row wrap>
            <v-flex xs4>
              <v-select v-model="birthYear" :items="years" :rules="birthYearRules" solo />
            </v-flex>
            <v-flex xs4>
              <v-select v-model="birthMonth" :items="months" :rules="birthMonthRules" solo />
            </v-flex>
            <v-flex xs4>
              <v-select v-model="birthDay" :items="days" :rules="birthDayRules" solo />
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- 入社日 -->
        <v-flex :class="$style.group">
          <p>入社日</p>
          <v-layout row wrap>
            <v-flex xs4>
              <v-select v-model="hireYear" :items="years" :rules="hireYearRules" solo />
            </v-flex>
            <v-flex xs4>
              <v-select v-model="hireMonth" :items="months" :rules="hireMonthRules" solo />
            </v-flex>
            <v-flex xs4>
              <v-select v-model="hireDay" :items="days" :rules="hireDayRules" solo />
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- 性別 -->
        <v-layout row wrap>
          <v-radio-group v-model="gender">
            <v-radio
              v-for="genderValue in genderList"
              :key="genderValue"
              :label="genderValue"
              :value="genderValue"
            />
          </v-radio-group>
        </v-layout>

        <v-flex xs12>
          <v-checkbox
            v-model="isAgreeMembershipAgreement"
            :rules="[v => !!v || 'You must agree to continue!']"
            color="primary"
          >
            <div slot="label" @click.stop="() => {}">
              <v-dialog v-model="membershipAgreementDialog" scrollable width="600">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">会員規約</v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>会員規約</v-card-title>
                  <v-card-text>{{ membershipAgreementText }}</v-card-text>
                  <v-divider />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn @click="aggreeMembershipAgreement()" color="primary">同意する</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>に同意しますか？
            </div>
          </v-checkbox>
        </v-flex>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn :disabled="!valid || isSending" @click="submit()" color="primary">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { prefectures } from '@/config/prefecture'
import { days, months, years } from '@/config/user/birthday'
import { defaultUserIconUrl } from '@/config/user/defaultUserParams'
import { genderList } from '@/config/user/gender'
import * as rules from '@/config/user/rules'
import { membershipAgreementText } from '@/constants/membershipAgreement'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface IRegistrationParamsParams {
  displayName: string
  iconFilepath: string
  emailAddress: string
  password: string
  firstName: string
  familyName: string
  firstNameKana: string
  familyNameKana: string
  birthday: Date
  hireDate: Date
  gender: Gender
}

@Component
export default class UserRegistrationForm extends Vue {
  public $refs!: {
    form: VForm,
  }

  @Prop({ required: true }) public registration!: (params: IRegistrationParamsParams) => Promise<void>

  public valid = true
  public isSending = false
  public schoolDialog = false
  public medicalSubjectDialog = false
  public firstClinicalTrainingDialog = false
  public membershipAgreementDialog = false
  public privacyProtectionDialog = false
  public mailMagazineDialog = false

  public email = ''
  public password = ''
  public displayName = ''
  public firstName = ''
  public familyName = ''
  public firstNameKana = ''
  public familyNameKana = ''
  public birthYear = ''
  public birthMonth = ''
  public birthDay = ''
  public hireYear = ''
  public hireMonth = ''
  public hireDay = ''
  public gender: Gender = '男'
  public school = ''
  public medicalSubject = ''
  public firstClinicalTraining = ''

  public isAgreeMembershipAgreement = false
  public isAggreePrivacyProtection = false
  public isSubscribeMailMagazine = false

  get years() { return years }
  get months() { return months }
  get days() { return days }
  get genderList() { return genderList }
  get prefectures() { return prefectures }
  get membershipAgreementText() { return membershipAgreementText }

  get emailRules() { return rules.emailRules }
  get passwordRules() { return rules.passwordRules }
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
  get genderRules() { return rules.genderRules }
  get prefectureRules() { return rules.prefectureRules }
  get displayNameRules() { return rules.displayNameRules }
  get birthday() { return new Date(`${this.birthYear}/${this.birthMonth}/${this.birthDay}`) }
  get hireDate() { return new Date(`${this.hireYear}/${this.hireMonth}/${this.hireDay}`) }

  public closeSchoolDialog() { this.schoolDialog = false }
  public closefirstClinicalTrainingDialog() { this.firstClinicalTrainingDialog = false }
  public closeMedicalSubjectDialog() { this.medicalSubjectDialog = false }

  public aggreeMembershipAgreement() {
    this.isAgreeMembershipAgreement = true
    this.membershipAgreementDialog = false
  }

  public aggreePrivacyProtection() {
    this.isAggreePrivacyProtection = true
    this.privacyProtectionDialog = false
  }

  public subscribeMailMagazine() {
    this.isSubscribeMailMagazine = true
    this.mailMagazineDialog = false
  }

  public submit() {
    if (this.$refs.form.validate()) {
      this.isSending = true
      this.registration({
        displayName: this.displayName,
        iconFilepath: defaultUserIconUrl,
        emailAddress: this.email,
        password: this.password,
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
}
</script>

<style module>
.group {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
