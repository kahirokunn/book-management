import {genderList} from './gender'
import {prefectures} from '../prefecture'


export const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /^\S+@\S+\.\S+$/.test(v) || 'E-mail must be valid',
]

export const passwordRules = [
  (v: string) => /.{6,}/.test(v) || 'Password should be at least 6 characters',
]

export const genderRules = [
  (v: string) => genderList.includes(v) || 'Gender is invalid',
]

export const prefectureRules = [
  (v: string) => prefectures.includes(v) || 'Prefecture is invalid',
]

export const birthYearRules = [
  (v: string) => !!v || 'Birth year is required',
  (v: string) => /^(19|20)\d{2}$/.test(v) || 'Birth year is invalid',
]

export const birthMonthRules = [
  (v: string) => !!v || 'Birth month is required',
  (v: string) => /^(1[0-2]|[1-9])$/.test(v) || 'Birth month is invalid',
]

export const birthDayRules = [
  (v: string) => !!v || 'Birth day is required',
  (v: string) => /^([1-9]|[1-2][0-9]|3[0-1])$/.test(v) || 'Birth day is invalid',
]

export const hireYearRules = [
  (v: string) => !!v || 'Hire year is required',
  (v: string) => /^(19|20)\d{2}$/.test(v) || 'Hire year is invalid',
]

export const hireMonthRules = [
  (v: string) => !!v || 'Hire month is required',
  (v: string) => /^(1[0-2]|[1-9])$/.test(v) || 'Hire month is invalid',
]

export const hireDayRules = [
  (v: string) => !!v || 'Hire day is required',
  (v: string) => /^([1-9]|[1-2][0-9]|3[0-1])$/.test(v) || 'Hire day is invalid',
]

export const firstNameKanaRules = [
  (v: string) => !!v || 'First name kana is required',
  (v: string) => /^([ア-ン]|ー)+$/.test(v) || 'Included not kana characters',
]

export const familyNameKanaRules = [
  (v: string) => !!v || 'Family name kana is required',
  (v: string) => /^([ア-ン]|ー)+$/.test(v) || 'Included not kana characters',
]

// 記号なし正規表現
const noSymbolRule = /^[^!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]+$/
export const firstNameRules = [
  (v: string) => !!v || 'First name is required',
  (v: string) => noSymbolRule.test(v) || 'Symbol is included in first name',
]

export const familyNameRules = [
  (v: string) => !!v || 'Family name is required',
  (v: string) => noSymbolRule.test(v) || 'Symbol is included in family name',
]

export const displayNameRules = [
  (v: string) => !!v || 'Display name is required',
  (v: string) => /^[a-zA-Z0-9_-]+$/.test(v) || 'Display name is invalid',
]

export const urlRules = [
  (v: string) => !v || /^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/.test(v) || 'Url is invalid',
]

export const postalCodeRules = [
  (v: string) => !v || /^\d{3}[-]\d{4}$|^\d{3}[-]\d{2}$|^\d{3}$|^\d{5}$|^\d{7}$/.test(v) || 'Postal code is invalid',
]
