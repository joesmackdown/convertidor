"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = convertor;
function convertor(tipo) {
	var cantidad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	if (tipo == "kilosalibras") {
		return convertirALibras(cantidad).toFixed(2);
	} else if (tipo == "librasakilos") {
		return convertirAKilos(cantidad).toFixed(2);
	} else {
		return 0;
	}
}

function convertirAKilos(libras) {
	return libras * .45;
}

function convertirALibras(kilos) {
	return kilos * 2.2;
}