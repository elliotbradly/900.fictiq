require('dotenv').config();
const path = require('path');

var exec = require('child_process').exec;

exec('tsc -b 900.fictiq', async (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
  }

  init();

})

const init = async () => {

  FICTIQ = require(path.resolve('./dist/900.fictiq/hunt'));
  FICTIQ_ACTION = require(path.resolve('./dist/900.fictiq/00.fictiq.unit/fictiq.action'));
  await FICTIQ.hunt(FICTIQ_ACTION.INIT_FICTIQ, { val: 1, dat: null, src: null });
  
}
  

