import { context, build } from 'esbuild';
import { exec } from 'child_process';
import { promisify } from 'util';
import { watch } from 'fs';

const execAsync = promisify(exec);

async function setup() {
  await execAsync('mkdir -p dist');
  await execAsync('cp src/index.html src/data.js styles.css dist/');
  console.log('Setup completed');
}

async function runBuild(watchMode = false) {
  await setup();
  
  if (watchMode) {
    const ctx = await context({
      entryPoints: ['src/app.js'],
      bundle: true,
      outfile: 'dist/bundle.js'
    });
    
    await ctx.watch();
    await ctx.serve({
      servedir: 'dist'
    });
  } else {
    await build({
      entryPoints: ['src/app.js'],
      bundle: true,
      outfile: 'dist/bundle.js'
    });
  }
}

// Only watch in dev mode
if (process.argv.includes('--watch')) {
  // Watch src directory for changes
  watch('src', { recursive: true }, async (eventType, filename) => {
    console.log(`File ${filename} changed`);
    await setup();
  });

  // Start the build process in watch mode
  runBuild(true).catch(console.error);
} else {
  // Just build once
  runBuild(false).catch(console.error);
} 