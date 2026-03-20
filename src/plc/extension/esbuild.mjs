// @ts-nocheck
import { execSync } from 'child_process';
import * as esbuild from 'esbuild';
import * as fs from 'fs';
import path from 'path';
import { minify as terserMinify } from 'terser';
import { fileURLToPath } from 'url';

const watch = process.argv.includes('--watch');
const minify = process.argv.includes('--minify');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const success = watch ? 'Watch build succeeded' : 'Build succeeded';

execSync('cd ../langium-server && tsc --noEmit && node esbuild.mjs ', { stdio: 'inherit' });

function getTime() {
    const date = new Date();
    return `[${`${padZeroes(date.getHours())}:${padZeroes(date.getMinutes())}:${padZeroes(date.getSeconds())}`}] `;
}

function padZeroes(i) {
    return i.toString().padStart(2, '0');
}

// 定义复制文件的函数
function copyFile(source, target) {
    fs.copyFileSync(source, target);
    console.log(`Copied ${source} to ${target}`);
}

const plugins = [
    {
        name: 'watch-plugin',
        setup(build) {
            build.onEnd(result => {
                if (result.errors.length === 0) {
                    console.log(getTime() + success);
                }
            });
        }
    }
];

// 使用 esbuild 构建入口文件
const ctx = esbuild
    .build({
        entryPoints: ['src/st-extension.ts'],
        outdir: 'dist',
        outExtension: {
            '.js': '.cjs'
        },
        bundle: true,
        target: 'ES2019',
        format: 'cjs',
        loader: { '.ts': 'ts' },
        external: ['vscode'],
        nodePaths: ['node_modules'],
        platform: 'node',
        sourcemap: false,
        minify: true
    })
    .then(() => {
        // 构建完成后复制静态文件
        copyFile(path.resolve(__dirname, '..', 'langium-server', 'out', 'main.cjs'), path.resolve(__dirname, 'dist', 'main.cjs'));
        copyFile(path.resolve(__dirname, '..', 'langium-server', 'out', 'data.json'), path.resolve(__dirname, 'dist', 'data.json'));
        // copyFile(path.resolve(__dirname, 'src', 'variable.json'), path.resolve(__dirname, 'dist', 'variable.json'));
        let extensionPath = path.resolve(__dirname, 'dist', 'st-extension.cjs');
        let mainPath = path.resolve(__dirname, 'dist', 'main.cjs');
        const extensionCode = fs.readFileSync(extensionPath, 'utf8');
        const mainCode = fs.readFileSync(mainPath, 'utf8');
        terserMinify(extensionCode).then(result => {
            const minifiedCode = result.code; // 将 result.code 赋值给一个新变量
            if (minifiedCode) {
                console.log('minify extension.cjs');
                fs.writeFileSync(extensionPath, minifiedCode, 'utf8'); // 使用新变量进行写入操作
            }
        });
        terserMinify(mainCode).then(result => {
            const minifiedCode = result.code; // 将 result.code 赋值给一个新变量
            if (minifiedCode) {
                console.log('minify main.cjs');
                fs.writeFileSync(mainPath, minifiedCode, 'utf8'); // 使用新变量进行写入操作
            }
        });
    })
    .catch(error => console.log(error));

// 2. 单独保留 globals
// esbuild.build({
//     entryPoints: ['src/global.ts'],
//     bundle: false, // 不打包依赖
//     platform: 'node',
//     outfile: 'dist/global.js',
//     format: 'cjs'
// });
// if (watch) {
//     await ctx.watch();
// } else {
//     await ctx.rebuild();
//     ctx.dispose();
// }
