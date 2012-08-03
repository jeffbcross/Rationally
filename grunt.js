require('shelljs/global');

module.exports = function(grunt) {
  grunt.initConfig({
      less: {}
    , watch: {
      less: {
          files: ['./less/*.less', './bootstrap/less/*.less']
        , tasks: 'less'
      }
    }
  });


  grunt.registerTask('less', function() {
    exec('lessc less/app.less', {silent: true}).output.to('public/css/app.css');
  });
};