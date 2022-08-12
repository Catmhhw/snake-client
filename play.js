//const net = require("net");
const connect = require("./client");

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

  const handleUserInput = function () {
    setTimeout(() => {
      //\u0003 sets up ctrl c to exit?
      process.stdin.on('data', (key) =>{
        if (key === '\u0003') {
          process.exit();
        }
      })
    })
  };

module.exports = {setupInput, handleUserInput};

console.log("Connecting ...");
connect();