import sass from 'rollup-plugin-sass';
import {nodeResolve } from '@rollup/plugin-node-resolve'
export  default {
    input: 'js/index.js',
    output: {
        file : "dist/app.js",
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        sass({output:'dist/app.css'})
    ],
}