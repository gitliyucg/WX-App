var app = getApp();

Page({
	data: {
		isShow: true,
		chooseAddress: {

		},
		commodity: {
			img: '../../static/images/1.jpg',
			title: '测试',
			spec: '测试',
			number: 2,
			price: 100
		}
	},
	// 添加修改地址
	gochooseAddress: function(){
		let that = this;
		wx.chooseAddress({
			success: function(response){
				if(response.errMsg.split(':')[1] == 'ok'){
					let obj = {};
					obj.userName = response.userName;//姓名
					obj.telNumber = response.telNumber;//手机号码
					obj.provinceName = response.provinceName;//第一级地址
					obj.postalCode = response.postalCode;//邮编
					obj.detailInfo = response.detailInfo;//详细地址
					obj.countyName = response.countyName;//区域
					obj.cityName = response.cityName;//城市
					obj.nationalCode = response.nationalCode;//收货地址国家码
					that.setData({
						chooseAddress: obj,
						isShow: false
					})
				}
			}
		})
	},
	// 支付
	goPay: function(){
		let time = new Date().getTime();
		console.log(time);
		// wx.requestPayment({
		//
		// })
	}
})
