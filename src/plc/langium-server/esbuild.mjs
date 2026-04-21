//@ts-check
import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const watch = process.argv.includes('--watch');
const debug = process.argv.includes('--debug') || process.env.ST_DEBUG === 'true';
const minify = process.argv.includes('--minify') || !debug;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const success = watch ? 'Watch build succeeded' : 'Build succeeded';

function getTime() {
    const date = new Date();
    return `[${`${padZeroes(date.getHours())}:${padZeroes(date.getMinutes())}:${padZeroes(date.getSeconds())}`}] `;
}

function padZeroes(i) {
    return i.toString().padStart(2, '0');
}

function removeFileIfExists(filePath) {
    if (fs.existsSync(filePath)) {
        fs.rmSync(filePath, { force: true });
    }
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

function saveCacheData() {
    // 读取 data.json 文件内容
    const data = fs.readFileSync('data.json', 'utf8');

    // 将 data.json 文件内容写入 out 文件夹中的新文件
    // @ts-ignore
    fs.writeFileSync(path.join('out', 'data.json'), data, 'utf8', err => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File copied successfully');
        }
    });
    // // 将 data.json 内容写入 out 文件夹
    // fs.writeFileSync(path.join('out', 'src', 'util', 'data.json'), data, 'utf8');
}

// 使用 esbuild 构建入口文件
const ctx = await esbuild
    .build({
        entryPoints: ['./main.ts'],
        outdir: 'out',
        outExtension: {
            '.js': '.cjs'
        },
        bundle: true,
        target: 'ES2019',
        format: 'cjs',
        loader: { '.ts': 'ts' },
        external: ['vscode'],
        platform: 'node',
        sourcemap: debug ? 'linked' : false,
        sourcesContent: debug,
        keepNames: debug,
        minify,
        plugins
    })
    .then(() => {
        saveCacheData();
        if (!debug) {
            removeFileIfExists(path.join('out', 'main.cjs.map'));
        }
    })
    .catch(error => console.log(error));

// function getAllTsFiles(dir, fileList = []) {
//     const files = fs.readdirSync(dir);

//     files.forEach(file => {
//         const filePath = path.join(dir, file);
//         const stat = fs.statSync(filePath);

//         if (stat.isDirectory()) {
//             getAllTsFiles(filePath, fileList); // 递归处理子文件夹
//         } else if (filePath.endsWith('.ts')) {
//             fileList.push(filePath); // 将 TypeScript 文件路径添加到 fileList 中
//         }
//     });

//     return fileList;
// }

// // 获取当前项目下所有的 TypeScript 文件
// const files = getAllTsFiles('./'); // 查找当前目录下所有的 TypeScript 文件

// 遍历每个 TypeScript 文件并进行编译
// files.forEach(file => {
//     const inputFilePath = path.join('./', file);
//     const outputFilePath = path.join('./out', file.replace('.ts', '.js'));

//     esbuild
//         .build({
//             entryPoints: [inputFilePath],
//             bundle: true,
//             platform: 'node', // 设置构建目标为 Node.js 环境
//             minify: true,
//             sourcemap: true,
//             outfile: outputFilePath
//         })
//         .catch(() => process.exit(1));
// });
