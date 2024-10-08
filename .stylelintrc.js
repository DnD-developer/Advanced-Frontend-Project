const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate")

module.exports = {
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-property-sort-order-smacss",
		"stylelint-prettier/recommended"
	],
	plugins: ["stylelint-order"],
	rules: {
		"order/properties-order": [sortOrderSmacss({ emptyLineBefore: "always" })],
		"selector-class-pattern": null,
		"declaration-empty-line-before": null,
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global", "export"]
			}
		]
	}
}
