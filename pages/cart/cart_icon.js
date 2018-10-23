Component({
	options: {
		multipleSlots: true // 在组件定义时的选项中启用多slot支持
	},
	data: {
		number: 12
	},
	lifetimes: {

	},
	ready: function(){
		this.setData({
			number: 18
		})
	}
})
