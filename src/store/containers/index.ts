import loginForm from './loginForm'

export type ContainersState = {
  loginForm: ReturnType<typeof loginForm.state>,
}

export default {
  modules: {
    loginForm,
  },
}
