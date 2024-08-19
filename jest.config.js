// jest.config.js
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.js$"  // Transforma archivos dentro de node_modules, excepto axios
  ],
};
