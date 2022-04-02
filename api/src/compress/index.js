const JPG = require('./JPG');
const PNG = require('./PNG');
const GIF = require('./GIF');
// const SVG = require('./SVG'); // not supported scour in alpine

module.exports = {
	JPG: JPG,
	PNG: PNG,
	GIF: GIF,
	// SVG: SVG
};