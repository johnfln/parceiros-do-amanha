import { build, transform } from 'esbuild';
import { minify } from 'html-minifier-terser';
import {
    cp, mkdir, readFile, readdir, rm, stat, writeFile
} from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, 'dist');
const results = [];

function record(name, before, after) {
    results.push({
        arquivo: name,
        originalBytes: before,
        producaoBytes: after,
        reducaoPercentual: Number(
            ((1 - after / before) * 100).toFixed(2)
        )
    });
}

// Recria somente a pasta de produção.
await rm(output, { recursive: true, force: true });

for (const folder of ['html', 'css', 'js']) {
    await mkdir(join(output, folder), { recursive: true });
}

// Agrupa main.js e os módulos importados.
const bundle = await build({
    absWorkingDir: root,
    entryPoints: ['js/main.js'],
    outfile: join(output, 'js/main.js'),
    bundle: true,
    minify: true,
    format: 'esm',
    platform: 'browser',
    target: 'es2020',
    metafile: true,
    legalComments: 'eof'
});

const originalJS = Object.values(bundle.metafile.inputs)
    .reduce((total, file) => total + file.bytes, 0);

const productionJS = await stat(join(output, 'js/main.js'));

record(
    'JavaScript (main.js + módulos)',
    originalJS,
    productionJS.size
);

// Minifica o CSS preservando os nomes usados pela SPA.
for (const name of await readdir(join(root, 'css'))) {
    if (!name.endsWith('.css')) continue;

    const source = await readFile(join(root, 'css', name), 'utf8');
    const compressed = await transform(source, {
        loader: 'css',
        minify: true,
        legalComments: 'eof'
    });

    await writeFile(join(output, 'css', name), compressed.code);

    record(
        `css/${name}`,
        Buffer.byteLength(source),
        Buffer.byteLength(compressed.code)
    );
}

// Minifica o HTML mantendo os caminhos relativos.
const html = await readFile(join(root, 'html/index.html'), 'utf8');

const compressedHTML = await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true
});

await writeFile(join(output, 'html/index.html'), compressedHTML);

record(
    'html/index.html',
    Buffer.byteLength(html),
    Buffer.byteLength(compressedHTML)
);

// Copia as imagens; sua otimização será feita separadamente.
await cp(
    join(root, 'imagens'),
    join(output, 'imagens'),
    { recursive: true }
);

const totalOriginal = results.reduce(
    (total, file) => total + file.originalBytes, 0
);

const totalProduction = results.reduce(
    (total, file) => total + file.producaoBytes, 0
);

record('TOTAL HTML + CSS + JS', totalOriginal, totalProduction);

await writeFile(
    join(root, 'relatorio-build.json'),
    JSON.stringify(results, null, 2)
);

await writeFile(
    join(output, 'index.html'),
    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=html/index.html">
    <title>Parceiros do Amanhã</title>
</head>
<body>
    <a href="html/index.html">Acessar Parceiros do Amanhã</a>
</body>
</html>`
);
console.table(results);
console.log('Build pronta! Abra dist/html/index.html com Live Server.');