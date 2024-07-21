import { defineConfig } from 'vite'
import { default as AutoImport } from 'unplugin-auto-import/vite'
import resources from 'vite-plugin-excalibur-resources'

export default defineConfig({
  optimizeDeps: {
    // exclude: ['excalibur'],
    include: ['excalibur'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    // automatically expose global 'ex' variable that will compile into
    // import { XYZ } from 'excalibur' for tree shaking
    // (using ex.XYZ as types seems to break in typescript 5.5, make sure to use 5.4)
    AutoImport({
      imports: [
        {
          excalibur: [['*', 'ex']],
        },
      ],
      dts: './src/ex.d.ts',
    }),
    resources(),
  ],
})
