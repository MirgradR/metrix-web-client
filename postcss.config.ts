import nested from 'postcss-nested'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssPresetEnv from 'postcss-preset-env'

module.exports = {
  plugins: [
    nested,
    autoprefixer,
    cssnano({
      preset: 'default'
    }),
    postcssPresetEnv({
      stage: 3,
      features: {
        'custom-properties': false
      }
    })
  ]
}
