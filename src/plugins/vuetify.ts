/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {createVuetify, ThemeDefinition} from 'vuetify'

const theme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#1A1E23',
    surface: '#292F36',
    grey: '#43454D',
    white: '#FFFFFF',
    primary: '#12F7D6',
    secondary: '#98FAEC',
    success: '#00E68F',
    warning: '#F7C137',
    error: '#FF4949',
    info: '#2196F3',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'theme',
    themes: {
      theme,
    },
  },
})
