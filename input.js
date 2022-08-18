let connection;

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

  const handleUserInput = function (key) {
        if (key === '\u0003') {
          process.exit();
        }
        if (key === "w") {
            conn.write("Move: up")
        }
        if (key === "a") {
            conn.write("Move: left")
            conn.write("")
        }
        if (key === "s") {
            conn.write("Move: down")
        }
        if (key === "d") {
            conn.write("Move: right")
        }
        if (key === "q") {
            conn.write("Say: I'm hungry")
        }
        if (key === "e") {
            conn.write("Say: Hungry hungry snake~")
        }
  };

module.exports = {setupInput};