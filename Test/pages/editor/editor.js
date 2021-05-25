Page({
  data: {
    formats: {},
    titleReadOnly: true,
    problemTitle: "",
    readOnly: false,
    placeholder: '请输入问题详情',
    editorHeight: 30,
    keyboardHeight: 0,
    isIOS: false,
    textInput: ""

  },

  properies: {

  },

  onClickLeft() {
    /*
    wx.navigateBack({
      delta: 2,
    })
    */
    console.log( getCurrentPages())
    wx.navigateTo({
      url: 'pages/home/home',
    })
  },

  onClickRight(e) {
    console.log(this.data.titleReadOnly)
    //var temp
    //this.editorCtx.
    if (!this.data.titleReadOnly) { // newProblem
      if (this.data.problemTitle == "") {
        wx.showToast({
          title: '标题不能为空！',
          icon: 'none',
          duration: 1500
        })
        return
      }
      if (this.data.textInput == "") {
        wx.showToast({
          title: '问题描述不能为空！',
          icon: 'none',
          duration: 1500
        })
        return
      }
      console.log("problemTitle: ",this.data.problemTitle)
      console.log("problemDescription: ",this.data.textInput)
    } else {
      if (this.data.textInput == "") {
        wx.showToast({
          title: '回答不能为空！',
          icon: 'none',
          duration: 1500
        })
        return
      }
      console.log("answer: ",this.data.textInput)
    }


  },

  inputTitle(e) {
    this.setData({
      problemTitle: e.detail
    })
    console.log(this.data.problemTitle)
  },

  inputEditor(e) {
    //console.log(e.detail.text)
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
    var temptype = "newProblem";
    //temptype = "newAnswer"
    console.log(temptype)
    if (temptype == "newProblem") {
      this.setData({
        titleReadOnly: false
      })
    } else {
      this.setData({
        titleReadOnly: true,
        problemTitle: "从上一页获取的标题",
        placeholder: "请输入您的回答"
      })
    }
    //console.log(option.query)
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
  }
})