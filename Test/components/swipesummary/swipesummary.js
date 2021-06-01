// components/swipesummary/swipesummary.js
Component({
  properties: {
    workType: {
      type: String,
    },
    sumData: {
      type: Object,
    }
  },
  data: {

  },
  methods: {
    clickSwipesummary() {
      wx.navigateTo({
        url: "/pages/details/details?problemId=" + this.data.sumData.problemId,
      })
    },
    onClose(event) {
      const {
        position,
        instance
      } = event.detail;
      switch (position) {
        case 'left':
          var editType;
          if (this.data.workType === "answer") {
            editType = "editAnswer"
          } else {
            editType = "editProblem"
          }
          wx.navigateTo({
            url: "/pages/editor/editor?problemId=" + this.data.sumData.problemId + "&type=" + editType + "&answerId=" + this.data.sumData.answerId + "&isAnonymous=" + this.data.sumData.isAnonymous
          })
          instance.close();
          break;
        case 'cell':
          instance.close()
          break;
        case 'right':
          wx.showModal({
            title: '提示',
            content: '确认要删除吗？',
            success: (res) => {
              if (res.confirm) {
                console.log('用户点击确定')
                this.triggerEvent('myEvent', {
                  sumProblemId: this.data.sumData.problemId,
                  sumAnswerId: this.data.sumData.answerId,
                  sumWorkType: this.data.workType,
                  page: this.data.sumData.page
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            },
          })
          instance.close();
          break;
      }
    }
  }

})