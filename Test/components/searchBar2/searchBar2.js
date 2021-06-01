// components/searchBar/searchBar2.js
Component({
  properties: {
    value: {
      type: String,
      value:""
    }
  },
  data: {
  },
  methods: {
    onChange(e) {
      this.setData({
        value: e.detail,
      });
    },

    onClick() {
      if(this.data.value==="")
      {
        wx.showToast({
          title: '请输入内容',
          icon:"none",
          duration:500
        })
      }else{
        this.triggerEvent('search2',{key:this.data.value})
      }
  
    },
  }
})