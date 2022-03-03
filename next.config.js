// next.config.js


//const withPlugins = require('next-compose-plugins');
//const optimizedImages = require('next-optimized-images');


const config = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    loader: "custom",
  }
}

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    loader: "custom",
  }
}
  
//module.exports = withPlugins([
  //[optimizedImages, {
    
  //}],

  // your other plugins here
 // config,
//]);

/*
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
}
*/