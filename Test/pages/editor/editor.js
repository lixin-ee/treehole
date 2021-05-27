import {
  myService
} from "../../utils/util"
Page({
  data: {
    pageTitle: "",
    formats: {},
    titleReadOnly: true,
    problemTitle: "",
    readOnly: false,
    placeholder: '请输入问题详情',
    editorHeight: 30,
    keyboardHeight: 0,
    isIOS: false,
    textInput: "",
    problemId: 0,
    //tempType: "",

    //用于修改时，获得原本的信息
    sumData: [{

    }],

    tabData: [{
        tagName: "Q",
        tagId: "1234",
      },
      {
        tagName: "B",
        tagId: "145",
      }
    ],

    show: false,

    isAnonymous: 0,
    anon: false, //用于将bool类型变量转换为枚举类型

    result: ['1', '2'],
  },

  onClickLeft() {
    wx.navigateBack();
  },

  onClickRight(e) {
    if (!this.data.titleReadOnly) { // newProblem
      console.log("尝试发布一个新问题")
      if (this.data.problemTitle == "") {
        wx.showToast({
          title: '问题标题不能为空！',
          icon: 'none',
          duration: 1500
        })
        console.log('新问题发布失败，问题标题为空')
        return
      }
      if (this.data.textInput === "" || this.data.textInput == "\n") {
        wx.showToast({
          title: '问题描述不能为空！',
          icon: 'none',
          duration: 1500
        })
        console.log('新问题发布失败：问题描述为空')
        return
      }

      var sended = 0;
      const that = this
      var noImage = false;
      this.editorCtx.getContents({
        success: (res) => {
          var det = res.html;
          var patt = /<img\ssrc=".*?"/g
          var patt1 = /"(.*?)"/
          var imgs = det.match(patt)
          console.log(imgs)
          if (imgs === null) {
            console.log("no images inserted ")
            myService({
              url: "problem",
              data: {
                title: that.data.problemTitle,
                content: that.data.textInput,
                isAnonymous: that.data.isAnonymous,
                tagIds: that.data.result,
                detail: det
              },
              method: "POST",
              success: function (res) {
                console.log("不带有图片的新问题发布成功")
                //console.log("不带有图片的新问题发布成功\nproblemTitle: ", that.data.problemTitle)
                //console.log("problemDescription: ", that.data.textInput)
                //console.log(det)
                wx.navigateBack()
                wx.showToast({
                  title: '发布成功！',
                  duration: 1500,
                })
              },
              fail: function (err) {
                console.log("新问题发布失败")
                console.log(err)
              }
            })
            return
          } else {
            var imgpaths = []
            for (let i in imgs) {
              console.log(imgs[i].match(patt1))
              wx.uploadFile({
                filePath: imgs[i].match(patt1)[1],
                name: 'image',
                url: 'https://www.hualigs.cn/api/upload',
                formData: {
                  apiType: "bilibili",
                  token: "36028cba8df48971e3a8618d038291f2",
                  floder: 1091
                },
                success: (res) => {
                  //console.log(res)
                  var resdata = JSON.parse(res.data)
                  sended += 1
                  imgpaths[i] = resdata.data.url.bilibili;
                  if (sended === imgs.length) {
                    var idx = 0;
                    var detail = det.replace(patt, () => {
                      return '<img src=' + '"' + imgpaths[idx++] + '"';
                    })
                    //console.log(imgpaths)
                    console.log("image[i] uploaded, detail: ", detail)
                    //接下来已经拿到了detail
                    //直接执行myService，把detail放进myService的data里
                    //就在此处执行
                    myService({
                      url: "problem",
                      data: {
                        title: that.data.problemTitle,
                        content: that.data.textInput,
                        isAnonymous: that.data.isAnonymous,
                        tagIds: that.data.result,
                        detail: detail
                      },
                      method: "POST",
                      success: function (res) {
                        console.log("带有图片的新问题发布成功")
                        // console.log("带有图片的新问题发布成功\nproblemTitle: ", that.data.problemTitle)
                        // console.log("problemDescription: ", that.data.textInput)
                        // console.log(detail)
                        wx.navigateBack()
                        wx.showToast({
                          title: '发布成功！',
                          duration: 1500,
                        })
                      },
                      fail: function (err) {
                        console.log("新问题发布失败")
                        console.log(err)
                      }
                    })
                  }
                },
                fail: (err) => {
                  console.log(err)
                }
              })
            }
          }
        },
        fail: (err) => {
          console.log(err)
        }

      })

    } else {
      console.log("尝试发布一个新回答", this.data.textInput)
      if (this.data.textInput === "") {
        wx.showToast({
          title: '回答不能为空！',
          icon: 'none',
          duration: 1500
        })
        return
      }
      var sended = 0;
      const that = this
      var noImage = false;
      this.editorCtx.getContents({
        success: (res) => {
          var det = res.html;
          var patt = /<img\ssrc=".*?"/g
          var patt1 = /"(.*?)"/
          var imgs = det.match(patt)
          console.log(imgs)
          if (imgs === null) {
            console.log("no images inserted ")
            myService({
              url: "answer",
              data: {
                content: that.data.textInput,
                isAnonymous: that.data.isAnonymous,
                problemId: 1,
                detail: det
              },
              method: "POST",
              success: function (res) {
                console.log("不带有图片的新回答发布成功")
                //console.log("不带有图片的新问题发布成功\nproblemTitle: ", that.data.problemTitle)
                //console.log("problemDescription: ", that.data.textInput)
                //console.log(det)
                wx.navigateBack()
                wx.showToast({
                  title: '发布成功！',
                  duration: 1500,
                })
              },
              fail: function (err) {
                console.log("新回答发布失败")
                console.log(err)
              }
            })
            return
          } else {
            var imgpaths = []
            for (let i in imgs) {
              console.log(imgs[i].match(patt1))
              wx.uploadFile({
                filePath: imgs[i].match(patt1)[1],
                name: 'image',
                url: 'https://www.hualigs.cn/api/upload',
                formData: {
                  apiType: "bilibili",
                  token: "36028cba8df48971e3a8618d038291f2",
                  floder: 1091
                },
                success: (res) => {
                  //console.log(res)
                  var resdata = JSON.parse(res.data)
                  sended += 1
                  imgpaths[i] = resdata.data.url.bilibili;
                  if (sended === imgs.length) {
                    var idx = 0;
                    var detail = det.replace(patt, () => {
                      return '<img src=' + '"' + imgpaths[idx++] + '"';
                    })
                    //console.log(imgpaths)
                    console.log("image[i] uploaded, detail: ", detail)
                    //接下来已经拿到了detail
                    //直接执行myService，把detail放进myService的data里
                    //就在此处执行
                    myService({
                      url: "problem",
                      data: {

                        content: that.data.textInput,
                        isAnonymous: that.data.isAnonymous,
                        problemId: that.data.problemId,
                        detail: detail
                      },
                      method: "POST",
                      success: function (res) {
                        console.log(detail)
                        console.log("带有图片的新问题发布成功")
                        // console.log("带有图片的新问题发布成功\nproblemTitle: ", that.data.problemTitle)
                        // console.log("problemDescription: ", that.data.textInput)
                        // console.log(detail)
                        wx.navigateBack()
                        wx.showToast({
                          title: '发布成功！',
                          duration: 1500,
                        })
                      },
                      fail: function (err) {
                        console.log("新问题发布失败")
                        console.log(err)
                      }
                    })
                  }
                },
                fail: (err) => {
                  console.log(err)
                }
              })
            }
          }
        },
        fail: (err) => {
          console.log(err)
        }
      })
      // myService({
      //   url: "answer",
      //   data: {
      //     content: that.data.textInput,
      //     isAnonymous: that.data.isAnonymous,
      //     problemId: 0,
      //   },
      //   success: function (res) {
      //     console.log("新回答发布成功\nanswer: ", that.data.textInput)
      //     console.log(res)
      //     wx.navigateBack()
      //     wx.showToast({
      //       title: '发布成功！',
      //       duration: 1500,
      //     })
      //   },
      //   fail: function (err) {
      //     console.log("新回答发布失败")
      //     console.log(err)
      //   }
      // })
    }
  },

  inputTitle(e) {
    this.setData({
      problemTitle: e.detail
    })
    //console.log(this.data.problemTitle)
  },

  inputEditor(e) {
    //console.log(e)
    this.setData({
      textInput: e.detail.text
    })

  },

  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },

  setReadOnly() {
    this.setData({
      readOnly: true,
    })
  },

  setNotReadOnly() {
    this.setData({
      readOnly: false,
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  onLoad(option) {
    console.log(option)
    console.log("options-------")
    console.log(getCurrentPages())
    //用于获取所有标签，以供选择
    myService({
      url: "tag/all",
      success: (res) => {
        // console.log(res.data)
        this.setData({
          "tabData": res.data,
          problemId: option.problemId
        })
      },
      fail: (err) => {
        // console.log(err)
      },
      method: "GET",
    })


    //界面设置
    var temptype = (option.type === "problem" ? "newProblem" : "newAnswer");
    //temptype = "newAnswer"
    console.log(temptype)
    if (temptype == "newProblem") {
      this.setData({
        pageTitle: "发布新问题",
        titleReadOnly: false
      })
    } else {
      this.setData({
        pageTitle: "写新回答",
        titleReadOnly: true,
        problemTitle: option.type,
        placeholder: "请输入您的回答"
      })
    }
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({
      isIOS
    })
    const that = this
    this.updatePosition(0)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)

    })
  },
  updatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const {
      windowHeight,
      platform
    } = wx.getSystemInfoSync()
    let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    this.setData({
      editorHeight,
      keyboardHeight
    })
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = wx.getSystemInfoSync()
    const {
      statusBarHeight,
      platform
    } = systemInfo
    const isIOS = platform === 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  blur() {
    this.editorCtx.blur()
  },
  format(e) {
    let {
      name,
      value
    } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({
      formats
    })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },

  onClose() {
    this.setData({
      show: false
    });
  },

  showDialog(e) {
    this.setData({
      show: true,
    })
  },

  onChange(event) {
    this.setData({
      result: event.detail,
    });
  },

  // 此函数用于修改是否匿名的状态
  onChange2(event) {
    // console.log(event.detail)
    this.setData({
      anon: event.detail,
    });
    this.data.isAnonymous = (this.data.anon === true ? 1 : 0);
    console.log(this.data.isAnonymous);
  },


})