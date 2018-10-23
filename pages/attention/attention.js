var app = getApp()

var util = require('../../utils/util.js')
var tabbar = require("../components/tabbar/tabbar.js");

Page({
    onLoad: function () {
        tabbar.tabbar("tabBar", 3, this, util.getRouter())//0表示第一个tabbar
    },
})
