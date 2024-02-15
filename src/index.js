import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = (api) => {
  const { theme, matchUtilities } = api

  const dynamicUtils = {
    'animate-delay': { css: 'animation-delay', values: theme('animationDelay') },
    'animate-duration': { css: 'animation-duration', values: theme('animationDuration') }
  }

  Object.entries(dynamicUtils).forEach(([key, { css, values }]) => {
    matchUtilities(
      {
        [key]: value => ({ [css]: value })
      },
      { values }
    )
  })

  // matchUtilities({
  //   'animate-delay': value => ({
  //     'animation-delay': value
  //   })
  // }, {
  //   values: theme('animationDelay')
  // })
}

/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)
