// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'vue/html-self-closing': [
			'error',
			{
				html: {
					normal: 'always',
					void: 'always',
				},
			},
		],
		'vue/multi-word-component-names': 'off',
		'no-console': 'warn',
		quotes: ['error', 'single'],
	},
});
