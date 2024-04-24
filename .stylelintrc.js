const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate")

module.exports = {
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-property-sort-order-smacss",
		"prettier"
	],
	plugins: ["stylelint-order"],
	rules: {
		"order/properties-order": [sortOrderSmacss({ emptyLineBefore: "always" })],
		"selector-class-pattern": null,
		"declaration-empty-line-before": null
	}
}
