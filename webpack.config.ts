import path from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
  mode: (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        exclude: [/node_modules/, /dist/],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  externals: {
    react: 'commonjs react',
  },
  output: {
    filename: 'index.ts',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [],
}

export default config
