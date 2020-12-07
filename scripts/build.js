'use strict';

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const publicDir = path.resolve('lib/public');
const buildDir = path.resolve('build');
const serverDir = path.resolve('lib');

function buid() {
  console.log(chalk.bold(chalk.blue('> Start build react app')));

  exec('npm run build:react', (err, stdout, stderr) => {
    if (err) {
      console.log(`${chalk.red(chalk.bold('Error'))}: ${err.message}`);
      return;
    }

    if (stderr) {
      console.log(`${chalk.yellow(chalk.bold('stderr'))}: ${stderr}`);
    }

    console.log(chalk.bold(chalk.blue('> Remove build server folder')));

    fs.rmdirSync(serverDir, { recursive: true });

    console.log(chalk.bold(chalk.blue('> Build server typescript')));

    exec('npm run build:server', (err, stdout, stderr) => {
      if (err) {
        console.log(`${chalk.red(chalk.bold('Error'))}: ${err.message}`);
        return;
      }

      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }

      console.log(chalk.bold(chalk.blue('> Checking or move build react folder')));
      if (fs.existsSync(publicDir)) {
        fs.rmdirSync(publicDir, { recursive: true });
      }
      fs.renameSync(buildDir, publicDir);

      console.log(chalk.bold(chalk.green('> Successfully')));
    });
  });
}

buid();
