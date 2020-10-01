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
            '@nuxtjs/eslint-config-typescript'
        },
        hotMiddleware: {
            client: {
                overlay: false
            }
        }
    }
}
