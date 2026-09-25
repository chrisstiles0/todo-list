# Todo list

Install dependencies with `npm install`, then use:

| Command | Purpose |
| --- | --- |
| `npm start` or `npm run dev` | Start the local development server with automatic browser updates. Open the URL printed in the terminal. |
| `npm run build` | Create an optimized production build in `dist`, without source maps. |
| `npm run build:dev` | Build once in development mode, with source maps for debugging. |
| `npm run build:debug` | Create a production build with separate source maps for debugging optimized code. |
| `npm run watch` | Rebuild development files in `dist` whenever source files change, without starting a server. |

Stop the development server or watch command with `Ctrl+C`.

Each build replaces the previous contents of `dist`. The development server serves
its build from memory. Debug builds include original source code in their source
maps; use `npm run build` for the normal production output.
