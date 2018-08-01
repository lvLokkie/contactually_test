/**
 * @author Ryazanov I.A
 * Post css modeul conf
 */

module.exports = () => ({
  plugins: {
    'postcss-sorting': {
      order: [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules',
      ],
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottom',
    },
  },
});
