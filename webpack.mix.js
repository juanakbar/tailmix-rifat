const mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

mix.js('src/app.js', 'public')
   .sass('src/app.scss', 'public')
    .options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.config.js') ],
  });
