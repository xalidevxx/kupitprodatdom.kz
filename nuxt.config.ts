export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	ssr: true,
	features: {
		inlineStyles: false,
		devLogs: false,
	},
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		ssr: {
			noExternal: ['vuetify'],
		},
	},
	css: [],
	modules: ['@nuxt/fonts', 'vuetify-nuxt-module', '@nuxt/eslint'],
	vuetify: {
		moduleOptions: {
			ssrClientHints: {
				reloadOnFirstRequest: false,
				viewportSize: true,
				prefersColorScheme: false,

				prefersColorSchemeOptions: {
					useBrowserThemeOnly: false,
				},
			},
			styles: {
				configFile: 'assets/settings.scss',
			},
		},
	},
});
