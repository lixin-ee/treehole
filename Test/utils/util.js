const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const baseurl="http://124.70.1.254/"
var myLogin = () => {
  wx.getUserProfile({
    desc: '用于登录树洞匿名社区',
    success: (res1) => {
      wx.showLoading({
        title: '登录中',
        mask: true
      })
      console.log(res1)
      wx.login({
        success: (res2) => {
          console.log(res2);
          wx.request({
            url: baseurl+'account/login',
            method: "POST",
            data: {
              wxcode: res2.code,
              name: res1.userInfo.nickName,
              avatar: res1.userInfo.avatarUrl
            },
            success: (res3) => {
              console.log(res3)
              if (res3.data.code === 200) {
                getApp().globalData.wxt = res3.data.data
                wx.hideLoading()
                console.log(getApp().globalData.wxt)
                wx.switchTab({
                  url: '/pages/home/home',
                })
              } else {
                wx.showToast({
                  title: '登录失败',
                  duration: 500,
                  icon: 'error'
                })
              }
            },
            fail: (err3) => {
              console.log(err3)
              wx.showToast({
                title: '登录失败',
                duration: 500,
                icon: 'error'
              })
            }
          })
        },
        fail: (err2) => {
          console.log(err2);
          wx.showToast({
            title: '登录失败',
            duration: 500,
            icon: 'error'
          })
        }
      })
    },
    fail: (err1) => {
      console.log(err1)
      wx.showToast({
        title: '登录失败',
        duration: 500,
        icon: 'error'
      })
    }
  })
}
var IsLogin=false
var myService = function (p) {
  console.log( {
    wxtoken: getApp().globalData.wxt
  })
 var hideLoad=("hideLoad" in p)?p.hideLoad:false
  if(!hideLoad)
  {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 500);
  }
  
  wx.request({
    url: baseurl + p.url,
    success(res) {
      switch (res.data.code) {
        case 401:
          if(!IsLogin)
          {
            IsLogin=true;
            console.log(res)
            wx.hideLoading()
            console.log("重新登录")
            wx.showModal({
              content: '登录过期，请重新登录',
              title: '提示',
              showCancel: false,
              confirmText: "好的",
              success: (res) => {
                if (res.confirm) {
                  myLogin()
                }
              },
            })
          }
         
          break;
        case 200:
          p.success(res)
          break;
        default:
          // wx.showToast({
          //   title: res.data.msg,
          //   icon:"error",
          //   duration:500
          // })
      }
    },
    fail(err) {
      p.fail(err)

    },
    method: p.method,
    data: p.data,
    header: {
      wxtoken: getApp().globalData.wxt
    },
    complete(){
      if("complete" in p)
       p.complete()
    }
  })
}

module.exports = {
  formatTime,
  myService,
  myLogin
}