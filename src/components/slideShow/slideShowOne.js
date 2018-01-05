var avalon = require('avalon2');
require('animate.css');
require('./slideShowOne.scss');


avalon.component('ms-slideShow', {
    template: require('text!./slideShowOne.html'),
    defaults: {
        slideItems: [{ 'link': '', 'imgPath': '' ,'title':''}],
        image_width: 600,
        container_width: 0,
        cur : 0,
        jump: function (index) {
            this.cur = index;
        },
        autoPlay: function(){
            var t = this;
            var l = t.slideItems.length-1;
            if(t.cur < l)
                t.cur++;
            else
                t.cur = 0;
        },
        onReady:function () {
            var t = this;
            this.interval = setInterval(
                function() {
                    t.autoPlay();
                }, 10000);
        },
        onDispose: function () {
            clearInterval(this.interval);
        }
    }
});
