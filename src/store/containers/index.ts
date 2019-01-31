import changeUserProfileForm from './changeUserProfileForm'
import loginForm from './loginForm'
import navigation from './navigation'
import userRegistrationForm from './userRegistrationForm'

export type ContainersState = {
  changeUserProfileForm: ReturnType<typeof changeUserProfileForm.state>,
  loginForm: ReturnType<typeof loginForm.state>,
  navigation: ReturnType<typeof navigation.state>,
  userRegistrationForm: ReturnType<typeof userRegistrationForm.state>,
}

export default {
  modules: {
    loginForm,
    navigation,
    userRegistrationForm,
    changeUserProfileForm,
  },
}
