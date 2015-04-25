var srcFiles = [
    "libs/tmlib.js",
    "libs/bulletml.js",
    "src/application.js",
    "src/layeredcanvasrenderer.js",
    "src/canvaslayer.js",
    "src/constant.js",
    "src/danmaku.js",
    "src/danmaku/small.js",
    "src/danmaku/middle.js",
    "src/danmaku/large.js",
    "src/mt.js",
    "src/elements/background.js",
    "src/elements/buttons.js",
    "src/elements/enemy.js",
    "src/elements/bullet.js",
    "src/elements/player.js",
    "src/elements/shot.js",
    "src/elements/explosion.js",
    "src/elements/playerexplosion.js",
    "src/elements/staritem.js",
    "src/scenes/title.js",
    "src/scenes/game.js",
    "src/scenes/result.js",
    "src/main.js",
];

module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            danmakusan: ["build", "cordova/www"],
        },

        concat: {
            danmakusan: {
                src: srcFiles,
                dest: "build/danmakusan.js"
            },
        },

        uglify: {
            danmakusan: {
                files: {
                    "build/danmakusan.min.js": ["build/danmakusan.js"]
                }
            },
        },

        copy: {
            danmakusan: {
                expand: true,
                src: ["index.html", "build/danmakusan.min.js", "assets/**"],
                dest: "cordova/www/",
            },
        },

        watch: {
            danmakusan: {
                tasks: ["concat", "uglify"],
                files: srcFiles
            }
        },
    });

    grunt.registerTask("default", ["concat", "uglify"]);
    grunt.registerTask("cordova", ["clean", "concat", "uglify", "copy"]);
};
