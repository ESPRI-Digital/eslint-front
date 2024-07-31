import antfu from '@antfu/eslint-config';

export default antfu(
    {
        ignores: [
            'src/*.d.ts',
        ],
    },
    {
        rules: {
            'no-undef': 'off',
            'curly': ['error', 'all'],
            'comma-dangle': ['error', 'always-multiline'],
            'comma-spacing': [
                'error',
                {
                    after: true,
                    before: false,
                },
            ],
            'arrow-parens': 'off',
            'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
            'object-shorthand': 'off',
            'style/semi': ['error', 'always'],
            'ts/interface-name-prefix': 'off',
            'ts/explicit-function-return-type': 'off',
            'ts/explicit-module-boundary-types': 'off',
            'unicorn/no-new-array': 'off',
            'style/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
            'ts/no-explicit-any': 'off',
            'ts/no-empty-function': 'off',
            'style/indent': [
                'error',
                4,
                {
                    SwitchCase: 1,
                    ignoredNodes: [
                        'FunctionExpression > .params[decorators.length > 0]',
                        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                        'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
                    ],
                },
            ],
            'vue/custom-event-name-casing': ['error', 'kebab-case'],
            'vue/html-self-closing': 'off',
            'vue/max-attributes-per-line': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/html-indent': ['error', 4],
            'vue/script-indent': [
                'error',
                4,
                {
                    switchCase: 1,
                },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/first-attribute-linebreak': 'off',
            'test/prefer-lowercase-title': 'off',
        },
    },
);