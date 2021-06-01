// pages/mine/mine.js
Page({
    data: {},
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            })
        }
    },
    clickAddProblem() {
        wx.navigateTo({
            url: "/pages/editor/editor?type=" + "problem",
        })
    },
    onLoad: function (options) {

    },
    onReady: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
})