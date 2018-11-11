/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import MyButton from '../components/MyButton.vue'
import ThrottleDemo from '../components/ThrottleDemo.vue'
import DebounceDemo from '../components/DebounceDemo.vue'

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
  .add('ThrottleDemo', () => ({
    components: { ThrottleDemo },
    template: '<ThrottleDemo/>',
  }))
  .add('DebounceDemo', () => ({
    components: { DebounceDemo },
    template: '<DebounceDemo/>',
  }))
