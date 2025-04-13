const { exec } = require('child_process');

exec('node ./packages/cli/bin/n8n', (err, stdout, stderr) => {
  if (err) {
    console.error(`n8n failed to start: ${err}`);
    return;
  }
  console.log(stdout);
});
