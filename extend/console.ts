import chalk from "chalk";

function log(information: any) {
  return chalk.white(information)
}

function warning(information: any) {
  return chalk.yellow(information)
}

function error(information: any) {
  return chalk.red(information)
}

function success(information: any) {
  return chalk.cyan(information)
}

function info(information: any) {
  return chalk.blue(information);
}

function readonly(information: any) {
  return chalk.grey(information)
}


export { log, info, warning, error, success, readonly };