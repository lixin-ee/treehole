// components/mineList/mineList.js
import {
    myService
} from "../../utils/util"
const pageSize = getApp().globalData.pageSize
Component({
    externalClasses: ['scrollclass'],
    properties: {
        swipesummaryType: {
            type: String,
        },
    },
    data: {
        currentPage: -1,
        dataArray: [],
        state: false,
        atLast: false,
        last: -1
    },
    lifetimes: {
        ready: function () {
            this.onRefresh()
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        OnDelete(e) {
            console.log(e.detail);
            var Ids = this.data.swipesummaryType === "problem" ? [e.detail.sumProblemId] : [e.detail.sumAnswerId];
            myService({
                url: this.data.swipesummaryType,
                success: (res) => {
                    wx.hideLoading()
                    console.log("删除", res)
                    this.data.dataArray[e.detail.page].find((v, i, a) => {
                        if (e.detail.sumProblemId === v.problemId) {
                            a.splice(i, 1)
                            this.setData({
                                ["dataArray[" + e.detail.page + "]"]: a
                            })
                        }
                        return e.detail.sumProblemId === v.problemId
                    })

                    wx.showToast({
                        title: '删除成功',
                        duration: 500,
                    })
                },
                data: Ids,
                fail: (err) => {
                    wx.showToast({
                        title: '删除失败',
                        icon: 'error',
                        duration: 500,
                    })
                    console.log(err)
                },
                method: "DELETE",
            })
        },
        onBottom(e) {
            if (!this.data.atLast) {
                var problemUrl = "problem/myProblems" + "?last=" + this.data.last
                var answerUrl = "answer/myAnswers" + "?last=" + this.data.last
                myService({
                    url: this.data.swipesummaryType === "problem" ? problemUrl : answerUrl,
                    success: (res) => {
                        wx.hideLoading()
                            console.log(res)
                            var redata = res.data.data
                            this.data.currentPage += 1;
                            redata.forEach((v) => {
                                v.page = this.data.currentPage
                            });
                            this.data.last = redata[redata.length-1].tsp
                            if (redata.length === pageSize) {
                                this.data.atLast = false
                            } else {
                                this.data.atLast = true
                            }
                            this.setData({
                                ["dataArray[" + (this.data.currentPage) + "]"]: redata,
                            });
                    },
                    fail: (err) => {
                        wx.showToast({
                            title: '加载失败',
                            icon: 'error',
                            duration: 500
                        })
                    },
                    method: "GET",
                })
            } else {
                wx.showToast({
                    title: '已经到底了',
                    icon: "none",
                    duration: 500
                })
            }
        },
        onRefresh(e) {
            var problemUrl = "problem/myProblems" + "?last=-1"
            var answerUrl = "answer/myAnswers" + "?last=-1"
            myService({
                url: this.data.swipesummaryType === "problem" ? problemUrl : answerUrl,
                success: (res) => {
                    wx.hideLoading()
                    console.log(res)
                        var redata = res.data.data
                        this.data.currentPage = 0
                        redata.forEach((v) => {
                            v.page = 0
                        });
                        if (redata.length === pageSize) {
                            this.data.atLast = false
                        } else {
                            this.data.atLast = true
                        }
                        this.data.dataArray = []
                        this.data.dataArray.push(redata)
                        this.data.last = redata[redata.length-1].tsp
                        console.log(this.data.last)
                        this.setData({
                            dataArray: this.data.dataArray,
                        });
                },
                fail: (err) => {
                    wx.showToast({
                        title: '刷新失败',
                        icon: 'error',
                        duration: 500
                    })
                },
                complete: () => {
                    this.setData({
                        state: false
                    });
                },
                method: "GET",
            })
        },
    }

})