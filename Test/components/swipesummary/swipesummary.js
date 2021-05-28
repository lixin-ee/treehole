// components/swipesummary/swipesummary.js



Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sumData: {
      type: Object,
      value: {
        workType:"problem",
        answerId: 0,
        title: "biaoti0",
        problemId: 123,
        updateTime: "2021-5-22 10:12",
        isAnonymous:0,
        content: "There's no content 234254363463453253",
        tags: [{
            tagName: "tag1",
            tagId: "1",
          },
          {
            tagName: "tag3",
            tagId: "3",
          },
          {
            tagName: "tag9",
            tagId: "9",
          },
          {
            tagName: "tag6666",
            tagId: "6666",
          },
          {
            tagName: "tag123",
            tagId: "123",
          },
          {
            tagName: "tag123",
            tagId: "123",
          },
          {
            tagName: "tag123",
            tagId: "123",
          },
          {
            tagName: "tag123",
            tagId: "123",
          },
        ],
        avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
      },
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
    clickSwipesummary() {
      // console.log(this.data.sumData)
      wx.navigateTo({
        url: "/pages/details/details?problemId=" + this.data.sumData.problemId,
      })
    },
    toEdit(e)
    {
        //console.log(e)
       wx.navigateTo({
         url:"/pages/editor/editor?problemId="+this.data.sumData.problemId+"&type="+this.data.sumData.workType+"&answerId="+this.data.sumData.answerId,
       })
    },
    toDelete:function(e) {
      wx.showModal({
        title: '提示',
        content: '确认要删除吗？',
        success:(res)=> {
          if (res.confirm) {
            console.log('用户点击确定')
            this.triggerEvent('myEvent',{sumProblemId:this.data.sumData.problemId,sumAnswerId:this.data.sumData.answerId,sumWorkType:this.data.sumData.workType})
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        },
        fail: (err) => {
          wx.showToast({
              title: '加载失败',
              icon: 'error',
          })
          setTimeout(function () {
              wx.hideLoading()
          }, 1000);
          console.log(err)
      },
      })
    },
    onClose:function(e){
      this.setData({
        sumData:this.data.sumData
      })
    },
  }

})