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

    thisProblemId: 0,
    thisAnswerId: 0,
    thisWorkType: "",
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
    if (this.data.thisWorkType == "newProblem") { // newProblem
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
      const that = this
      myService({
        url: "problem",
        data: {
          title: this.data.problemTitle,
          content: this.data.textInput,
          isAnonymous: this.data.isAnonymous,
          tagIds: this.data.result
        },
        method: "POST",
        success: function (res) {
          console.log("新问题发布成功\nproblemTitle: ", that.data.problemTitle)
          console.log("problemDescription: ", that.data.textInput)
          console.log(res)
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

    } else if (this.data.thisWorkType == "newAnswer") {
      console.log("尝试发布一个新回答", this.data.textInput)
      if (this.data.textInput === "") {
        wx.showToast({
          title: '回答不能为空！',
          icon: 'none',
          duration: 1500
        })
        return
      }
      console.log("新回答发布成功\nanswer: ", this.data.textInput)
    } else if (this.data.thisWorkType == "editProblem") {
      const that = this
      console.log(this.data)
      myService({
        url: "problem/" + this.data.thisProblemId,
        data: {
          title: this.data.problemTitle,
          content: this.data.textInput,
          //TO-DO 如何获得富文本
          detail: this.data.content,
          isAnonymous: this.data.isAnonymous,
          tagIds: this.data.result
        },
        method: "PUT",
        success: function (res) {
          wx.navigateBack()
          wx.showToast({
            title: '问题修改成功！',
            duration: 1500,
          })
        },
        fail: function (err) {
          console.log("问题修改失败")
          console.log(err)
        }
      })
    } else if (this.data.thisWorkType == "editAnswer") {
      const that = this
      myService({
        url: "answer/" + this.data.thisAnswerId,
        data: {
          content: this.data.textInput,
          //TO-DO 如何获得富文本
          detail: this.data.content,
          isAnonymous: this.data.isAnonymous,
        },
        method: "PUT",
        success: function (res) {
          wx.navigateBack()
          wx.showToast({
            title: '回答修改成功！',
            duration: 1500,
          })
        },
        fail: function (err) {
          console.log("回答修改失败")
          console.log(err)
        }
      })
    }
  },

  inputTitle(e) {
    this.setData({
      problemTitle: e.detail
    })
    //console.log(this.data.problemTitle)
  },

  inputEditor(e) {
    console.log(e)
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
    //用于获取所有标签，以供选择
    myService({
      url: "tag/all",
      success: (res) => {
        this.setData({
          "tabData": res.data
        })
      },
      fail: (err) => {
        // console.log(err)
      },
      method: "GET",
    })


    //界面设置
    //类型对应：
    //新问题newProblem，新回答newAnswer，编辑问题editProblem,编辑回答editAnswer

    if (option.type === "problem") {
      var temptype = "newProblem"
      this.data.thisWorkType = "newProblem"
    } else if (option.type === "answer") {
      var temptype = "newAnswer"
      this.data.thisWorkType = "newAnswer"
    } else if (option.type === "editProblem") {
      var temptype = "editProblem"
      this.data.thisProblemId = option.problemId
      this.data.thisWorkType = "editProblem"
    } else if (option.type === "editAnswer") {
      var temptype = "editAnswer"
      this.data.thisWorkType = "editAnswer"
      this.data.thisProblemId = option.problemId
      this.data.thisAnswerId = option.answerId
    }
    //发布新问题
    if (temptype == "newProblem") {
      this.setData({
        pageTitle: "发布新问题",
        titleReadOnly: false
      })
    }
    //发布新回答
    else if (temptype == "newAnswer") {
      this.setData({
        pageTitle: "写新回答",
        titleReadOnly: true,
        problemTitle: "从上一页获取的标题",
        placeholder: "请输入您的回答"
      })
    }
    //编辑问题
    else if (temptype == "editProblem") {
      myService({
        url: "problem/" + this.data.thisProblemId,
        success: (res) => {
          console.log(res)
          console.log("-------");
          const that = res
          this.setData({
            problemTitle: res.data.data.title,
            titleReadOnly: false,
          })
          wx.createSelectorQuery().select('#editor').context(function (res) {
            that.editorCtx = res.context
            console.log(that)
            that.editorCtx.setContents({
              html: that.data.data.detail,
              success: function () {}
            })
          }).exec()
          wx.showLoading({
            title: '加载中',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 500);
        },
        fail: (err) => {
          wx.showToast({
            title: '加载失败',
            icon: 'error',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 500);
        },
        method: "GET",
      })
    }
    //编辑回答
    // else if (temptype == "editAnswer") {
    //   myService({
    //     url: "answer/" + this.data.thisProblemId,
    //     success: (res) => {
    //       console.log(res)
    //       console.log("-------");
    //       const that = res
    //       this.setData({
    //         problemTitle:res.data.data.title,
    //         titleReadOnly:false,
    //       })
    //       wx.createSelectorQuery().select('#editor').context(function (res) {
    //           that.editorCtx = res.context
    //           console.log(that)
    //           that.editorCtx.setContents({
    //               html: that.data.data.detail,
    //               success: function () {}
    //           })
    //       }).exec()
    //       wx.showLoading({
    //         title: '加载中',
    //       })
    //       setTimeout(function () {
    //         wx.hideLoading()
    //       }, 500);
    //     },
    //     fail: (err) => {
    //       wx.showToast({
    //         title: '加载失败',
    //         icon: 'error',
    //       })
    //       setTimeout(function () {
    //         wx.hideLoading()
    //       }, 500);
    //     },
    //     method: "GET",
    //   })
    // }
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