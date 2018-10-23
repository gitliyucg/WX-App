var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
    },
    uploadImg: function () {
        var that = this;
        wx.chooseImage({
            success: function (res) {
                console.log(res)
                that.setData({
                    src: res['tempFilePaths']
                })
            }
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    previewImg: function(event){
        var src = event.target.dataset.src;
        var srclist = event.target.dataset.list;
        wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: srclist // 需要预览的图片http链接列表
        })
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
