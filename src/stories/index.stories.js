/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import '@/store/resolveTestConfiguration'
import MyButton from '../components/MyButton.vue'
import LoginForm from '@/components/containers/loginForm/index.vue'
import UserRegistrationForm from '@/components/containers/userRegistrationForm.vue'
import UserLoginPage from '@/pages/user/login.vue'
import UserRegistrationPage from '@/pages/user/registration.vue'

storiesOf('Containers', module)
  .add('LoginForm', () => ({
    components: { LoginForm },
    template: '<v-app><LoginForm/></v-app>',
  }))
  .add('UserRegistrationForm', () => ({
    components: { UserRegistrationForm },
    template: '<v-app><UserRegistrationForm/></v-app>',
  }))

storiesOf('Page', module)
  .add('UserLoginPage', () => ({
    components: { UserLoginPage },
    template: '<v-app><UserLoginPage/></v-app>',
  }))
  .add('UserRegistrationPage', () => ({
    components: { UserRegistrationPage },
    template: '<v-app><UserRegistrationPage/></v-app>',
  }))
