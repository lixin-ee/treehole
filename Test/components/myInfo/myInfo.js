// components/myInfo/myInfo.js
import {
    myService
} from "../../utils/util"
Component({
    properties: {
        infoData: {
            type: Object,
        }
    },
    data: {

    },
    lifetimes: {
        ready() {
         this.refresh()
        }
    },
    pageLifetimes: {
      show(){
          this.refresh()
      }
    },
    methods: {
       refresh()
       {
        myService({
            hideLoad:true,
            url: "account/info",
            success: (res) => {
                    this.setData({
                        "infoData": res.data.data
                    })
            },
            fail: (err) => {
                wx.showToast({
                    title: '个人信息加载失败',
                    icon: 'error',
                    duration: 500
                })
                console.log(err)
            },
            method: "GET",
        })
       }
    }
})