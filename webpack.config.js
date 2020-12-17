// Dependencias.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Exportación de configuraciones.
module.exports = {
  // Archivo principal de ejecución.
  entry: './src/index.js',

  // Configuración archivos de salida.
  output: {
    // Directorio para guardar la distribución (version publica para usuarios).
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Extensiones de archivos.
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    // Reglas.
    rules: [
      // Reglas para archivos JS y JSX.
      {
        // Expresión regular para determinar archivos JS y JSX.
        test: /\.(js|jsx)$/,

        // Excluir la carpeta de dependencias.
        exclude: /node_modules/,

        // Loaders.
        use: {
          loader: 'babel-loader',
        },
      },

      // Reglas para archivos HTML.
      {
        // Expresión regular para determinar archivos HTML.
        test: /\.html$/,

        // Loaders.
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },

      // Reglas para archivos CSS.
      {
        // Expresión regular para determinar archivos CSS.
        test: /\.(s*)css$/,

        // Loaders
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  // Plugins necesarios.
  plugins: [
    new HtmlWebpackPlugin({
      // Template ubicación.
      template: './public/index.html',

      // Nombre del archivo.
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      // Archivo resultante.
      filename: 'assets/[name].css',
    }),
  ],
};
