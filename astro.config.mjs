import { defineConfig } from 'astro/config'
import { resolve } from 'path'

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@lib': resolve('./src/lib/modul.ts'),
                '@components': resolve('./src/components/modul.ts'),
                '@services': resolve('./src/utils/services.ts')
            }
        }
    }
})
