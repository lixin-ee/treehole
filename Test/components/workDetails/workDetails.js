// components/workDetail/workDetails.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        workData: {
            type: Object,
            value: {
                id: 1,
                author: "author",
                type: "problem",
                content: "11111111111222222222222222233333333333333333444445555555555555666666666666666667777777777777777777788888888888888888888889999999999999999900000000000000000000",
                title: "How to complete miniprogram",
                time: "2021-5-22 10:12",
                tags: [{
                    name: "标签1"
                }, {
                    name: "标签哈哈哈"
                }, {
                    name: "标签2"
                }],
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    lifetimes: {
        // ready: function () {
        //     // this.selectComponent("#editor")
        //     const that = this
        //     wx.createSelectorQuery().select('#editor').context(function (res) {
        //       that.editorCtx = res.context
        //     }).exec()
        // }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})