Component({
    properties: {
        sumData: {
            type: Object
        }
    },
    data: {

    },
    methods: {
        clickSummary() {
            console.log(this.data.sumData.problemId)
            wx.showToast({
                title: 'title',
            })
            wx.showLoading({
                title: '加载中',
                mask: true
            })
            wx.navigateTo({
                url: '/pages/details/details?problemId=' + this.data.sumData.problemId,
            })
        }
    }
})