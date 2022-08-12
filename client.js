// establishes a connection with the game server
const net = require("net");

const connect = function () {
    const conn = net.createConnection({
      host: "172.20.39.172",
      port: 50541,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    conn.on("data", (data) => {
      console.log("Server message:", data);
    });

    
    conn.on("connect", () => {
        console.log("Successfully connected to the game server");
        conn.write("Name: CAT");
        setInterval(() => {
        // conn.write("Move: up")
        // conn.write("Move: right")
        // conn.write("Move: down")
        }, 1000)
    })

    
    return conn;
  };

  module.exports = connect;