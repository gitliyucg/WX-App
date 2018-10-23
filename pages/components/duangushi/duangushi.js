Component({
	options: {
		multipleSlots: true // 在组件定义时的选项中启用多slot支持
	},
	data: {
		images:[
			{
				id:'1',
				src:'../../../static/images/1.jpg',
				name:'照片01',
				data:'10'
			}, {
				id: '2',
				src: '../../../static/images/2.jpg',
				name: '照片02',
				data: '10'
			}, {
				id: '3',
				src: '../../../static/images/3.jpg',
				name: '照片03',
				data: '10'
			}, {
				id: '4',
				src: '../../../static/images/4.jpg',
				name: '照片04',
				data: '10'
			}, {
				id: '5',
				src: '../../../static/images/5.jpg',
				name: '照片05',
				data: '10'
			}, {
				id: '6',
				src: '../../../static/images/6.jpg',
				name: '照片06',
				data: '10'
			}, {
				id: '7',
				src: '../../../static/images/5.jpg',
				name: '照片07',
				data: '10'
			}, {
				id: '8',
				src: '../../../static/images/4.jpg',
				name: '照片08',
				data: '10'
			}, {
				id: '9',
				src: '../../../static/images/3.jpg',
				name: '照片09',
				data: '10'
			}, {
				id: '10',
				src: '../../../static/images/2.jpg',
				name: '照片10',
				data: '10'
			}, {
				id: '11',
				src: '../../../static/images/1.jpg',
				name: '照片11',
				data: '10'
			}, {
				id: '12',
				src: '../../../static/images/2.jpg',
				name: '照片12',
				data: '10'
			}, {
				id: '13',
				src: '../../../static/images/3.jpg',
				name: '照片13',
				data: '10'
			}, {
				id: '14',
				src: '../../../static/images/4.jpg',
				name: '照片14',
				data: '10'
			}, {
				id: '15',
				src: '../../../static/images/5.jpg',
				name: '照片15',
				data: '10'
			}, {
				id: '16',
				src: '../../../static/images/6.jpg',
				name: '照片16',
				data: '10'
			}, {
				id: '17',
				src: '../../../static/images/5.jpg',
				name: '照片17',
				data: '10'
			},
		],
		scrollView: [
			{id: 0, text: '美业'},
			{id: 1, text: '动物'},
			{id: 2, text: '舞蹈'},
			{id: 3, text: '体育'},
			{id: 4, text: '抓拍'},
			{id: 5, text: '儿童'},
			{id: 6, text: '家'},
			{id: 7, text: '手工'},
			{id: 8, text: '美食'},
			{id: 9, text: '游戏'},
			{id: 11, text: '音乐'},
			{id: 12, text: '音乐'},
			{id: 13, text: '音乐'},
			{id: 14, text: '音乐'},
			{id: 15, text: '音乐'},
			{id: 16, text: '音乐'},
			{id: 17, text: '音乐'},
			{id: 18, text: '音乐'},
			{id: 19, text: '音乐'}
		],
		filter: [
			{id: 0, text: '美业'},
			{id: 1, text: '动物'},
			{id: 2, text: '舞蹈'},
			{id: 3, text: '体育'},
			{id: 4, text: '抓拍'},
			{id: 5, text: '儿童'},
			{id: 6, text: '家'},
			{id: 7, text: '手工'},
		],
		//点击添加样式
		action: false,
		//判断筛选按钮是否显示
		isShow: false,
		//判断筛选按钮是否显示
		isFilter: false,
		filterAction: false,
		Sort: 4
	},
	methods: {
		// 点击排序按钮
		actionClass: function(event){
			var that = this;
			switch(event.currentTarget.dataset.id){
				case '0':
					that.setData({
						Sort: 0
					})
					break;
				case '1':
					that.setData({
						Sort: 1
					})
					break;
				case '2':
					that.setData({
						Sort: 2
					})
					break;
			}
		},
		acionClass: function(event){
			this.setData({
				action: event.target.dataset.id,
				isShow: true
			})
		},
		showFilter: function(){
			this.setData({
				isFilter: !this.data.isFilter
			})
		},
		actionFilter: function(event){
			this.setData({
				filterAction: event.target.dataset.id
			})
		}
	}
})
