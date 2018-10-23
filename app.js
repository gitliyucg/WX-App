//app.js
App({
	onLaunch: function () {
		var that = this;
		//调用API从本地缓存中获取数据
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs);
		wx.login({
			success: function(response){
			    if(response.code){
					// 登录接口要通过后台发送请求
					// APPsecret不能出现在前端代码中
					// 存在反编译的隐患
				};
			},
		})
		//判断是是否授权登录没有的话跳转到login页
		wx.getSetting({
            success: function(response){
                if(response['authSetting']['scope.userInfo']){
                    // 用户已授权
                    //在没有 open-type=getUserInfo 版本的兼容处理
                    wx.getUserInfo({
                        success: response => {
                            that.globalData.userInfo = response.userInfo
                            if (that.globalData.userInfo !== null){
                                wx.redirectTo({
                                    url: '/pages/index/index'
                                })
                            }
                        }
                    })
                }else {
                	wx.redirectTo({
                	  	url: '/pages/login/login',
                	})
                }
            }
        })
	},

    onShow: function(){
    },

    onHide: function(){
    },

	toLogin: function(){
		wx.redirecTo ({
		  	url: '/pages/login/login',
		})
	},

	globalData: {
		userInfo: null
	}
})
