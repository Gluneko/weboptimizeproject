/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 800 ,
            suffix: 'large',
            quality: 50

          },
          {
            width: 600 ,
            suffix: 'medium',
            quality: 50
          },
          {
            width: 400 ,
            suffix: 'small',
            quality: 50

          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'img/',
          dest: 'images_fix/'
        }, {
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'views/images',
          dest: 'views/images_fix/'
      }]
    }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images_fix','views/images_fix'],
      },
    },


    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images_fix','views/images_fix']
        },
      }
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'img/fixed/*.{gif,jpg,png}',
          dest: 'images_fix/'
        },{
          expand: true,
          src: 'views/images/fixed/*.{gif,jpg,png}',
          dest: 'images_fix/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['mkdir', 'copy', 'responsive_images']);

};
