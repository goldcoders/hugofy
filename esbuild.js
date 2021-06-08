const { buildSync } = require('esbuild')
const define = {}

for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k])
}

const options = {
  entryPoints: ['./src/main.ts'],
  outfile: './dist/main.js',
  bundle: true,
  minify: true,
  define,
}

buildSync(options)
