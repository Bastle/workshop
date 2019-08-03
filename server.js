/**
 * Created by cyb on 2019/3/12.
 */


const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.dev.js');

console.log(1234567890);

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', ()=>{
  console.log('dev server listening on port 5000');
})


// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))
//
// app.listen(3000, function(){
//   console.log('Example app listening in port 3000!\n')
// })