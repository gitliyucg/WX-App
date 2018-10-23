var app = getApp()

var util = require('../../utils/util.js')
var tabbar = require("../components/tabbar/tabbar.js");

Page({
	data: {
		number: 1,
        baopin: false,
        classroom: true,
		duangushi: true,
		tabScrollTop: 0,
        tabFixed: false
    },
    onLoad: function () {
		var that = this;
        tabbar.tabbar("tabBar", 1, this, util.getRouter())//0表示第一个tabbar
		//获取元素
        var query = wx.createSelectorQuery();
        query.select('.channel-wrap').boundingClientRect((res) => {
            that.setData({
                tabScrollTop: res.top
            })
        }).exec()
    },
	onPageScroll: function(e){
        if (e.scrollTop > this.data.tabScrollTop) {
            this.setData({
                tabFixed: true
            })
        }else{
            this.setData({
                tabFixed: false
            })
        }
    },
	onShow: function(){
		// wx.hideTabBar({
		// 	animate: false
		// })
    },
	onReady: function(){
	},
	actionClass: function(event){
		if(event.target.dataset.id == 1){
			this.setData({
				baopin: false,
				classroom: true,
				duangushi: true
			})
		}
		if(event.target.dataset.id == 2){
			this.setData({
				baopin: true,
				classroom: false,
				duangushi: true
			})
		}
		if(event.target.dataset.id == 3){
			this.setData({
				baopin: true,
				classroom: true,
				duangushi: false
			})
		}
		this.setData({
			number: event.target.dataset.id
		})
	}
})
