// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // require the use of === and !==
    'eqeqeq': 1,
    // for 2-space indentation
    'indent': ['error', 2],
    // require let or const instead of var
    'no-var': 2,
    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    // enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    // require or disallow semicolons instead of ASI
    'semi': ["error", 'always'],
    // enforce the consistent use of single quotes
    'quotes': ['error', 'single'],
    // require quotes around object literal property names
    'quote-props': ["error", 'as-needed'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
