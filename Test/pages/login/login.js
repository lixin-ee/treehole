
// pages/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  login:function()
  {
     wx.getUserProfile({
       desc: '用于登录树洞匿名社区',
       success:(res1)=>{
        console.log(res1)
         wx.login({
           success:(res2)=>{
               console.log(res2);
             wx.request({
               url: 'http://127.0.0.1:8081/account/login',
               method:"POST",
               data:{
                 wxcode:res2.code,
                 name:res1.userInfo.nickName,
                 avatar:res1.userInfo.avatarUrl
               },
               success:(res3)=>{
                 console.log(res3)
                 if(res3.data.code===200)
                 {
                  getApp().globalData.wxt=res3.data.data
                  console.log(getApp().globalData.wxt)
                  wx.switchTab({
                  url: '/pages/home/home',
                  })
                 }
                 else{
                   console.log("登录失败")
                 }
               },
               fail:(err3)=>{
                console.log(err3)
               }
             })
           },
           fail:(err2)=>{
            console.log(err2);
           }
         })
       },
       fail:(err1)=> {
          console.log(err1)
       }
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})