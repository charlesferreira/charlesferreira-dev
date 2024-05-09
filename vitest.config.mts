import {defineConfig} from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('v-') || [
            'AppLogo',
            'AppLink',
            'RouterLink'
          ].includes(tag)
        }
      }
    }),
    tsconfigPaths(),
  ],
  test: {
    coverage: {
      include: [
        'src/components/**/*.vue',
      ],
      reporters: ['text', 'json', 'json-summary', 'html'],
      reportOnFailure: true,
    },
    environment: 'happy-dom',
    globals: true,
  }
})
