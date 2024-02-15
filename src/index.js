import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = (api) => {
  const { theme, matchUtilities } = api

  matchUtilities({
    'animate-delay': value => ({
      'animation-delay': value
    })
  }, {
    values: theme('animationDelay')
  })

  matchUtilities({
    'animate-duration': value => ({
      'animation-duration': value
    })
  }, {
    values: theme('animationDuration')
  })
}

/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)
