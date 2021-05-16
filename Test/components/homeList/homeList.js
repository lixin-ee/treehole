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
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        //TO-DO 从服务器获得summary列表并展示 此处仅供参考
        summaryList:[
            {
                id:0,
                author:"Li",
                sumCont:"Hello",
                tags:["mind","tree"]
            },
            {
                id:1,
                author:"Lu",
                sumCont:"Hi",
                tags:["man","try"]
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
