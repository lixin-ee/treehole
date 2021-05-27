
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        sumData: {
            type: Object,
            value: [{
                title: "biaoti0",
                id:123,
                author: "NoName",
                problemId:124324,
                content: "There's no content",
                tags: [{ tagName: "hhhh", tagId: 23232 }, { tagName: "fjeife", tagId: 43434 }],
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            }
            ],
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
    methods: {
        clickSummary() {
            // console.log(this.data.sumData.problemId)
            wx.navigateTo({
                url: '/pages/details/details?problemId=' + this.data.sumData.problemId,
            })
        }
    }
})

