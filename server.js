// server.js
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create(); // Create a JSON Server instance

const dbFile = path.join(__dirname, "./fixtures/db.json"); // Construct the path to the db.json file
const router = jsonServer.router(dbFile); // Create a router using the db.json file
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000; // set the port you want, here 3000 as json-server

server.use(middlewares);
server.use("/api/", router);
server.use(jsonServer.bodyParser);

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`MOCK-API is running on: http://localhost:${port}/api/pizzas`);
});
