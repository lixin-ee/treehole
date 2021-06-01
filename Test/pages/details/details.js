// pages/details/details.js
import {
    myService
} from "../../utils/util"
const pageSize = getApp().globalData.pageSize
Page({
    /**
     * 页面的初始数据
     */
    data: {
        dataArray: [],
        myProblem: {},
        currentPage: -1,
        state: false,
        atLast: false,
        last: -1
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.data.myProblem.problemId=options.problemId
        this.refresh()
    },
    refresh() {
        var fin = 0
        myService({
            url: "problem/" +this.data.myProblem.problemId,
            success: (res) => {
                console.log(res)
                var tempproblem=res.data.data
                tempproblem.problemId=this.data.myProblem.problemId
                this.setData({
                   myProblem: tempproblem
                })
                this.selectComponent(".workdetail").refresheditor()
            },
            fail: (err) => {
                fin+=1
                console.log(err)
                wx.showToast({
                    title: '加载失败',
                    icon: 'error',
                    duration: 500
                })
            },
            method: "GET",
        })
        myService({
            url: "answer/problem/" + this.data.myProblem.problemId + "?last=-1",
            success: (res) => {
                fin += 1
                console.log(res)
                this.data.currentPage = 0
                var redata = res.data.data
                this.data.last = redata[redata.length - 1].tsp
                if (res.data.data.length === pageSize) {
                    this.data.atLast = false
                } else {
                    this.data.atLast = true
                }
                this.data.dataArray = []
                this.data.dataArray.push(redata)
                this.setData({
                    dataArray: this.data.dataArray,
                });
                redata.forEach((v,i)=>{
                 console.log(".answer"+this.data.currentPage+"-"+i)
                   this.selectComponent(".answer"+this.data.currentPage+"-"+i).refresheditor() 
                })
              
                wx.showToast({
                    title: '刷新成功',
                    icon:"success",
                    duration:500,
                })
            },
            fail: (err) => {
                fin+=1
                console.log(err)
                wx.showToast({
                    title: '刷新失败',
                    icon: 'error',
                    duration: 500
                })
            },
            method: "GET",
        })
    },
    onBottom() {
        if (!this.data.atLast) {
            myService({
                url: "answer/problem/" + this.data.myProblem.problemId + "?last=" + this.data.last,
                success: (res) => {
                    var redata = res.data.data
                    this.data.currentPage += 1;
                    this.data.last = redata[redata.length-1].tsp
                    if (res.data.data.length === pageSize) {
                        this.data.atLast=false
                    } else {
                        this.data.atLast = true
                    }
                    this.setData({
                        ["dataArray[" + (this.data.currentPage) + "]"]: redata,
                    });
                },
                fail: (err) => {
                    console.log(err)
                    wx.showToast({
                        title: '加载失败',
                        icon: 'error',
                        duration: 500
                    })
                },
                method: "GET",
            })
        }else {
            wx.showToast({
                title: '已经到底了',
                icon: "none",
                duration: 500
            })
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

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
        wx.stopPullDownRefresh()
       this.refresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.onBottom()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})