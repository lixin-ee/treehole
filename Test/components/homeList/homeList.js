// components/homeList/homeList.js

// js文件用于实现动态函数 如从服务器获取数据
// Component表示此为一个组件 而非页面(Page)
// 组件的其他属性、函数请查阅微信开发者文档，如生命周期函数lifetimes，pageLifetimes
// JSON是配置文件
import {
    myService
} from "../../utils/util"


Component({

    externalClasses: ['scrollclass'],
    /**
     * 组件的属性列表
     */
    properties: {
        tagId: {
            type: Number,
            value: 1,
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        //TO-DO 从服务器获得summary列表并展示 此处仅供参考
        currentPage: -1,
        dataArray: [],
        state: false,
    },

    // },

    /**
     * 组件的方法列表
     */

    methods: {
        onBottom(e) {
            this.data.currentPage += 1;
            myService({
                url: "problem/tag/" + this.data.tagId + "?pageNum=" + (this.data.currentPage + 2),
                success: (res) => {
                    // console.log(res)
                    var redata = res.data.data
                    this.data.dataArray.push(redata)
                    this.setData({
                        dataArray: this.data.dataArray,
                        state: false
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

        onRefresh(e) {
                myService({
                    url: "problem/tag/" + this.data.tagId + "?pageNum=" + (this.data.currentPage + 2),
                    success: (res) => {
                        this.data.currentPage += 1;
                        var redata = res.data.data
                        this.data.dataArray = []
                        this.data.dataArray.push(redata)
                        this.setData({
                            dataArray: this.data.dataArray,
                            state: false
                        });
                        // console.log(this.data.dataArray)
                        wx.showLoading({
                            title: '刷新中',
                        })
                        setTimeout(function () {
                            wx.hideLoading()
                        }, 500);
                    },
                    fail: (err) => {
                        // console.log(err)
                        wx.showToast({
                            title: '刷新失败',
                            icon: 'error',
                        })
                        setTimeout(function () {
                            wx.hideLoading()
                        }, 500);
                    },
                    method: "GET",
                })
        },

    },
    lifetimes: {
        // ready: function () {
        // }
    }
})