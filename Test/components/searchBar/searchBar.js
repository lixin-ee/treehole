// components/searchBar/searchBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
              value: '',
              proValue:'123',
            },
            

    /**
     * 组件的方法列表
     */
    methods: {
      onChange(e) {
        this.setData({
          value: e.detail,
        });
      },

      onClick() {
      console.log(this.data.value)
        wx.navigateTo({
          url: '/pages/search/search?key='+this.data.value,
        })
      },
    }
})
