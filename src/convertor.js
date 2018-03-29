export default function convertor(tipo,cantidad = 0){
	if(tipo == "kilosalibras"){
		return convertirALibras(cantidad).toFixed(2)
	}else if(tipo == "librasakilos"){
		return convertirAKilos(cantidad).toFixed(2)
	}
	else{
		return 0
	}
}

function convertirAKilos(libras){
	return libras * .45
}

function convertirALibras(kilos){
	return kilos * 2.2
}
