// next.config.js
module.exports = {
  webpack: (config) => {
    config.infrastructureLogging = {
      debug: true, // Webpack 상세 로그 활성화
    };
    return config;
  },
};
