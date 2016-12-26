var socket = require('socket.io')();
var socket_io_redis = process.env.node_env != 'production' ? '' : require('socket.io-redis');

if (process.env.node_env == 'production') {
  socket.adapter(socket_io_redis({
    host: '',
    port: 6379
  }));
}

module.exports = socket;
