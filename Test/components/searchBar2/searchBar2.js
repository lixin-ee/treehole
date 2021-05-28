// components/searchBar/searchBar2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchKey2: {
      type: String,
      value: "",
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:"",
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
      this.data.searchKey2 = this.data.value;
      console.log(this.data.searchKey2)
      console.log("in searchBar2")
      this.setData({
        value: '',
      })
      this.triggerEvent('search2',{searchKey2:this.data.searchKey2})
    },
  }
})