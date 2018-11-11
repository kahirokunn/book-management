/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import '@/store/resolveTestConfiguration'
import MyButton from '../components/MyButton.vue'
import LoginForm from '@/components/containers/loginForm.vue'
import UserRegistrationForm from '@/components/containers/userRegistrationForm.vue'


storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with text2', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button 2</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))

storiesOf('Containers', module)
  .add('LoginForm', () => ({
    components: { LoginForm },
    template: '<LoginForm/>',
  }))
  .add('UserRegistrationForm', () => ({
    components: { UserRegistrationForm },
    template: '<UserRegistrationForm/>',
  }))
