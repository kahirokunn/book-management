/* eslint-disable import/no-extraneous-dependencies */
import {
  storiesOf
} from '@storybook/vue'
import {
  action
} from '@storybook/addon-actions'
import MyButton from '../components/MyButton.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: {
      MyButton
    },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: {
      action: action('clicked')
    }
  }))
  .add('with text2', () => ({
    components: {
      MyButton
    },
    template: '<my-button @click="action">Hello Button 2</my-button>',
    methods: {
      action: action('clicked')
    }
  }))
  .add('with some emoji', () => ({
    components: {
      MyButton
    },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: {
      action: action('clicked')
    }
  }))

// page一覧をauto loadする
const pageStory = storiesOf('Pages', module)
const req = require.context('../pages', true, /.vue$/)
req.keys().forEach(vueFileName => {
  const tmp = vueFileName.split('/')
  const componentNameBase = tmp[tmp.length - 1]
  const componentName = componentNameBase.slice(0, componentNameBase.length - '.vue'.length)
  pageStory.add(vueFileName, () => ({
    components: {
      [componentName]: req(vueFileName).default
    },
    template: `<${componentName}/>`
  }))
})
