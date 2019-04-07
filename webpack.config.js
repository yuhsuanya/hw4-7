let path = require('path');

   module.exports = {
	entry: './assets/js/script.js',
	output:{
	        path: path.join(__dirname, './dist'),
	        filename: 'bundle.js',
	        publicPath: './dist/'
<<<<<<< HEAD
    },
    module:{
        rules:[{
            test:/\.(js)$/,
            exclude:/(node_modules)/,
            use:{
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
            }
        }]
         }
   }
=======
	}
   }
>>>>>>> 110619044
