var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	//entry: ['./src/js/entry.js'],
	entry: {
		entry: './src/js/entry'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
		//filename: '[name].js',
		//chunkFilename: "[id].js"
	},
	module: {
        loaders: [
            // Extract css files
            //{
            //    test: /\.css$/,
            //    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            //},
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
				//Creates external css file
                //loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
				//Creates a bundled css
				loader: "style!css!less"
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("testcss.css")
    ]
}
