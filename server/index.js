const express = require("express");
const compress = require("compression");

const { waitForWebpack, handleErrors } = require("../utils/onBuild");
const render = require("./render");

const app = express();
const PORT = 3000;

app.use(compress());
app.use(express.static("dist"));
app.use(express.static("public"));

// Main Route
app.get(
  "/*",
  handleErrors(async function (req, res) {
    await waitForWebpack();
    render(req.url, res);
  })
);

// Listening on
app
  .listen(PORT, () => {
    console.log(`Listening at ${PORT}...`);
  })
  .on("error", function (error) {
    if (error.syscall !== "listen") {
      throw error;
    }
    const isPipe = (portOrPipe) => Number.isNaN(portOrPipe);
    const bind = isPipe(PORT) ? "Pipe " + PORT : "Port " + PORT;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
      default:
        throw error;
    }
  });
