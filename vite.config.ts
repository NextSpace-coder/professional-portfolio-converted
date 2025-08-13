import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTagger from "vite-tagger"
import path from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      viteTagger({ prefixName: "wb" }),
    ],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@layout': path.resolve(__dirname, 'src/layout')
      }
    }
  };
});
