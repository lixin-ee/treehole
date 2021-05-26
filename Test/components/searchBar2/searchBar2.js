// components/searchBar/searchBar2.js
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
    searchKey: '',
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
      // Toast('搜索' + this.data.value);
      // console.log(this.data.value)
      // wx.navigateBack({
      //   delta: 0,
      // })
      // wx.navigateTo({
      //   url: '/pages/search/search?key='+this.data.value,
      // })
      this.data.searchKey = this.data.value;
      console.log(this.data.searchKey)
      this.setData({
        value:'',
      })
    },
  }
})