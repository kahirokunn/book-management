/* eslint-disable import/no-extraneous-dependencies */
import {
  storiesOf
} from '@storybook/vue'
import {
  action
} from '@storybook/addon-actions'
import MyButton from '../components/MyButton.vue'

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
