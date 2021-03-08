const path = require('path');
const getAbsolutePath = dirPath => path.resolve(__dirname, dirPath);

module.exports = {
  // 번들 모드 설정
  mode: 'development',
  // 엔트리 진입
  entry: {
    main: './src/index.js'
  },

  // 출력 설정
  output: {
    // 경로(path)
    path: getAbsolutePath('public'),
    // 파일 이름(filename)
    filename: 'js/[name].js',
    publicPath: '/',
  },
  // 모듈 (규칙) - 로더 객체
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },

  // 개발 서버 설정
  devServer: {
    contentBase: getAbsolutePath('public'),
    index: 'index.html',
    port: 9000,
    hot: true, // 바뀐 모듈만 리로드
    writeToDisk: true
  }
};