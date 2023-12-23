import { defineConfig } from 'vite'
import { default as AutoImport } from 'unplugin-auto-import/vite'
import hmr from 'vite-plugin-excalibur-hmr'
import resources from 'vite-plugin-excalibur-resources'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    // automatically expose global 'ex' variable that will compile into
    // import { XYZ } from 'excalibur' for tree shaking
    AutoImport({
      imports: [
        {
          excalibur: [['*', 'ex']],
        },
      ],
      dts: './src/ex.d.ts',
    }),
    hmr(),
    resources(),
  ],
})
