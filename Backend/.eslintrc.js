module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    'import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  },
  ignorePatterns: [],
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ]
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx'
      ],
      env: {
        jest: true
      }
    }
  ]
};
