// @ts-check
const { defineConfig } = require('eslint/config');
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = defineConfig([
    {
        files: ['**/*.ts'],
        extends: [eslint.configs.recommended, tseslint.configs.recommended, angular.configs.tsRecommended],
        processor: angular.processInlineTemplates,
        rules: {
            '@angular-eslint/component-class-suffix': [
                'error',
                {
                    suffixes: ['Page', 'Component'],
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: '',
                    style: 'camelCase',
                },
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'enumMember',
                    format: ['UPPER_CASE'],
                },
            ],
            'max-len': ['error', { code: 160 }],
            'no-underscore-dangle': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/member-ordering': 'off',
            curly: ['error', 'multi-line'],
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        files: ['**/*.html'],
        extends: [angular.configs.templateRecommended],
        rules: {},
    },
]);
