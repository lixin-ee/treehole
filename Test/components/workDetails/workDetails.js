// components/workDetail/workDetails.js
import {
    myService
} from "../../utils/util"
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        workType: {
            type: String,
            value: "problem",
        },
        workData: {
            type: Object,
            value: {
                author: "author",
                anthor: "anthor",
                detail: "111",
                title: "How to complete miniprogram",
                updateTime: "2021-5-22 10:12",
                tags: [{
                    tagName: "标签1",
                    tagId: 345
                }, {
                    tagName: "标签哈哈哈",
                    tagId: 567,
                }, {
                    tagName: "标签2",
                    tagId: 54564
                }],
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            }
        },

    },

    /**
     * 组件的初始数据
     */
    data: {


    },
    lifetimes: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        clickAddAnswer() {
            wx.navigateTo({
                url: "/pages/editor/editor?type=" + this.data.workData.title
            })
        },

        onEditorReady() {
            // console.log(this.data.workData)
            // console.log("------------")
            const that = this
            this.createSelectorQuery().select('#editor1').context(function (res) {
                that.editorCtx = res.context
                that.editorCtx.setContents({
                    html: that.data.workData.detail,
                    success: function () {}
                })

            }).exec()
        },
    },
})