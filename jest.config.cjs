module.exports = {
  preset: "ts-jest",
  // testEnvironment: "node",
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)",
    "**/?(*.)+(spec|test).(js|jsx|ts|tsx)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  globals: {
    "ts-jest": {
      tsconfig: "client/tsconfig.json",
      // 设置 jsx 选项为 react-jsx 以支持 React 的 JSX 语法
      jsx: "react-jsx",
    },
  },
}
