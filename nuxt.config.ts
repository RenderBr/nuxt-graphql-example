// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['nuxt-graphql-server', '@nuxtjs/apollo'],
    graphqlServer:
        {
            url: '/api/graphql',
            schema: './server/**/*.graphql',
        },
    apollo: {
        clients: {
            default: {
                httpEndpoint: "http://localhost:3000/api/graphql"
            }
        }
    }
})