module.exports = {
	overrides: [
		{
			files: [ '*.js', '*.jsx', '*.ts', '*.tsx' ],
			options: {
				...require( '@wordpress/prettier-config' ),
				printWidth: 99000,
				bracketSpacing: true,
			},
		},
	],
};
