const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
            lessLoaderOptions: {
                lessOptions: {
                modifyVars: { '@primary-color': '#fd79a8' },
                javascriptEnabled: true,
                },
            },
            },
        },
    ]
}