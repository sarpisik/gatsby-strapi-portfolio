'use strict';

const { exec } = require('child_process'),
  path = require('path'),
  // Static site generator location to rebuild.
  cwd = path.join(__dirname, '..', '..', '..', '..', 'website');

/**
 * `Website` service.
 */

module.exports = {
  build: async () => {
    try {
      (await process.env.NODE_ENV) === 'production' &&
        exec('npm run build', { cwd }, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
    } catch (error) {
      console.error(error);
    }
  }
};
