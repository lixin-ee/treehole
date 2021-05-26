// components/swipesummary/swipesummary.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sumData: {
      type: Object,
      value: {
        id: 0,
        title: "biaoti0",
        problemId: 123,
        time: "2021-5-22 10:12",
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
      console.log(this.data.sumData)
      // var str = JSON.stringify(this.data.problemId)
      wx.navigateTo({
        url: '/pages/details/details?' + this.data.problemId,
      })
    }
  }
})