﻿module.exports = function () {

    var output = "wwwroot/";
    var packages = "node_modules/";
    var home = "Views/Home/";

    var config = {
        output: output,

        app: {
            output: output + "app/",
            typescript: "app/**/*.ts",
            templates: "app/**/*.component.html",
            styles: "app/**/*.component.scss",
            tests: output + "app/**/*.spec.js"
        },

        styles: {
            output: output + "styles/",
            sass: "styles/**/*.scss",
            imports: "./styles/"
        },

        libs: {
            output: output + "libs/",
            angular: packages + "@angular/**/bundles/*.umd.js",
            rxjs: [
                packages + "rxjs/**/*{.js,.js.map}",
                "!" + packages + "rxjs/bundles/*"
            ],
            src: [
                packages + "core-js/client/shim.min.js",
                packages + "zone.js/dist/zone.js",
                packages + "reflect-metadata/Reflect.js",
                packages + "systemjs/dist/system.src.js",
                packages + "jquery/dist/jquery.js",
                packages + "bootstrap/dist/js/bootstrap.js",

                packages + "bootstrap/dist/css/bootstrap.css",
                packages + "font-awesome/css/font-awesome.css"
            ]

        },

        fonts: {
            output: output + "fonts/",
            src: packages + "font-awesome/fonts/*"
        },

        home: home,
        index: home + "Index.cshtml",

        all: {
            js: "**/*.js",
            jsMaps: "**/*.js.map",
            css: "**/*.css",
            html: "**/*.html"
        },

        typings: "typings/index.d.ts",
        typingsConfig: "typings.json",
        coverage: "coverage/",

        config: [
            "./package.json",
            "./project.json"
        ],

        port: 51881
    };

    return config;
};