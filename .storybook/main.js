module.exports = {
  "stories": [
    "../src/app/components/*.stories.mdx",
    "../src/app/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-angular-router"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}