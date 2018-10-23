var app = getApp()

Page({
    onShow: function () {
    },
    onLoad: function () {
        //查看是否授权
        // wx.getSetting({
        //     success: function(response){
        //         if(response['authSetting']['scope.userInfo']){
        //             // 用户已授权
        //             //在没有 open-type=getUserInfo 版本的兼容处理
        //             wx.getUserInfo({
        //                 success: response => {
        //                     app.globalData.userInfo = response.userInfo
        //                     if (app.globalData.userInfo !== null){
        //                         wx.redirectTo({
        //                             url: '/pages/index/index'
        //                         })
        //                     }
        //                 }
        //             })
        //         }
        //     }
        // })
    },
    // 用户手动授权按钮
    bindGetUserInfo: function(event){
        if (event.detail.userInfo){
            //用户按了允许授权按钮
            app.globalData.userInfo = event.detail.userInfo
            // 授权成功后跳转到小程序的首页
            wx.redirectTo({
                url: '/pages/index/index',
            })
        }else{
            //用户按了拒绝授权按钮
            wx.showModal({
                title:'警告',
                content:'您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel:false,
                confirmText:'返回授权',
                success:function(response){
                    if (response.confirm) {
                        // console.log('用户点击了“返回授权”')
                    }
                }
            })
        };
    },
    // 获取用户信息
    queryUserInfo: function(){

    }
})
