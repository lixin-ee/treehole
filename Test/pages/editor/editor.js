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
    tabData: [],
    show: false,
    isAnonymous: 0,
    anon: false, //用于将bool类型变量转换为枚举类型
    result: ['1', '2'],
    tempresult: ['1', '2'],
    tempIsAnonymous: 0,
    tempanon: false,
    option: {},
    url: '',
    method: "",
    changed: false
  },
    uploadData() {
      switch (this.data.thisWorkType) {
        case "newProblem":
          return {
            title: this.data.problemTitle,
            isAnonymous: this.data.isAnonymous,
            tagIds: this.data.result,
          }
          break;
        case "newAnswer":
          return {
            problemId: this.data.thisProblemId,
            isAnonymous: this.data.isAnonymous,
          }
          break;
        case "editProblem":
          return {
            title: this.data.problemTitle,
            isAnonymous: this.data.isAnonymous,
            tagIds: this.data.result,
          }
          break;
        case "editAnswer":
          return {
            isAnonymous: this.data.isAnonymous,
          }
          break;
      }

    },
  upload() {
    var patt = /<img\ssrc="http:\/\/tmp\/.*?"/g
    var patt1 = /"(http:\/\/tmp\/.*?)"/
    this.editorCtx.getContents({
      success: (conres) => {
        var det = conres.html;
        var imgs = det.match(patt)
        console.log(imgs)
        if (imgs === null) {
          console.log("no images inserted ")
          var uploadData = this.uploadData()
          uploadData.content=conres.text
          uploadData.detail = det;
          console.log("no", uploadData)
          myService({
            url: this.data.url,
            data: uploadData,
            method: this.data.method,
            success: function (res) {
              wx.hideLoading()
              wx.navigateBack({
                delta:2
              })
              wx.showToast({
                title: '发布成功！',
                duration: 500,
              })
            },
            fail: function (err) {
              wx.showToast({
                title: '发布失败！',
                icon: "error",
                duration: 500,
              })
            }
          })
          return
        } else {
          var sended = 0;
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
                  var uploadData = this.uploadData()
                  uploadData.content=conres.text
                  uploadData.detail = detail;
                  console.log("ha", uploadData)
                  myService({
                    url: this.data.url,
                    data: uploadData,
                    method: this.data.method,
                    success: function (res) {
                      wx.navigateBack({
                        delta:2
                      })
                      wx.showToast({
                        title: '发布成功！',
                        duration: 500,
                      })
                    },
                    fail: function (err) {
                      wx.showToast({
                        title: '发布失败',
                        icon: "error",
                        duration: 500
                      })
                    }
                  })
                }
              },
              fail: (err) => {
                console.log(err)
                wx.showToast({
                  title: '发布失败',
                  icon: "error",
                  duration: 500
                })
              }
            })
          }
        }
      },
      fail: (err) => {
        console.log(err)
        wx.showToast({
          title: '发布失败',
          icon: error,
          duration: 500
        })
      }

    })

  },
  onClickLeft() {
    wx.navigateBack();
  },

  onClickRight(e) {
    wx.showLoading({
      title: '发布中',
      mask: true
    })
    if (this.data.thisWorkType === "newProblem") { // newProblem
      console.log("尝试发布一个新问题")
      if (this.data.problemTitle === "") {
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
      this.upload()
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
      this.upload()
    }
    //编辑问题后的提交
    else if (this.data.thisWorkType == "editProblem") {
      console.log("尝试修改一个问题")
      if (this.data.problemTitle == "") {
        wx.showToast({
          title: '问题标题不能为空！',
          icon: 'none',
          duration: 1500
        })
        console.log('问题修改失败，问题标题为空')
        return
      }
      if (!this.data.changed) {
        wx.showToast({
          title: '问题没有修改！',
          icon: 'none',
          duration: 1500
        })
        console.log('问题修改失败：问题描述为空')
        return
      }
      this.upload()
    } else if (this.data.thisWorkType == "editAnswer") {
      console.log("尝试修改一个回答", this.data.textInput)
      if (!this.data.changed) {
        wx.showToast({
          title: '回答没有修改！',
          icon: 'none',
          duration: 1500
        })
        return
      }
      this.upload()
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
    this.data.changed=true;
  },
  onLoad(option) {
    console.log(option)
    console.log("options-------")
    // console.log(getCurrentPages()）
    //用于获取所有标签，以供选择
    this.setData({
      option: option
    })
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({
      isIOS
    })
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
            this.updatePosition(keyboardHeight)
            this.editorCtx.scrollIntoView()
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
    wx.createSelectorQuery().select('#editor').context((res) => {
      this.editorCtx = res.context
      console.log("ready");
      myService({
        url: "tag/all",
        success: (res) => {
          wx.hideLoading()
          // console.log(res.data)
          this.setData({
            "tabData": res.data.data,
          })
        },
        fail: (err) => {
          // console.log(err)
        },
        method: "GET",
      })

      //界面设置
      if (this.data.option.type === "problem") {
        this.setData({
          pageTitle: "发布新问题",
          titleReadOnly: false,
          thisWorkType: "newProblem",
          url: "problem",
          method: "POST",
        })

      } else if (this.data.option.type === "answer") {
        this.setData({
          url: "answer",
          pageTitle: "写新回答",
          titleReadOnly: true,
          problemTitle: this.data.option.title,
          placeholder: "请输入您的回答",
          thisWorkType: "newAnswer",
          thisProblemId: this.data.option.problemId,
          method: "POST"
        })
     
      } else if (this.data.option.type === "editProblem") {
        this.data.thisProblemId = this.data.option.problemId,
          this.setData({
            url: "problem/" + this.data.thisProblemId,
            thisWorkType: "editProblem",
            method: "PUT",
            titleReadOnly: false,
            isAnonymous: parseInt(this.data.option.isAnonymous),
            tempIsAnonymous: parseInt(this.data.option.isAnonymous),
            anon: (this.data.option.isAnonymous === '1' ? true : false),
            tempanon: (this.data.option.isAnonymous === '1' ? true : false)
          })
        myService({
          url: "problem/" + this.data.thisProblemId,
          success: (res) => {
            wx.hideLoading()
            console.log(res)
            console.log("-------");
            const that = res
            var tempresult1 = []
            for (let i of res.data.data.tags) {
              tempresult1.push(i.tagId + "")
            }
            console.log(tempresult1)
            this.setData({
              problemTitle: res.data.data.title,
              result: tempresult1,
              tempresult: tempresult1,
            })
            this.editorCtx.setContents({
              html: that.data.data.detail,
            })
          },
          fail: (err) => {
            wx.showToast({
              title: '加载失败',
              icon: 'error',
              duration: 500
            })
          },
          method: "GET",
        })
      } else if (this.data.option.type === "editAnswer") {
        this.data.thisProblemId = this.data.option.problemId,
          this.data.thisAnswerId = this.data.option.answerId,
          this.setData({
            thisWorkType: "editAnswer",
            url: "answer/" + this.data.thisAnswerId,
            method: "PUT",
            titleReadOnly: true,
            isAnonymous: parseInt(this.data.option.isAnonymous),
            tempIsAnonymous: parseInt(this.data.option.isAnonymous),
            anon: (this.data.option.isAnonymous === '1' ? true : false),
            tempanon: (this.data.option.isAnonymous === '1' ? true : false)
          }) 
        myService({
            url: "problem/" + this.data.thisProblemId,
            success: (res) => {
              wx.hideLoading()
              this.setData({
                problemTitle: res.data.data.title,
              })
            },
            fail: (err) => {
              wx.showToast({
                title: '加载失败',
                icon: 'error',
                duration: 500
              })
            },
            method: "GET",
          }),
          //获取当前回答的内容
          myService({
            url: "answer/" + this.data.thisAnswerId,
            success: (res) => {
              wx.hideLoading()
              console.log(res)
              console.log("------+-");
              this.editorCtx.setContents({
                html: res.data.data.detail,
                success: () => {}
              })
            },
            fail: (err) => {
              wx.showToast({
                title: '加载失败',
                icon: 'error',
                duration: 500
              })
            },
            method: "GET",
          })
      }
    }).exec()
  },
  onTitleChange() {
    this.data.changed = true;
  },
  showDialog(e) {
    this.setData({
      show: true,
    })
  },
  onConfirm() {
    this.setData({
      isAnonymous: this.data.tempIsAnonymous,
      result: this.data.tempresult,
      anon: this.data.tempanon
    })
    this.data.changed = true;
  },
  onCancel() {
    this.setData({
      tempIsAnonymous: this.data.isAnonymous,
      tempresult: this.data.result,
      tempanon: this.data.anon,
    })
  },
  onChange(event) {
    this.setData({
      tempresult: event.detail,
    });
  },

  // 此函数用于修改是否匿名的状态
  onChange2(event) {
    // console.log(event.detail)
    this.setData({
      tempanon: event.detail,
    });
    this.data.tempIsAnonymous = (this.data.tempanon === true ? 1 : 0);
    console.log(this.data.tempIsAnonymous);
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
})