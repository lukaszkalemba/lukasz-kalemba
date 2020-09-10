module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-config-files/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest-config-files/svgTransform.js`,
    'components/atoms/Icon': '<rootDir>/src/components/atoms/Icon/Icon',
    'components/atoms/BlogPostContentItem':
      '<rootDir>/src/components/atoms/BlogPostContentItem/BlogPostContentItem',
    'components/particles/Container':
      '<rootDir>/src/components/particles/Container/Container',
    'components/atoms/Heading':
      '<rootDir>/src/components/atoms/Heading/Heading',
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/jest-config-files/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/jest-config-files/setup-test-env.js'],
};
