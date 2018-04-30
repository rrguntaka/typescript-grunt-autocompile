module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.initConfig({
        ts: {
            default: {
                tsconfig: './tsconfig.json'
            }
        },
        clean: {
            folder: "dist/"
        },
        watch: {
            files: ['typescript/*.ts'],
            tasks: ['ts'],
        },
    });


    grunt.registerTask('default', ['ts']);
}