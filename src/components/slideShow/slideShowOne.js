var velocity = require('velocity-animate')
var avalon = require('avalon2')
require('./slideShowOne.scss')


avalon.component('ms-slideShow', {
    template: require('text!./slideShowOne.html'),
    defaults: {
        slideItems: [{ 'link': '', 'imgPath': '' }],
        slideTotalNum: 4,
        image_width: 600,
        container_width: 600,
        onInit: function(){
        	this.container_width =   this.slideItems.length * this.image_width
        }
    }
})
