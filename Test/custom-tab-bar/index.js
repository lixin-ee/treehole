Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "/pages/home/home",
        text: "问答"
      }, 
      {
        pagePath: "/pages/mine/mine",
        text: "我的"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      // console.log(this.data)
      // console.log(e)
      const index = e.detail
      // console.log(this.data.list[index].pagePath)
      // const url = data.path

      // switchTab 跳转到Tabbar界面
      wx.switchTab({
        "url": this.data.list[index].pagePath
      })
      // 无法直接对data进行赋值，请使用构造器
      this.setData({
        selected: index
      })

    }
  }
})