function formatTime(date) {
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()

	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()


	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
}

//获取当前路由
function getRouter(){
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length - 1]    //获取当前页面的对象
    var url = currentPage.route    //当前页面url
    return url
}

//图片预览功能

module.exports = {
	formatTime: formatTime,
    getRouter: getRouter
}
