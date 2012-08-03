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
    var result = exec('lessc less/app.less', {silent: true});
    if (result.code) {
      grunt.log.error(result.output);
    } else {
      result.output.to('public/css/app.css');  
    }
    
  });
};