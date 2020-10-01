module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs',
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        indent: ['error', 4],
        'vue/html-indent': ['warn', 4]
    }
}
