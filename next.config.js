/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["reaflow"]);

const nextConfig = {
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  experimental: {
    // For reaflow to work
    esmExternals: "loose"
  }
};

module.exports = withTM(nextConfig);
