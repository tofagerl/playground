var merge = require('roc').merge;
module.exports = {
  settings: {
    runtime: {
      applicationName: 'Playground',
      port: 3000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/index.js',
    },
  },
  action: () => (rocObject) => {
    if (rocObject.hook === 'build-webpack') {
      const webpack = {
        externals: {
          'cheerio': 'window',
          'react-dom': 'window',
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true
        },
      };
      return () => () => {
        return merge(rocObject.previousValue, { buildConfig: webpack });
      };
    }
  }
};
