const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "https://latesteapi.herokuapp.com",
    secure: true,
    pathRewrite: { "^/api": "" },
  },
];
module.exports = PROXY_CONFIG;
