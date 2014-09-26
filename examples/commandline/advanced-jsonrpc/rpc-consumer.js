'use strict';

/**
 * Usage Examples:
 *
 * node rpc-consumer.js
 * or
 * RABBITMQ_URL='user:password@192.168.33.10/vhost' node rpc-consumer.js
 *
 */

var log = require('../advanced/log'),
  processRequest = require('./processRequest');

var consumerOptions = {
  url: process.env.RABBITMQ_URL || 'localhost',
  logInfo: function(msg) {
    log.info(msg);
  },
  logError: function(msg) {
    log.error(msg);
  },
  processMessage: processRequest.jsonRpc
};

var consumer = require('../../../lib/rpc-consumer-factory').create(consumerOptions);

consumer.run();
