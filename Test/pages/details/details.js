// pages/details/details.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        problem: {
            id: 1,
            author: "author",
            type: "problem",
            content: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
            title: "这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题",
            time: "2021-5-22 10:12",
            tags: [{
                name: "标签1"
            }, {
                name:"标签哈哈哈"
            }, {
                name: "标签2"
            },{
                name: "标签5"
            }, {
                name:"标哈哈"
            }, {
                name: "签前2"
            },{
                name: "哈哈"
            }, {
                name:"标签哈哈"
            }, {
                name: "啦啦啦"
            }],
            avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
        },
        myAnswerList: [{
                id: 1,
                author: "author",
                type: "answer",
                content: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
                time: "2021-5-22 10:12",
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
                id: 2,
                author: "author",
                type: "answer",
                content: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
                time: "2021-5-22 10:12",
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
                id: 3,
                author: "author",
                type: "answer",
                content: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
                time: "2021-5-22 10:12",
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
                id: 4,
                author: "author",
                type: "answer",
                content: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
                time: "2021-5-22 10:12",
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
                id: 5,
                author: "author",
                type: "answer",
                content: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
                time: "2021-5-22 10:12",
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
                id: 6,
                author: "author",
                type: "answer",
                content: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
                time: "2021-5-22 10:12",
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})