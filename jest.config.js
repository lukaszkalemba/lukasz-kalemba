module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-config-files/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest-config-files/svgTransform.js`,
    'components/atoms/(.*)$': '<rootDir>/src/components/atoms/$1/$1.js',
    'components/molecules/(.*)$': '<rootDir>/src/components/molecules/$1/$1.js',
    'components/organisms/(.*)$': '<rootDir>/src/components/organisms/$1/$1.js',
    'components/particles/(.*)$': '<rootDir>/src/components/particles/$1/$1.js',
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
