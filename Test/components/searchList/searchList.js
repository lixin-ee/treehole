import {
    myService
} from "../../utils/util"

const pageSize = getApp().globalData.pageSize
Component({

    externalClasses: ['scrollclass'],
    properties: {
        searchKey: {
            type: String
        }
    },
    data: {
        currentPage: -1,
        dataArray: [],
        state: false,
        atLast: false,
        last: -1
    },

    methods: {
        onBottom(e) {
            if (!this.data.atLast) {
                myService({
                    url: "problem/keyword/" + this.data.searchKey + "?last=" + this.data.last,
                    success: (res) => {
                        wx.hideLoading()
                        console.log(res)
                        var redata = res.data.data
                        this.data.currentPage += 1;
                        this.data.last = redata[redata.length - 1].score
                        if (res.data.data.length === pageSize) {
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
            myService({
                url: "problem/keyword/" + this.data.searchKey + "?last=-1",
                success: (res) => {
                    wx.hideLoading()
                    console.log(res)
                    this.data.currentPage = 0
                    var redata = res.data.data
                    this.data.last = redata[redata.length - 1].score
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

    },
    lifetimes: {

    }
})