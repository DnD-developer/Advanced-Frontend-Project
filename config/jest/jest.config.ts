import type { Config } from "jest"

const config: Config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
	coveragePathIgnorePatterns: ["/node_modules/"],
	testEnvironment: "jsdom",
	moduleDirectories: ["node_modules"],
	testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
	rootDir: "../../",
	moduleNameMapper: {
		"@src/(.*)": "<rootDir>/src/$1",
		"@app/(.*)": "<rootDir>/src/app/$1",
		"@pages/(.*)": "<rootDir>/src/pages/$1",
		"@widgets/(.*)": "<rootDir>/src/widgets/$1",
		"@features/(.*)": "<rootDir>/src/features/$1",
		"@entities/(.*)": "<rootDir>/src/entities/$1",
		"@ui/(.*)": "<rootDir>/src/shared/ui/$1",
		"@lib/(.*)": "<rootDir>/src/shared/lib/$1",
		"@assets/(.*)": "<rootDir>/src/shared/assets/$1",
		"@config/(.*)": "<rootDir>/src/shared/config/$1"
	}
}

export default config
