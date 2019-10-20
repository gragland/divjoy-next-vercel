const withSass = require('@zeit/next-sass');

let nextConfig = withSass();

// You can pass nextConfig to another plugin, for example:
//nextConfig = withMdx(nextConfig)

module.exports = nextConfig;