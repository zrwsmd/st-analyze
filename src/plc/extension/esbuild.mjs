// @ts-nocheck
import { execSync } from 'child_process';
import * as esbuild from 'esbuild';
import * as fs from 'fs';
import path from 'path';
import { minify as terserMinify } from 'terser';
import { fileURLToPath } from 'url';

const watch = process.argv.includes('--watch');
const debug = process.argv.includes('--debug') || process.env.ST_DEBUG === 'true';
const minify = process.argv.includes('--minify') || !debug;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const success = watch ? 'Watch build succeeded' : 'Build succeeded';

const forwardedArgs = [debug ? '--debug' : '', watch ? '--watch' : '', minify && !debug ? '--minify' : '']
    .filter(Boolean)
    .join(' ');
execSync(`cd ../langium-server && tsc --noEmit && node esbuild.mjs ${forwardedArgs}`, { stdio: 'inherit' });

function getTime() {
    const date = new Date();
    return `[${`${padZeroes(date.getHours())}:${padZeroes(date.getMinutes())}:${padZeroes(date.getSeconds())}`}] `;
}

function padZeroes(i) {
    return i.toString().padStart(2, '0');
}

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

esbuild
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
        sourcemap: debug ? 'linked' : false,
        sourcesContent: debug,
        keepNames: debug,
        minify,
        plugins
    })
    .then(() => {
        copyFile(path.resolve(__dirname, '..', 'langium-server', 'out', 'main.cjs'), path.resolve(__dirname, 'dist', 'main.cjs'));
        copyFile(path.resolve(__dirname, '..', 'langium-server', 'out', 'data.json'), path.resolve(__dirname, 'dist', 'data.json'));

        const serverMapPath = path.resolve(__dirname, '..', 'langium-server', 'out', 'main.cjs.map');
        if (debug && fs.existsSync(serverMapPath)) {
            copyFile(serverMapPath, path.resolve(__dirname, 'dist', 'main.cjs.map'));
        }

        if (minify) {
            const extensionPath = path.resolve(__dirname, 'dist', 'st-extension.cjs');
            const mainPath = path.resolve(__dirname, 'dist', 'main.cjs');
            const extensionCode = fs.readFileSync(extensionPath, 'utf8');
            const mainCode = fs.readFileSync(mainPath, 'utf8');

            terserMinify(extensionCode).then(result => {
                const minifiedCode = result.code;
                if (minifiedCode) {
                    console.log('minify extension.cjs');
                    fs.writeFileSync(extensionPath, minifiedCode, 'utf8');
                }
            });

            terserMinify(mainCode).then(result => {
                const minifiedCode = result.code;
                if (minifiedCode) {
                    console.log('minify main.cjs');
                    fs.writeFileSync(mainPath, minifiedCode, 'utf8');
                }
            });
        }
    })
    .catch(error => console.log(error));
