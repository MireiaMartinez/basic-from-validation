//que archivo  va traducir 
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js'
    },
    module:{
        rules: [
            // regla que traduce codigo moderno para que cualquier navergador pueda entender
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
                
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]

};