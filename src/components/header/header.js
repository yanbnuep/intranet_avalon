
var avalon = require('avalon2')
require('./header.scss')


avalon.component('ms-header',{
	template: require('text!./header.html'),
	defaults: {
		banner: {'link':'/src/to/banner'},
		iconList: [{'link':'/\icon','icon':'face','name':'face'}]
	}
})