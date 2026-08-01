import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, fileURLToPath(new URL('.', import.meta.url)), '')

    return {
        base: '/',
        plugins: [
            react({
                babel: {
                    plugins: [['babel-plugin-react-compiler']],
                },
            }),
        ],
        server: {
            host: true,
            port: 3000,
            proxy: {
                '/api': {
                    target: env.VITE_PROXY_TARGET || 'http://127.0.0.1:8000',
                    changeOrigin: true
                }
            }
        }
    }
})
