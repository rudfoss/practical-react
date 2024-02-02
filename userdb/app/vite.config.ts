/// <reference types='vitest' />
import path from "node:path"
import { fileURLToPath } from "node:url"

import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	root: __dirname,
	cacheDir: "../../node_modules/.vite/userdb/app",

	server: {
		port: 4200,
		host: "localhost"
	},

	preview: {
		port: 4300,
		host: "localhost"
	},

	plugins: [react(), nxViteTsPaths()],

	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [ nxViteTsPaths() ],
	// },

	build: {
		outDir: "../../dist/userdb/app",
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true
		}
	},

	test: {
		globals: true,
		cache: {
			dir: "../../node_modules/.vitest"
		},
		environment: "jsdom",
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

		reporters: ["default"],
		coverage: {
			reportsDirectory: "../../coverage/userdb/app",
			provider: "v8"
		}
	}
})
