import loginForm from './loginForm'
import navigation from './navigation'
import userRegistrationForm from './userRegistrationForm'

export type ContainersState = {
  loginForm: ReturnType<typeof loginForm.state>,
  navigation: ReturnType<typeof navigation.state>,
  userRegistrationForm: ReturnType<typeof userRegistrationForm.state>,
}

export default {
  modules: {
    loginForm,
    navigation,
    userRegistrationForm,
  },
}
