const expect = require('chai').expect
const convertor = require('..').default

describe('#convertor', function(){
	it('convierte de kilos a libras',function(){
		const cantidad = convertor("kilosalibras",25)
		expect(cantidad).to.equal('55.00')
	})
	it('convierte de libras a kilos',function(){
		const cantidad = convertor("librasakilos",25)
		expect(cantidad).to.equal('11.25')
	})
})