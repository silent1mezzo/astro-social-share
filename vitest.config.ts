/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import svgr from "vite-plugin-svgr";

export default getViteConfig({
	plugins: [svgr()],
	test: {
		/* for example, use global to avoid globals imports (describe, test, expect): */
		// globals: true,
	},
});