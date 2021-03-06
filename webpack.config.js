const path = require('path')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env)=>{
    const isProduction = env === 'production';
    //const CSSExtract = new ExtractTextPlugin('styles.css');
    console.log('env',env)
    return {
        mode:env,
        entry:["babel-polyfill","./src/app.js"],
        output:{
            path: path.join(__dirname,"public","dist"),
            filename:'bundle.js'
        },
        module:{
            rules:[
                {
                    loader:'babel-loader',
                    test:/\.js$/,
                    exclude:/node_modules/,
                }, {
                    test: /\.s?css$/,
                    use: [
                        {loader:MiniCssExtractPlugin.loader},
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                }]

        },
        plugins:[
            new MiniCssExtractPlugin()
            //new ExtractTextPlugin('styles.css')
        ],
        devtool: isProduction? 'source-map' : 'inline-source-map',
        devServer:{
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath:'/dist/'

        }
    }
}

