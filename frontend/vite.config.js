import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
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
                target: env.VITE_BACKEND_URL,
                changeOrigin: true
            }
        }
    }
})
