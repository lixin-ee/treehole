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

var myService=function(p){
  var baseUrl="http://124.70.1.254:3000/mock/11/"
  wx.request({
    url: baseUrl+p.url,
    success:p.success,
    fail:p.fail,
    method:p.method,
    data:p.data,
    header:p.header,
  })
}

module.exports = {
  formatTime,
  myService
}

