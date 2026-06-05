// Post-build prerender: render the app to static HTML and inject it into
// dist/index.html so crawlers and social/AI bots get fully-rendered content
// without running JavaScript. The client then hydrates this markup.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const {render} = await import(
  pathToFileURL(toAbsolute('dist-server/entry-server.js')).href
);

const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
fs.writeFileSync(toAbsolute('dist/index.html'), html);
console.log(`✓ Prerendered dist/index.html (${appHtml.length} chars of rendered HTML)`);
