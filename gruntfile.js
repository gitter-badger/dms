var srcFiles = [
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
    "src/elements/enemy.js",
    "src/elements/bullet.js",
    "src/elements/player.js",
    "src/elements/shot.js",
    "src/elements/explosion.js",
    "src/elements/playerexplosion.js",
    "src/elements/staritem.js",
    "src/scenes/title.js",
    "src/scenes/game.js",
    "src/main.js",
];

module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

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

        watch: {
            precure: {
                tasks: ["concat", "uglify"],
                files: srcFiles
            }
        },
    });

    grunt.registerTask("default", ["concat", "uglify"]);
};