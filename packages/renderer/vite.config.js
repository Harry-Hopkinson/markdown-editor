/* eslint-env node */

import {chrome} from "../../.electron-vendors.cache.json"
import {join} from "path"
import {builtinModules} from "module"

const PACKAGE_ROOT = __dirname

const config = {
    mode: process.env.MODE,
    root: PACKAGE_ROOT,
    resolve: {
        alias: {
            "/@/": join(PACKAGE_ROOT, "src") + "/"
        }
    },
    plugins: [],
    base: "",
    server: {
        fs: {
            strict: true
        }
    },
    build: {
        sourcemap: true,
        target: `chrome${chrome}`,
        outDir: "dist",
        assetsDir: ".",
        rollupOptions: {
            input: "index.html",
            external: [...builtinModules.flatMap((p) => [p, `node:${p}`])]
        },
        emptyOutDir: true,
        brotliSize: false
    },
    test: {
        environment: "happy-dom"
    }
}

export default config
