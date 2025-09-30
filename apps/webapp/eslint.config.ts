// @ts-check

import { defineConfig, getConfig } from '@repo/eslint-config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const config = getConfig(import.meta.url);

export default defineConfig([
	config,
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			react,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
		},
		rules: {
			// Extend rules from eslint-plugin-react and react-hooks
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...jsxA11y.configs.recommended.rules,
			// Custom React rules
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			// Add any other specific rules for your React project
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]);
