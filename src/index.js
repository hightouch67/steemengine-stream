const Promise = require('bluebird');
const bcOperation = require('../helpers/filteroperation');

/** Work to do before streaming the sidechain */
const init = () =>
  new Promise(resolve => {
    console.log('[init] Nothing to init');
    resolve();
  });

/** Work to do at each block */
const work = (block, blockNum) =>
  new Promise(resolve => {
    console.log('[work] Work at block', blockNum);

    /** Work to do for each tx */
    if (block.transactions && block.transactions.length > 0) {
      block.transactions.forEach(tx => {
        bcOperation.filter(tx);
      });
    }
    
    console.log('[work] Work done');
    resolve();
  });

module.exports = {
  init,
  work,
};
