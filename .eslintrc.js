/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    ignorePatterns: ['projects/**/*'],
    parserOptions: { project: './tsconfig.json' },
    plugins: ['simple-import-sort'],
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                'airbnb-base',
                'airbnb-typescript/base',
                'plugin:prettier/recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
            ],
            rules: {
                'no-param-reassign': 'off',
                'import/prefer-default-export': 'off',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/lines-between-class-members': 'off',
                'class-methods-use-this': 'off',
                'max-len': ['error', 100],
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: 'app',
                        style: 'camelCase',
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
            },
        },
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended',
                'plugin:@angular-eslint/template/accessibility',
            ],
            rules: {
                '@angular-eslint/template/click-events-have-key-events': 'off',
                '@angular-eslint/template/interactive-supports-focus': 'off',
            },
        },
    ],
};
