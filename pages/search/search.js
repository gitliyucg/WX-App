var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        label: ['猫', '狗', '车', '故事', '搞笑', '舞蹈', '旅游', '知识', '这回长见识了吧', '拉丁', '爆笑'],
        hidden: true,
        value: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    hotLabel: function(event){
        this.setData({
            value: event.target.dataset.inner
        })
        if (this.data.value != '') {
            this.setData({
                hidden: false
            })
        }else{
            this.setData({
                hidden: true
            }) 
        }
    },

    bindKeyInput: function(event){
        //输入框聚焦时触发
    },

    bindKeyValue: function(event){
        //输入框失焦时触发
        if (event.detail.value !== ''){
            console.log('调接口')
            this.setData({
                hidden: false
            })
        }else{
            this.setData({
                hidden: true
            })
        }
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