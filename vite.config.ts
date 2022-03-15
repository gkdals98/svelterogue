import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
const commonSettings = {
  plugins: [
    EnvironmentPlugin(
      {
        //sample
        'SAMPLE': 'sample!',
      }
    ),
    svelte(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
})
