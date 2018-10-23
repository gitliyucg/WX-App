var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        video: [
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试'},
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试'},
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试测试测试' },
            { img: '../../../static/images/7.jpg', num: '120', content: '测试'}
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */

    onLoad: function(options) {
        var that = this;
        var title = '';
        if(options.id == 0){
            that.title = '今日上新';
        }
        if(options.id == 1){
            that.title = '爆笑';
        }
        wx.setNavigationBarTitle({
            title: that.title
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
