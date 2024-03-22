import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-extended/all", "aws-sdk-client-mock-jest"],
  testPathIgnorePatterns: ["/node_modules/", "/cdk.out/"],
  coverageReporters: ["text", "lcov", "cobertura"],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"], // Add this line
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "@app/lib/(.*)": "<rootDir>/src/lib/$1",
    "@env/(.*)": "<rootDir>/env/$1",
    "@cdk/(.*)": "<rootDir>/resources/$1",
  },
  testMatch: [
    "**/!(*+(.)integration)+(*.)+(spec|test).[jt]s?(x)",
    "**/*.integration.+(spec|test).[jt]s?(x)",
  ],
};

export default config;
