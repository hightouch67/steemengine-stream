const symbol = 'CUSTOM_SYMBOL'

const filter = function(tx) {
    const action = tx.action;
    const sender = tx.sender;
    let payload = {}
    let logs = {}
    try {
      payload = JSON.parse(tx.payload);
      logs = JSON.parse(tx.logs);
    } catch (error) {
      console.log(error)
    }
    if(payload && payload.symbol === symbol && logs && !logs.errors)
    {
      console.log(sender,tx)
      switch (action) {
        case 'transfer': {
          // DO SOME STUFF
          break;
        }
        case 'issue': {
          // DO SOME STUFF
          break;
        }
        case 'stake':{
          // DO SOME STUFF
          break;
        }
        case 'delegate':{
          // DO SOME STUFF
          break;
        }
        case 'buy':{
          // DO SOME STUFF
          break;
        }
        case 'sell':{
          // DO SOME STUFF
          break;
        }
        case 'removeWithdrawal':{
          // DO SOME STUFF
          break;
        }
        case 'cancel':{
          // DO SOME STUFF
          break;
        }
        default: {
          break;
        }
      }
    }
    else if (payload && payload.symbol === symbol && logs && logs.errors){
      console.log(logs.errors)
    }
};

module.exports = {
  filter,
};
