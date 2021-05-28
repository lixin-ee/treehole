// components/mineList/mineList.js

import {
    myService
} from "../../utils/util"

Component({

    externalClasses: ['scrollclass'],
    /**
     * 组件的属性列表
     */
    properties: {
        swipesummaryType: {
            type: String,
            value: "problems"
        },

        swipesummaryList: {
            type: Object,
            value: [{
                    id: 1,
                    workType:"",
                    title: "标题一",
                    problemId: 106438,
                    updateTime: "2021-5-22 10:12",
                    isAnonymous: 0,
                    content: "今天写了一篇文章，不多不少，刚好一共二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积分很深刻的房间has你就看到12342354325436532625435今天写了一篇文章，不多不少，刚好一共二十个字二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积",
                    tags: [{
                            tagName: "tag1",
                            tagId: "1",
                        },
                        {
                            tagName: "tag3",
                            tagId: "3",
                        },
                        {
                            tagName: "tag9",
                            tagId: "9",
                        },
                        {
                            tagName: "tag6666",
                            tagId: "6666",
                        },
                        {
                            tagName: "tag123",
                            tagId: "123",
                        },
                        {
                            tagName: "tag123",
                            tagId: "123",
                        },
                        {
                            tagName: "tag123",
                            tagId: "123",
                        },
                        {
                            tagName: "tag123",
                            tagId: "123",
                        },
                        {
                            tagName: "tag123",
                            tagId: "123",
                        },
                    ],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 2,
                    workType:"",
                    title: "标题一",
                    problemId: 106438,
                    updateTime: "2021-5-22 10:12",
                    isAnonymous: 0,
                    content: "今天写了一篇文章，不多不少，刚好一共二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积分很深刻的房间has你就看到12342354325436532625435今天写了一篇文章，不多不少，刚好一共二十个字二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积",
                    tags: [{
                            tagName: "tag1",
                            tagId: "1",
                        },
                        {
                            tagName: "tag3",
                            tagId: "3",
                        },
                        {
                            tagName: "tag9",
                            tagId: "9",
                        },
                        {
                            tagName: "tag6666",
                            tagId: "6666",
                        },
                        {
                            tagName: "tag123",
                            tagId: "123",
                        },
                    ],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
            ]
        },
        
    },

    /**
     * 组件的初始数据
     */
    data: {
        //TO-DO 从服务器获得summary列表并展示 此处仅供参考
        state: false,
    },

    //TO-DO 从父组件传递id给子组件，以判断是执行显示问题还是显示回答
    lifetimes: {
        ready: function () {
            if (this.data.swipesummaryType === "problems") {
                myService({
                    url: "problem/myProblems"+"?pageNum=1",
                    success: (res) => {
                        console.log("mincheng",res)
                        this.setData({
                            swipesummaryList: res.data.data,
                            state: false
                        });
                        for(var i=0;i<this.data.swipesummaryList.length;i++)
                        {
                            this.setData({
                                [`swipesummaryList[${i}].workType`]:"editProblem",
                            })
                        }
                        wx.showLoading({
                            title: '加载中',
                        })
                        setTimeout(function () {
                            wx.hideLoading()
                        }, 500);

                    },
                    fail: (err) => {
                        console.log("fail",err)
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
            else
            {
                myService({
                    url: "answer/myAnswers"+"?pageNum=1",
                    success: (res) => {
                        console.log("min2",res)
                        this.setData({
                            swipesummaryList: res.data.data,
                            state: false
                        });
                        for(var i=0;i<this.data.swipesummaryList.length;i++)
                        {
                            this.setData({
                                [`swipesummaryList[${i}].workType`]:"editAnswer",
                            })
                        }
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
        }
    },
    /**
     * 组件的方法列表
     */
  methods:{
    OnDelete(e) {
        console.log(e.detail);
        var index = 0;
        if (this.data.swipesummaryType === "problems") {
            for (var i = 0; i < this.data.swipesummaryList.length; i++) {
                if (e.detail.sumProblemId == this.data.swipesummaryList[i].problemId) {
                    index = i;
                    break;
                }
            };
            var problemIds = [e.detail.sumProblemId];
            myService({
                url: "problem",
                success: (res) => {
                    console.log(min3,res)
                    console.log("删除问题", res)
                },
                data: problemIds,
                fail: (err) => {
                    wx.showToast({
                        title: '删除问题失败',
                        icon: 'error',
                    })
                    setTimeout(function () {
                        wx.hideLoading()
                    }, 1000);
                    console.log(err)
                },
                method: "DELETE",
            })
        } else {
      
                for (var i = 0; i < this.data.swipesummaryList.length; i++) {
                    if (e.detail.sumAnswerId == this.data.swipesummaryList[i].answerId) {
                        index = i;
                        break;
                    }
                };
                var answerIds = [e.detail.sumAnswerId]
                myService({
                    url: "answer",
                    success: (res) => {
                        console.log(res)
                        console.log("删除回答", res)
                    },
                    data: {
                        answerIds: answerIds
                    },
                    fail: (err) => {
                        wx.showToast({
                            title: '',
                            icon: 'error',
                        })
                        setTimeout(function () {
                            wx.hideLoading()
                        }, 1000);
                        console.log(err)
                    },
                    method: "DELETE",
                })
            }
            this.data.swipesummaryList.splice(index, 1);
            this.setData({
                swipesummaryList: this.data.swipesummaryList,
            })
        },
    
      onBottom(e)
      {
        //   console.log(e);
      },
    
      onRefresh(e)
      {
        //   console.log(e);
          this.setData({
              state:false
          })
          
      },
  }
  
})