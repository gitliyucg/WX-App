var app = getApp()

Page({
	data: {
		number: 1,
		amount: 50
	},
	tabNumber: function(event){
		this.setData({
			number: event.currentTarget.dataset.number,
			amount: event.currentTarget.dataset.amount
		})
	}
})
