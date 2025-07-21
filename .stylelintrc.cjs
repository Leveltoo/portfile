module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
    'stylelint-config-recess-order'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ]
  }
};