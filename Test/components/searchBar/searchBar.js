// components/searchBar/searchBar.js
Component({
  properties: {
 value:{
   type:String,
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
      console.log(this.data.value)
      if(this.data.value==="")
      {
        wx.showToast({
          title: '请输入内容',
          icon:"none",
          duration:500
        })
      }else{
        wx.navigateTo({
          url: '/pages/search/search?key=' + this.data.value,
        })
      }

    },
  }
})