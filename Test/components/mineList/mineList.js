// components/mineList/mineList.js

// js文件用于实现动态函数 如从服务器获取数据
// Component表示此为一个组件 而非页面(Page)
// 组件的其他属性、函数请查阅微信开发者文档，如生命周期函数lifetimes，pageLifetimes
// JSON是配置文件
// {
//     "component": true,                               表示此为一个组件
//     "usingComponents": {                             在其中列出此组件/页面所需要的其他组件和路径
//         "summary":"/components/summary/summary"      <组件名>:<路径名>
//     }
// }
Component({

  externalClasses: ['scrollclass'],
  /**
   * 组件的属性列表
   */
  properties: {
  
    swipesummaryList: {
        type: Object,
        value: [{
                id: 0,
                title: "标题一",
                problemId: 106438,
                time: "2021-5-22 10:12",
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
                        tagName:"tag123",
                        tagId:"123",
                    },
                    {
                        tagName:"tag123",
                        tagId:"123",
                    },
                    {
                        tagName:"tag123",
                        tagId:"123",
                    },
                    {
                        tagName:"tag123",
                        tagId:"123",
                    },
                ],
                avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
                id: 1,
                title: "标题一",
                problemId: 106438,
                time: "2021-5-22 10:12",
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
            {
                id: 2,
                title: "标题一",
                problemId: 106438,
                time: "2021-5-22 10:12",
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
            {
                id: 3,
                title: "标题一",
                problemId: 106438,
                time: "2021-5-22 10:12",
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
            {
                id: 4,
                title: "标题一",
                problemId: 106438,
                time: "2021-5-22 10:12",
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
            {
                id: 5,
                title: "标题一",
                problemId: 106438,
                time: "2021-5-22 10:12",
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
            {
                id: 6,
                title: "标题一",
                problemId: 106438,
                time: "2021-5-22 10:12",
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
            {
                id: 7,
                title: "标题一",
                problemId: 106438,
                time: "2021-5-22 10:12",
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
            {
                id: 8,
                title: "标题8",
                problemId: 1065438,
                time: "2021-5-22 10:12",
                content: "今天写呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积",
                tags: [{
                        tagName: "tag1",
                        tagId: "1",
                    },
                    {
                        tagName: "tag6",
                        tagId: "6",
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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      //TO-DO 从服务器获得summary列表并展示 此处仅供参考
      state:false,

  },
  
  /**
   * 组件的方法列表
   */
  methods: {
      onBottom(e)
      {
          console.log(e);
      },
     
      onRefresh(e)
      {
          console.log(e);
          this.setData({
              state:false
          })
          
      },
  }
  
})