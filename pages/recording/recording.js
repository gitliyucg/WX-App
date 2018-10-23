var app = getApp();

var util = require('../../utils/util.js')
var tabbar = require("../components/tabbar/tabbar.js");

Page({
	onReady: function (res) {
		tabbar.tabbar("tabBar", 2, this, util.getRouter())//0表示第一个tabbar
	},
	localUpload: function(){
		var that = this
		wx.chooseVideo({
			sourceType: ['album'],
			maxDuration: 60,
			camera: 'back',
			success: function(res) {
				that.setData({
					src: res.tempFilePath
				})
			}
		})
	},
	recordUpload: function(){
		var that = this
		wx.chooseVideo({
			sourceType: ['camera'],
			maxDuration: 60,
			camera: 'back',
			success: function(res) {
				that.setData({
					src: res.tempFilePath
				})
			}
		})
	},
	close: function(){
		wx.redirectTo({
        		//目的页面地址
		        url: '/pages/index/index',
		})
	}
})
