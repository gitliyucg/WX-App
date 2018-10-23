var app = getApp();

Page({
	data:{
		list:[{
				id: 50,
				name: '店铺1',
				select:"circle",
				lists: [{
					id: 0,
					code:"0001",
					name:"无人机",
					url:"http://i1.mifile.cn/a1/pms_1487824962.01314237!220x220.jpg",
					style:"低配版",
					price: 320,
					select:"circle",
					num:1,
					stock: 10
				},
				{
					id: 1,
					code: "0002",
					name: "智能手环",
					url: "http://i1.mifile.cn/a1/pms_1467962689.97551741!220x220.jpg",
					style: "2代",
					price: 149,
					select: "circle",
					num: 1,
					stock: 10
				}
			]
		},
		{
				id: 50,
				name: '店铺1',
				select:"circle",
				lists: [{
					id: 0,
					code:"0001",
					name:"无人机",
					url:"http://i1.mifile.cn/a1/pms_1487824962.01314237!220x220.jpg",
					style:"低配版",
					price: 320,
					select:"circle",
					num:1,
					stock: 10
				}
			]
		}
	],
		allSelect: 'circle',//全选按钮
		count: 0,//总价
		num: 0//选择商品的数量
	},
	// 改变按钮状态
	change: function(event){
		let select = event.target.dataset.select;
		let index = event.target.dataset.index;
		let aindex = event.target.dataset.aindex;
		let stype = '';
		let allStype = '';
		let num = 0;
		if(select == 'circle'){
			stype = 'success'
		}else {
			stype = 'circle'
		}
		let newList = this.data.list;
		newList[aindex]['lists'][index].select = stype;
		this.setData({
			list: newList,
		})
		this.isProductsSelect(aindex);
		this.isAllSelect();
		this.countNum();
		this.count();
	},
	// 判断是否需要选中店铺
	isProductsSelect: function(index){
		var list = this.data.list;
		let num = 0;
		for(var i = 0; i < list[index]['lists'].length; i++){
			if(list[index]['lists'][i]['select'] == 'success'){
				num += 1;
			}
		}
		if(num == list[index]['lists'].length){
			list[index]['select'] = 'success';
		}else {
			list[index]['select'] = 'circle';
		}
		this.setData({
			list: list
		})
	},
	// 店铺全选按钮
	productsAll: function(event){
		let select = event.target.dataset.select;
		let index = event.target.dataset.index;
		let newList = this.data.list;
		if(select == 'circle'){
			newList[index]['select'] = 'success';
			for(var i = 0; i < newList[index]['lists'].length; i++){
				newList[index]['lists'][i]['select'] = 'success';
			}
		}else {
			newList[index]['select'] = 'circle';
			for(var i = 0; i < newList[index]['lists'].length; i++){
				newList[index]['lists'][i]['select'] = 'circle';
			}
		}
		this.setData({
			list: newList
		})
		this.isAllSelect();
		this.countNum();
		this.count();
	},
	// 全选
	allSelect: function(event){
		let select = event.target.dataset.select;
		let newList = this.data.list;
		let stype = '';
		if(select == 'circle'){
			stype = 'success';
			for(var i = 0; i < newList.length; i++){
				newList[i]['select'] = 'success';
				for(var s = 0; s < newList[i]['lists'].length; s++){
					newList[i]['lists'][s]['select'] = 'success';
				}
			}
		}else {
			stype = 'circle';
			for(var i = 0; i < newList.length; i++){
				newList[i]['select'] = 'circle';
				for(var s = 0; s < newList[i]['lists'].length; s++){
					newList[i]['lists'][s]['select'] = 'circle';
				}
			}
		}
		this.setData({
			list: newList,
			allSelect: stype
		})
		this.countNum();
		this.count();
	},
	// 判断全选按钮是否需要选中
	isAllSelect: function(){
		var list = this.data.list;
		let num = 0;
		for(var i = 0; i < list.length; i++){
			if(list[i]['select'] == 'success'){
				num += 1;
			}
		}
		if(num == list.length){
			this.setData({
				allSelect: 'success'
			})
		}else {
			this.setData({
				allSelect: 'circle'
			})
		}
	},
	// 商品--
	subtraction: function(event){
		var index = event.target.dataset.index;
		var aindex = event.target.dataset.aindex;
		var num = event.target.dataset.num;
		var newList = this.data.list;
		if(newList[aindex]['lists'][index]['select'] != 'success'){
			newList[aindex]['lists'][index]['select'] = 'success';
		}
		if(num == 1){
			wx.showToast({
			  	title: '不能再减了！',
			  	icon: 'none',
			  	duration: 2000
			})
		}else {
			num--;
			newList[aindex]['lists'][index]['num'] = num;
		}
		this.setData({
			list: newList
		})
		this.count();
		this.countNum();
		this.isProductsSelect(aindex);
		this.isAllSelect();
	},
	// 商品++
	addtion: function(event){
		var index = event.target.dataset.index;
		var aindex = event.target.dataset.aindex;
		var num = event.target.dataset.num;
		var stock = event.target.dataset.stock;
		var newList = this.data.list;
		if(newList[aindex]['lists'][index]['select'] != 'success'){
			newList[aindex]['lists'][index]['select'] = 'success';
		}
		if(num == stock){
			wx.showToast({
				title: '只有这么多了！',
				icon: 'none',
				duration: 2000
			})
		}else{
			num++;
			newList[aindex]['lists'][index]['num'] = num;
		}
		this.setData({
			list: newList
		})
		this.count();
		this.countNum();
		this.isProductsSelect(aindex);
		this.isAllSelect();
	},
	// 计算数量
	countNum: function(){
		let list = this.data.list;
		let num = 0;
		for(var i = 0; i < list.length; i++){
			for(var s = 0; s < list[i]['lists'].length; s++){
				if(list[i]['lists'][s]['select'] == 'success'){
					num += 1
				}
			}
		}
		this.setData({
			num: num
		})
	},
	// 计算价格
	count: function(){
		var list = this.data.list;
		var newCount = 0;
		for(var i = 0; i < list.length; i++){
			for(var s = 0; s < list[i]['lists'].length; s++){
				if(list[i]['lists'][s]['select'] == 'success'){
					newCount += list[i]['lists'][s]['num'] * list[i]['lists'][s]['price']
				}
			}
		}
		this.setData({
			count: newCount
		})
	},
	// 删除商品
	Delete: function(event){
		let ID = event.target.dataset.id;
		let index = event.target.dataset.index;
		let aindex = event.target.dataset.aindex;
		let newList = this.data.list;
		let that = this;
		wx.showModal({
			title: '提示',
  			content: '确定要删除这个商品吗？',
			success: function(response){
				if(response.confirm){
					newList[aindex]['lists'].splice(index, 1);
					that.setData({
						list: newList
					})
					that.count();
					that.countNum();
				}
			}
		})
	},
	// 套转到结算页面
	goSettle: function(){
		wx.navigateTo({
		  	url: '/pages/settle/settle',
		})
	}
})
