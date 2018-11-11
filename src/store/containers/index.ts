import loginForm from './loginForm'
import userRegistrationForm from './userRegistrationForm'

export type ContainersState = {
  loginForm: ReturnType<typeof loginForm.state>,
  userRegistrationForm: ReturnType<typeof userRegistrationForm.state>,
}

export default {
  modules: {
    loginForm,
    userRegistrationForm,
  },
}
