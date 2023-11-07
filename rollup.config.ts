import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import html from '@rollup/plugin-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';

console.log("[ start ] - env: ", process.env.NODE_ENV);

export default defineConfig([{
    input: {
        main: "src/main.ts"
    },
    plugins: [ 
        typescript(),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
        }),
        vue({
            target: 'browser',
            preprocessStyles: true,
            preprocessOptions: {
                scss: {
                    includePaths: ['node_modules']
                }
            }
        }),
        postcss({
            modules: {
                generateScopedName: '[local]___[hash:base64:5]',
            },
            include: /&module=.*\.s?css$/
        }),
        // Process `<style>` blocks except css modules.
        postcss({
            include: /(?<!&module=.*)\.s?css$/
        }),
        nodeResolve({
            browser: true,
            preferBuiltins: false
        }),
        commonjs({
            // include: 'node_modules/**',  // Default: undefined
            extensions: ['.js', '.coffee'],  // Default: [ '.js' ]
            ignoreGlobal: false,  // Default: false
            sourceMap: process.env.NODE_ENV === "development",  // Default: true
            ignore: ['conditional-runtime-dependency']
        }),
        url({
            publicPath: 'dist/',
        }),
        json(),
        html({
            title: "Template",
        })
    ],
    output: [{ 
        dir: "dist",
        format: "iife",
        sourcemap: process.env.NODE_ENV === "development"
    }]
}]);
