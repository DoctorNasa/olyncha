const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react-swc')
const { resolve } = require('node:path')

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': resolve(__dirname, './src'),
      'figma:asset/268155b88a99b93dca7e9010c841e35262c6398b.png': resolve(
        __dirname,
        './src/assets/268155b88a99b93dca7e9010c841e35262c6398b.png'
      ),
      'figma:asset/1229dccff855c644d9e7274ad4771c29b98fd14c.png': resolve(
        __dirname,
        './src/assets/1229dccff855c644d9e7274ad4771c29b98fd14c.png'
      ),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
})

