module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "vue/multi-word-component-names": ["off"],
    "vue/max-attributes-per-line": ["off"]
  }
};