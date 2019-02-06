const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

// date filter formatting using Luxon
eleventyConfig.addFilter("parseDate", (it, format = "LLLL dd, yyyy") => {
    return DateTime.fromJSDate(it, { zone: "utc" }).toFormat(format);
  });
  
// minify the html output
  const htmlmin = require("html-minifier");
  
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: false, // we need comments to identify the expcerpt split marker.
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });


}