import { defineConfig } from 'vite'
import { default as AutoImport } from 'unplugin-auto-import/vite'
import resources from 'vite-plugin-excalibur-resources'

export default defineConfig({
  optimizeDeps: {
    // not necessary but helps when linking to local excalibur versions
    include: ['excalibur'],
  },
  resolve: {
    // not necessary but helps when linking to local excalibur versions
    dedupe: ['excalibur'],
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    // automatically expose global 'ex' variable that will compile into
    // import { XYZ } from 'excalibur' for tree shaking
    AutoImport({
      // we manually type it in ./src/ex.d.ts,
      // feel free to enable if you're adding other libraries to auto import
      dts: false,
      imports: [
        {
          excalibur: [['*', 'ex']],
        },
      ],
    }),
    resources(),
  ],
})
