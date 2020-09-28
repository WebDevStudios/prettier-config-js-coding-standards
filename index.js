module.exports = {
	overrides: {
		files: [ '*.js', '*.jsx' ],
		options: {
			...require( '@wordpress/prettier-config' ),
			printWidth: 99000,
			bracketSpacing: true,
		},
	},
};
