import {
    myService
} from "../../utils/util"


Component({

    externalClasses: ['scrollclass'],
    /**
     * 组件的属性列表
     */
    properties: {
       searchKey:
       {
           type:String,
           value:"",
       }
    },

    /**
     * 组件的初始数据
     */
    data: {
        //TO-DO 从服务器获得summary列表并展示 此处仅供参考
        mykey:"",
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
            console.log("------------0")
            this.data.currentPage += 1;
            myService({
                url: "problem/keyword/" + this.data.searchKey + "?pageNum=" + (this.data.currentPage + 2),
                success: (res) => {
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
            console.log(this)
            console.log(this.data.currentPage)
            console.log("123123---")
            myService({
                url: "problem/keyword/" + this.data.searchKey + "?pageNum=" + (this.data.currentPage + 2),
                success: (res) => {
                    this.data.currentPage += 1;
                    var redata = res.data.data
                    this.data.dataArray = []
                    this.data.dataArray.push(redata)
                    this.setData({
                        dataArray: this.data.dataArray,
                        state: false
                    });
                    wx.showLoading({
                        title: '刷新中',
                    })
                    setTimeout(function () {
                        wx.hideLoading()
                    }, 500);
                },
                fail: (err) => {
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
})