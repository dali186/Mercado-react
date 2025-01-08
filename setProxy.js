const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/common",
    createProxyMiddleware({
      target: "http://127.0.0.1:8080",
      changeOrigin: true,
    })
  );
};
