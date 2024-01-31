import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    viewportWidth: 500,
    viewportHeight: 500,
  },
  env: {
    FOO: 'bar',
  },
  e2e: {
    baseUrl: 'http://localhost:3001',
  },
})
