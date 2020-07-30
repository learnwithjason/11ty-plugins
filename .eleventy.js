const sizePlugin = require('./plugin');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/js');

  // add our plugin
  eleventyConfig.addPlugin(sizePlugin, { headerSelectors: 'h1, h2' });

  return {
    dir: {
      input: 'src',
    },
  };
};
