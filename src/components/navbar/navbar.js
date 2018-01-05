
var avalon = require('avalon2')
require('./navbar.scss')


avalon.component('ms-navbar',{
	template: require('text!./navbar.html'),
	defaults: {
		navList: [{'name':'Home','link':'/','class':''}],
		hoverClass: ' hoverClass'
	}
})