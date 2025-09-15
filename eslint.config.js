{
    "extends"; "@react-native",
    "rules"; {
        "quotes"; [2, "double", { "avoidEscape": true }]
      }
}

// filepath: /media/linuxarun/TestArun/Arun/Studies/ReactNative/Project_MealsToGo/Meals_Onthego/eslint.config.js
module.exports = [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
];