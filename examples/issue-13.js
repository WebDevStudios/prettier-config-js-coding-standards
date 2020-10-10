/**
 * Issue #13
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 *
 * @purpose Ensure that comments have a line above them.
 * @see     https://github.com/WebDevStudios/js-coding-standards/issues/13
 *
 * @since   Friday, 10/9/2020
 */

if ( true ) {

	// This is preferred, with a line above.
	return true;
}

// A comment with a line above, should be okay.
if ( true ) {

	// This is not preferred, add line above, but prettier collapses it.
	return true;
}
// This also should have a line above, but prettier won't care.
if ( true ) {
	return true;
}

if ( true ) {
	const a = true;

	// The blank line above will not be collapsed by prettier.
	return a;
}
