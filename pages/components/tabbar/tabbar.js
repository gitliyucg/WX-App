//初始化数据
function tabbarinit() {
    return [{
                "current": 0,
                "pagePath": "/pages/index/index",
                "iconPath": "../../static/icon/index.png",
                "selectedIconPath": "../../static/icon/index-action.png",
                "text": "首页"
            },
            {
                "current": 0,
                "pagePath": "/pages/channel/channel",
                "iconPath": "../../static/icon/pindao.png",
                "selectedIconPath": "../../static/icon/pindao-action.png",
                "text": "频道"

            },
            {
                "current": 0,
                "pagePath": "/pages/recording/recording",
                "iconPath": "../../static/icon/luzhi.png",
                "selectedIconPath": "../../static/icon/luzhi.png",
                "text": ""
            },
            {
                "current": 0,
                "pagePath": "/pages/attention/attention",
                "iconPath": "../../static/icon/guanzhu.png",
                "selectedIconPath": "../../static/icon/guanzhu-action.png",
                "text": "关注"
            },
            {
                "current": 0,
                "pagePath": "/pages/user/user",
                "iconPath": "../../static/icon/user.png",
                "selectedIconPath": "../../static/icon/user-action.png",
                "text": "我的"
            }]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target, router) {
    var that = target;
    var bindData = {};
    var otabbar = tabbarinit();
    otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath'] //换当前的icon
    otabbar[id]['current'] = 1;
    bindData[bindName] = otabbar
    // 判断路由是否处于当前页面，如果是则不跳转，如果不是则进行下一步
    if (router == otabbar[id]['pagePath'].substr(1, otabbar[id]['pagePath'].length)){
        otabbar[id]['pagePath'] = '';
    }
    that.setData({
        bindData
    });
}

module.exports = {
    tabbar: tabbarmain,
}
