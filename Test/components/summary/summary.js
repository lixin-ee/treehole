// // components/summary/summary.js
// Component({
//     /**
//      * 组件的属性列表
//      */
//     properties: {
//         sumData:{
//             type:Object,
//             value:{
//                 id:0,
//                 author:"NoName",
//                 sumCont:"There's no content",
//                 tags:["tag1","tag2"],
//             }
//         }
//     },

//     /**
//      * 组件的初始数据
//      */
//     data: {

//     },

//     /**
//      * 组件的方法列表
//      */
//     methods: {

//     }
// })

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        sumData: {
            type: Object,
            value: [{
                    title: "biaoti0",
                    id: 0,
                    author: "NoName",
                    sumCont: "There's no content",
                    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag66666666", "tag777777", "tag8", "tag9", "tag10"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                },
                {
                    title:"biaoti1",
                    id:1,
                    author: "NoName",
                    sumCont: "There's no content",
                    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag66666666", "tag777777", "tag8", "tag9", "tag10"],
                    avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
                }
            ], 
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})

