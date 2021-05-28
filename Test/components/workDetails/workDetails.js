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
                problemId: 123,
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
            console.log(this.data.workData)
            wx.navigateTo({
                url: "/pages/editor/editor?type=answer&title=" + this.data.workData.title + "&problemId=" + this.data.workData.problemId
            })
        },

        onEditorReady() {
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