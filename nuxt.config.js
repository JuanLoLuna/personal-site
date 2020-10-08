export default {
    head: {
        title: 'Juan F. Luna',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        '~/assets/css/main.scss'
    ],
    plugins: [
    ],
    components: true,
    buildModules: [
        '@nuxt/typescript-build'
    ],
    modules: [
        ['nuxt-buefy', {
            defaultIconPack: 'fas',
            defaultIconComponent: 'fa'
        }],
        ['nuxt-fontawesome', {
            component: 'fa',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['fas']
                },
                {
                    set: '@fortawesome/free-brands-svg-icons',
                    icons: ['fab']
                }
            ]
        }]
    ],
    build: {
        /*
        ** You can extend webpack config here
        */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        extend (config, ctx) {
            // Find the rule which contains a assets file extension
            const assetsLoader = config.module.rules.find(rule => rule.test.test('.png'))

            // Overwrite the test regex and add `pdf`
            assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i

            return config
        },
        hotMiddleware: {
            client: {
                overlay: false
            }
        }
    }
}
