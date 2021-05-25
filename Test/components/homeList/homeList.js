// components/homeList/homeList.js

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
// Component({

//     externalClasses: ['scrollclass'],
//     /**
//      * 组件的属性列表
//      */
//     properties: {

//     },

//     /**
//      * 组件的初始数据
//      */
//     data: {
//         //TO-DO 从服务器获得summary列表并展示 此处仅供参考
//         summaryList: [{
//                 id: 0,
//                 author: "Li",
//                 sumCont: "Hello",
//                 tags: ["mind", "tree"]
//             },
//             {
//                 id: 1,
//                 author: "Lu",
//                 sumCont: "Hi",
//                 tags: ["man", "try"]
//             },
//             {
//                 id: 2,
//                 author: "Lu",
//                 sumCont: "Hi",
//                 tags: ["man", "try"]
//             },
//             {
//                 id: 3,
//                 author: "Lu",
//                 sumCont: "Hi",
//                 tags: ["man", "try"]
//             }, 
//             {
//                 id: 4,
//                 author: "Lu",
//                 sumCont: "Hi",
//                 tags: ["man", "try"]
//             },
//             {
//                 id: 5,
//                 author: "Lu",
//                 sumCont: "Hi",
//                 tags: ["man", "try"]
//             },
//             {
//                 id: 6,
//                 author: "Lu",
//                 sumCont: "Hi",
//                 tags: ["man", "try"]
//             },
//             {
//                 id: 7,
//                 author: "Lu",
//                 sumCont: "Hi",
//                 tags: ["man", "try"]
//             },
//             {
//                 id: 8,
//                 author: "Lu",
//                 sumCont: "Hi",
//                 tags: ["man", "try"]
//             }
//         ]
//     },

//     /**
//      * 组件的方法列表
//      */
//     methods: {

//     }
// })

Component({

    externalClasses: ['scrollclass'],
    /**
     * 组件的属性列表
     */
    properties: {
        tagId:{
            type:Number,
            value:1,

        },

        summaryList: {
            type: Object,
            value: [{
                    id: 0,
                    title: "标题一",
                    author: "作者",
                    sumCont: "今天写了一篇文章，不多不少，刚好一共二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积分很深刻的房间has你就看到12342354325436532625435今天写了一篇文章，不多不少，刚好一共二十个字二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积二十个字呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕好卡积",
                    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag66666666", "tag777777", "tag8", "tag9", "tag10"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 1,
                    title: "title",
                    author: "author",
                    sumCont: "Hi, boy! Nice to meet you! How are you, Jack?",
                    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag66666666", "tag777777", "tag8", "tag9", "tag10"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 2,
                    title: "biaoti2",
                    author: "Lu",
                    sumCont: "Hi",
                    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag66666666", "tag777777", "tag8", "tag9", "tag10"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 3,
                    title: "biaoti3",
                    author: "Lu",
                    sumCont: "Hi",
                    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag66666666", "tag777777", "tag8", "tag9", "tag10"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 4,
                    title: "biaoti4",
                    author: "Lu",
                    sumCont: "Hi",
                    tags: ["man", "try"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 5,
                    title: "biaoti5",
                    author: "Lu",
                    sumCont: "Hi",
                    tags: ["man", "try"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 6,
                    title: "biaoti6",
                    author: "Lu",
                    sumCont: "Hi",
                    tags: ["man", "try"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 7,
                    title: "biaoti7",
                    author: "Lu",
                    sumCont: "Hi",
                    tags: ["man", "try"], 
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    id: 8,
                    title: "biaoti8",
                    author: "Lu",
                    sumCont: "Hi",
                    tags: ["man", "try"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                }
            ]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        //TO-DO 从服务器获得summary列表并展示 此处仅供参考

        state: false,

    },

    // },
    refresh:function(){
        wx.showToast({
          title: '刷新中',
          icon:'loading',
          duration:3000
        }),
        setTimeout(function(){
          wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 2000
          })
        },3000)
      },
    /**
     * 组件的方法列表
     */
    methods: {
        onBottom(e)
        {
            console.log(e,this.data.tagId);
        },

        onRefresh(e) {
            console.log(e);
           
            
            this.setData({
                state: false
            });
            wx.showLoading({
                title: '刷新中',
              })
              setTimeout(function () {
                wx.hideLoading()
              }, 1000);
        },
    }
})