// pages/details/details.js
import {
    myService
} from "../../utils/util"
Page({
    /**
     * 页面的初始数据
     */
    data: {
     myProblem:{},
     problemId:undefined
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.data.problemId=options.problemId
        console.log(this.data.problemId)
        myService({
            url: "problem/" +this.data.problemId ,
            success: (res) => {
                console.log(res)
                this.setData({
                    myProblem:res.data.data,
                    problemId:options.problemId
                });
                this.selectComponent
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
            url: "answer/problem/" + this.data.problemId+"?pageNum=1" ,
            success: (res) => {
                console.log(res)
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
                 console.log(err)
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