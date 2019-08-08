const SSC = require('sscjs');
module.exports = new SSC(process.env.STEEMENGINE_URL) || 'https://api.steem-engine.com/rpc/';
