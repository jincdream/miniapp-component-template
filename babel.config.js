module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: false
      }
    ],
  ],
  plugins: [
    ['@babel/plugin-syntax-dynamic-import'],
    ["@babel/plugin-transform-typescript"],
    ["@babel/transform-runtime"]
  ],
};
