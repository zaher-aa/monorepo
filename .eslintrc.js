module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-zaher-aa`
  extends: ['zaher-aa'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
