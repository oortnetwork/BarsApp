/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */

module.exports = {
  // Project options.
  projectURL: "localhost/BarsApp", // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:3000 depending upon your local WordPress setup.
  productURL: "./", // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
  browserAutoOpen: true,
  injectChanges: true,

  // Style options.
  styleSRC: "./src/scss/app.scss", // Path to main .scss file.
  styleDestination: "./assets/css/", // Path to place the compiled CSS file. Default set to root folder.
  outputStyle: "compact", // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
  errLogToConsole: true,
  precision: 10,

  // JS App options.
  jsAppSRC: "./src/app.js", // Path to JS custom scripts folder.
  jsAppDestination: "./assets/js/", // Path to place the compiled JS custom scripts file.
  jsAppFile: "app", // Compiled JS custom file name. Default set to custom i.e. custom.js.

  // Watch files paths.
  watchStyles: "./src/**/*.scss", // Path to all *.scss files.
  watchJS: "./src/**/*.js", // Path to all JS files.
  watchHTML: "./**/*.html", // Path to all PHP files.

  // Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
  // The following list is set as per WordPress requirements. Though, Feel free to change.
  BROWSERS_LIST: [
    "last 2 version",
    "> 1%",
    "ie >= 11",
    "last 1 Android versions",
    "last 1 ChromeAndroid versions",
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 2 iOS versions",
    "last 2 Edge versions",
    "last 2 Opera versions",
  ],
};
