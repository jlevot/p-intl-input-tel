module.exports = {
    root: true,
    ignorePatterns: [],
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['./tsconfig.json'],
                createDefaultProgram: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates'
            ],
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
                'max-len': ['error', {code: 160}],
                'no-underscore-dangle': 'off',
                '@typescript-eslint/no-inferrable-types': 'off',
                '@typescript-eslint/member-ordering': 'off',
                'curly': ['error', 'multi-line'],
                '@typescript-eslint/no-explicit-any': 'off'
            },
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            rules: {},
        },
    ],
};
