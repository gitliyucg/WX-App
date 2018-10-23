//index.js
//获取应用实例
var app = getApp()

var util = require('../../utils/util.js')
var tabbar = require("../components/tabbar/tabbar.js");

Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        number: 0,
        index: false,
        baopin: true,
        classroom: true,
        duangushi: true,
        tabScrollTop: 0,
        isPage: 0,
        tabFixed: false,
        video: [
            {img: '../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试' },
            {img: '../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
            {img: '../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
            {img: '../../static/images/7.jpg', num: '120', content: '测试测试测试测试' },
            {img: '../../static/images/7.jpg', num: '120', content: '测试测试测试' },
            {img: '../../static/images/7.jpg', num: '120', content: '测试'}
        ]
    },
    onLoad: function () {
    },
    onReady: function(){
        var that = this;
        //获取组件

        //tabbar 组件
        tabbar.tabbar("tabBar", 0, this, util.getRouter())//0表示第一个tabbar
        //获取元素
        var query = wx.createSelectorQuery();
        query.select('.index-wrap').boundingClientRect((res) => {
            that.setData({
                tabScrollTop: res.top
            })
        }).exec()
        wx.showShareMenu({
            withShareTicket: true
        })
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
    // 点击更多跳转到不同页面
    toMore: function(event){
        wx.navigateTo({
            url: '/pages/index/more/more?id=' + event.target.dataset.id,
        })
    },
    isPage: function(){
        var that = this;
        var text = '';
        switch(this.data.isPage){
            case 0:
                that.text = '精选'
                break;
            case 1:
                that.text = '抱品秀'
                break;
            case 2:
                that.text = '小课堂'
                break;
            case 3:
                that.text = '短故事'
                break;
        }
        return that.text
    },
    //页面下拉刷新事件处理函数
    onPullDownRefresh: function(){
        //在标题栏中显示加载
        // wx.showNavigationBarLoading();
        // wx.hideNavigationBarLoading();
    },
    //页面上拉加载处理函数
    onReachBottom: function(){
        if (this.isPage() != '精选'){
            var that = this;
            var baopin = this.selectComponent('#baopinxiu');
            var dataArr = baopin.data.images;
            var arr = [
                {
                    id: '1',
                    src: '../../../static/images/1.jpg',
                    name: '照片01',
                    data: '2017/11/1'
                }, {
                    id: '2',
                    src: '../../../static/images/2.jpg',
                    name: '照片02',
                    data: '2017/11/2'
                }, {
                    id: '3',
                    src: '../../../static/images/3.jpg',
                    name: '照片03',
                    data: '2017/11/3'
                }, {
                    id: '4',
                    src: '../../../static/images/4.jpg',
                    name: '照片04',
                    data: '2017/11/4'
                }, {
                    id: '5',
                    src: '../../../static/images/5.jpg',
                    name: '照片05',
                    data: '2017/11/5'
                }, {
                    id: '6',
                    src: '../../../static/images/6.jpg',
                    name: '照片06',
                    data: '2017/11/6'
                }, {
                    id: '7',
                    src: '../../../static/images/5.jpg',
                    name: '照片07',
                    data: '2017/11/7'
                }, {
                    id: '8',
                    src: '../../../static/images/4.jpg',
                    name: '照片08',
                    data: '2017/11/8'
                }, {
                    id: '9',
                    src: '../../../static/images/3.jpg',
                    name: '照片09',
                    data: '2017/11/9'
                }, {
                    id: '10',
                    src: '../../../static/images/2.jpg',
                    name: '照片10',
                    data: '2017/11/10'
                }, {
                    id: '11',
                    src: '../../../static/images/1.jpg',
                    name: '照片11',
                    data: '2017/11/11'
                }, {
                    id: '12',
                    src: '../../../static/images/2.jpg',
                    name: '照片12',
                    data: '2017/11/12'
                }, {
                    id: '13',
                    src: '../../../static/images/3.jpg',
                    name: '照片13',
                    data: '2017/11/13'
                }, {
                    id: '14',
                    src: '../../../static/images/4.jpg',
                    name: '照片14',
                    data: '2017/11/14'
                }, {
                    id: '15',
                    src: '../../../static/images/5.jpg',
                    name: '照片15',
                    data: '2017/11/15'
                }, {
                    id: '16',
                    src: '../../../static/images/6.jpg',
                    name: '照片16',
                    data: '2017/11/16'
                }, {
                    id: '17',
                    src: '../../../static/images/5.jpg',
                    name: '照片17',
                    data: '2017/11/17'
                },
            ]
            wx.showLoading({
                title: this.isPage()
            })
            setTimeout(function () {
                wx.hideLoading();
                baopin.setData({
                    images: dataArr.concat(arr)
                })
                console.log(that.baopin.data.images)
            }, 2000)
        }
    },
    actionClass: function(event){
        wx.pageScrollTo({
            scrollTop: 0
        })
        if(event.target.dataset.id == 0){
            this.setData({
                index: false,
                baopin: true,
                classroom: true,
                duangushi: true,
                isPage: 0
            })
        }
        if(event.target.dataset.id == 1){
            this.setData({
                index: true,
                baopin: false,
                classroom: true,
                duangushi: true,
                isPage: 1
            })
        }
        if(event.target.dataset.id == 2){
            this.setData({
                index: true,
                baopin: true,
                classroom: false,
                duangushi: true,
                isPage: 2
            })
        }
        if(event.target.dataset.id == 3){
            this.setData({
                index: true,
                baopin: true,
                classroom: true,
                duangushi: false,
                isPage: 3
            })
        }
        this.setData({
            number: event.target.dataset.id
        })
    }
})
