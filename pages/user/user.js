var app = getApp()

var util = require('../../utils/util.js');
var tabbar = require("../components/tabbar/tabbar.js");

Page({
    data: {
        nickName: '',
        avatarUrl: ''
    },
    onLoad: function () {
        var that = this;
        tabbar.tabbar("tabBar", 4, this, util.getRouter())//0表示第一个tabbar
        console.log(app.globalData.userInfo);
        that.setData({
            nickName: app.globalData.userInfo.nickName,
            avatarUrl: app.globalData.userInfo.avatarUrl
        })
    },
    upLoadImang: function() {
        wx.navigateTo({
            url: '/pages/user/upload/upload',
        })
    },
    previewImage: function(){
        wx.previewImage({
            urls: [this.data.avatarUrl],
        })
    },
    toListPage: function(event){
        // console.log(event.target.dataset.id);
        let ID = event.target.dataset.id;
        let router = '';
        switch(ID){
            case '0':
                router = 'platform';
                break;
            case '1':
                router = 'merchant';
                break;
            case '2':
                router = 'upload';
                break;
            case '3':
                router = 'zan';
                break;
            case '4':
                router = 'comment';
                break;
            case '5':
                router = 'recharge';
                break;
            case '6':
                router = 'sort';
                break;
            default:
                console.log('default');
        }
        wx.navigateTo({
            url: '/pages/user/' + router + '/' + router
        })
    }
})
