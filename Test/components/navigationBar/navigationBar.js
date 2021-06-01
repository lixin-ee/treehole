// components/navigationBar/navigationBar.js
import {
    myService
} from "../../utils/util"
Component({
    properties: {
        navData: {
            type: Object
        }
    },
    data: {},
    pageLifetimes: {},
    lifetimes: {

        ready: function () {
            var tempdata = {}
            myService({
                url: "tag/all",
                success: (res) => {
                    wx.hideLoading()
                    tempdata.navArray = res.data.data;
                    this.setData({
                        navData: tempdata
                    })
                    var current = this.selectComponent(".hometab" + this.data.navData.navArray[0].tagId + ' .homelist')
                    current.onRefresh()
                },

                fail: (err) => {
                    wx.showToast({
                        title: '导航栏获取失败',
                        icon: 'error',
                        duration: 500
                    })
                    console.log(err)
                },
                method: "GET",
            })

        },
    },
    methods: {
        OnChange(e) {
            var current = this.selectComponent(".hometab" + this.data.navData.navArray[e.detail.index].tagId + ' .homelist')
            if (current.data.currentPage === -1)
                current.onRefresh()
        }
    }
})