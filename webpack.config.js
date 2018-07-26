const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
		  module: {
		    rules: [
		      {
		        test: /\.(js|jsx)$/,
		        exclude: /node_modules/,
		        use: {
		          loader: "babel-loader",
		          options: {
		              presets: [
		                'babel-preset-env',
		                'babel-preset-react',
		              ],
		            },
		        }
		      },
		      {
		          test: /\.html$/,
		          use: [
		            {
		              loader: "html-loader"
		            }
		          ]
		      },
		      {
		    	  test: /\.(gif|png|jpe?g|svg)$/i,
		    	  use: [
		    	    'file-loader',
		    	    {
		    	      loader: 'image-webpack-loader',
		    	      options: {
		    	        bypassOnDebug: true, // webpack@1.x
		    	        disable: true, // webpack@2.x and newer
		    	      },
		    	    },
		    	  ],
		    	}
		    ]
		  },
		  plugins: [
			    new HtmlWebPackPlugin({
			      template: "./public/index.html",
			      filename: "./index.html"
			    })
			  ],
			  
	     resolve: {
				    extensions: ['.html', '.js', '.jsx', 'png']
				  },
				  
		  mode : 'none',
		  
		};