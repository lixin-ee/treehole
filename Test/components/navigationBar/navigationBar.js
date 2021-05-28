// components/navigationBar/navigationBar.js
import {
    myService
} from "../../utils/util"
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        navData: {
            type: Object,
            value: {
                navArray: [{
                    tagName: "HTML",
                    tagId: 0,
                }, {
                    tagName: "CSS",
                    tagId: 1,
                }, {
                    tagName: "JavaScript",
                    tagId: 2,
                }],
            },
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    pageLifetimes: {

    },

    lifetimes: {
       created: function () {
            myService({
                url: "tag/all",
                success: (res) => {
                    this.setData({
                        "navData.navArray": res.data.data
                    })
                },
                fail: (err) => {
                    wx.showToast({
                        title: '导航栏获取失败',
                        icon: 'error',
                    })
                    setTimeout(function () {
                        wx.hideLoading()
                    }, 1000);
                    console.log(err)
                },
                method: "GET",
            })
        },

        ready: function () {
            var current = this.selectComponent(".hometab" +this.data.navData.navArray[0].tagId+ ' .homelist')
            // console.log(current)
            current.onRefresh()
            // console.log("'ready' in navigationBar2")
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        OnChange(e) {
            //改变后获得了当前homelist的this对象current，可通过调用current的方法实现切换页面后是否读
            //新内容的操作
            // console.log(".hometab" + this.data.navData.navArray[e.detail.index].tagId)
            var current = this.selectComponent(".hometab" + this.data.navData.navArray[e.detail.index].tagId + ' .homelist')
            // console.log(current)
            if (current.data.currentPage === -1)
                current.onRefresh()
        }
    }
})