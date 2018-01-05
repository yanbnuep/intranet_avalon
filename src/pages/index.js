var avalon = require('avalon2')
var common = require('../components/common/common.js')
var header = require('../components/header/header.js')
var navbar = require('../components/navbar/navbar.js')
var slideShow = require('../components/slideShow/slideShowOne.js')

avalon.define({
    $id: 'header',
    config: {
        banner: { 'link': require('../../mock/logo-with20.svg') },
        iconList: [
            { 'link': '/\icon', 'name': 'search', 'icon': 'search' }
        ]
    }
})


avalon.define({
    $id: 'index',
    config: {
        navList: [
            { 'name': 'Home', 'link': '/', 'class': 'glowTopBar' },
            { 'name': 'Telephone', 'link': '/tele', 'class': '' },
            { 'name': 'Services', 'link': '/Services', 'class': '' },
            { 'name': 'About', 'link': '/About', 'class': '' }
        ],
        hoverClass: 'glowTopBar'
    }
})

avalon.define({
    $id: 'newsSlideShow',
    config: {
        slideItems: [
            { 'link': '', 'imgPath': '../../mock/600-425fan.jpg' },
            { 'link': '', 'imgPath': '../../mock/AIRMACAU_annual_dinner-186_.jpg' },
            { 'link': '', 'imgPath': '../../mock/cadet.jpg' },
            { 'link': '', 'imgPath': '../../mock/10.jpg' },
            { 'link': '', 'imgPath': '../../mock/taifeng 600-425.jpg' }

        ]
    }
})




module.exports = avalon