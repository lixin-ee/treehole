// components/myInfo/myInfo.js
import {
    myService
} from "../../utils/util"
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        infoData: {
            type: Object,
            value: {
                problemNum: "110",
                answerNum: "534"
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
    
     */
    lifetimes:{
        ready() {
            myService({
                url:"account/info",
                success:(res)=>{
                    // console.log(res)
                    this.setData({
                       "infoData":res.data.data
                    })
                },
                fail:(err)=>{
                        wx.showToast({
                            title: '个人信息加载失败',
                            icon: 'error',
                        })
                        setTimeout(function () {
                            wx.hideLoading()
                        }, 1000);
                        console.log(err)
                    },
                method:"GET",
            })
        }
    },

    methods: {
        
    }
})