// next.config.js

//$ npx next build
//$ npx next export -o dist/



const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');




const config = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    loader: "custom",
    disableStaticImages: true,
  }
}

module.exports = withPlugins([
  [optimizedImages, {
    
  }],

  // your other plugins here
 config,
]);





/*
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

  //module.exports = withPlugins([
    //[optimizedImages, {
      
    //}],

    // your other plugins here
  // config,
  //]);


  module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
  }


*/