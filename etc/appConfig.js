var path = require("path"),
  srcPath = 'test';

var appConfig = {
  appName: 'app.js',
  appPath: srcPath + '/app.js',
  srcPath: srcPath,
  testPath: 'test',
  templatesPath: 'templates',
  distPath: 'dist',
  genPath: 'src-gen',
  globals: {
    $: "jquery",
    jquery: "jQuery",
    "windows.jQuery": "jquery"
  },
  chunks: {
    name: ['polyfills', 'vendor'].reverse()
  },
  entry: {
    app: srcPath + '/app.js'
  },
  mangle: {
    except: ['jQuery', 'angular']
  },
  proxy: {
    '*': 'http://localhost:8080' // REST service
  },
  title: 'App'
};

// export default config
module.exports = appConfig;
