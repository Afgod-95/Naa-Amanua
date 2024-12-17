import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
    appType: 'custom', // Ensures Vite doesn't handle static file serving
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  // Handle all requests
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read `index.html`
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      );

      // 2. Transform the template with Vite
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the server entry
      const { render } = await vite.ssrLoadModule('/src/entry-server.js');

      // 4. Render the application
      const appHtml = await render(url);

      // 5. Inject the rendered HTML into the template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // 6. Send the HTML response
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // Fix stacktrace for easier debugging
      vite.ssrFixStacktrace(e);
      console.error(e.stack);
      next(e);
    }
  });

  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

createServer();
