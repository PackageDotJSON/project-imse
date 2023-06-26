const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require('path');
const routes = require("./routes/routes");
const app = express();

app.disable("x-powered-by");

app.enable("trust proxy");

app.use(express.static(__dirname + "/dist/portal"));
app.get("/*", (req, res) => res.sendFile(path.join(__dirname)));

app.use(express.json());
app.use(cors());
app.use(routes);

const port = 3000;
const address = "0.0.0.0";

const server = http.createServer(app);

server.listen(port, address, () => {
  console.log(`listening on port ${port}`);
});
