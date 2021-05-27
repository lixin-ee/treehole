// pages/details/details.js
import {
    myService
} from "../../utils/util"
Page({
    /**
     * 页面的初始数据
     */
    data: {
        thisProblemId:0,
        myProblem: {
            id: 1,
            author: "author",
            problemId:234,
            type: "problem",
            detail: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
            title: "这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题这是大标题",
            updatetime: "2021-5-22 10:12",
            tags: [{
                tagName: "标签1",
                tagId:234,
            }, {
                tagName: "标签2",
                tagId:345,
            }, {
                tagName: "标签3",
                tagId:654,
            },{
                tagName: "标签4",
                tagId:21234,
            }, {
                tagName: "标签5",
                tagId:235344,
            }, {
                tagName: "标签6",
                tagId:234,
            },{
                tagName: "标签7",
                tagId:234,
            }, {
                tagName: "标签8",
                tagId:234,
            }, {
                tagName: "标签9",
                tagId:234,
            }],
            avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
        },
        myAnswerList: [{
                id: 1,
                anthor: "author",
                type: "answer",
                detail: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
                updatetime: "2021-5-22 10:12",
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
                id: 2,
                anthor: "author",
                type: "answer",
                detail: "这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content这是content",
                updatetime: "2021-5-22 10:12",
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let thisProblemId=options.problemId
        myService({
            url: "problem/" + this.data.thisProblemId ,
            success: (res) => {
                this.setData({
                    myProblem:res.data.data
                });
                this.data.myProblem.type="problem";
                wx.showLoading({
                    title: '加载中',
                })
                setTimeout(function () {
                    wx.hideLoading()
                }, 500);
            },
            fail: (err) => {
                // console.log(err)
                wx.showToast({
                    title: '加载失败',
                    icon: 'error',
                })
                setTimeout(function () {
                    wx.hideLoading()
                }, 500);
            },
            method: "GET",
        }),
        myService({
            url: "answer/" + this.data.thisProblemId ,
            success: (res) => {
                this.setData({
                    myAnswerList:res.data.data
                });
                wx.showLoading({
                    title: '加载中',
                })
                setTimeout(function () {
                    wx.hideLoading()
                }, 500);

            },
            fail: (err) => {
                // console.log(err)
                wx.showToast({
                    title: '加载失败',
                    icon: 'error',
                })
                setTimeout(function () {
                    wx.hideLoading()
                }, 500);
            },
            method: "GET",
        })
       
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