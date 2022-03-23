const next = require("next");
const express = require("express");
const https = require("https");
const cors = require("cors");

const HTTPS_PORT = 3443;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

async function getServerOptions() {
  const devCerts = require("office-addin-dev-certs");
  return await devCerts.getHttpsServerOptions();
}

(async () => {
  try {
    server.use(cors());
    await app.prepare();
    const options = await getServerOptions();

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    https
      .createServer({ key: options.key, cert: options.cert }, server)
      .listen(HTTPS_PORT);
  } catch (e) {
    process.exit(1);
  }
})();
