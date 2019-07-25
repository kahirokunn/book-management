import Vuetify from 'vuetify'

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#42b883',
        secondary: '#cc0000',
        accent: '#BA68C8',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#2196f3',
        success: '#4caf50',
      },
      light: {
        primary: '#42b883',
        secondary: '#cc0000',
        accent: '#BA68C8',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#2196f3',
        success: '#4caf50',
      },
    },
  },
})
