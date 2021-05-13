module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      useESM: true,
    }
  },
  transform: {
    "\\.tsx?$": "ts-jest"
  },
}
