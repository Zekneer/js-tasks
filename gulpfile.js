const { watch } = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

module.exports.serve = (done) => {
  browserSync.init(
    {
      server: {
        baseDir: './static/',
      },
      injectChanges: false,
    },
    done,
  );

  watch('./static/**/*').on('change', reload);
};
