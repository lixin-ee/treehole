// components/workDetail/workDetails.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        workData:{
            type:Object,
            value:{
                id:1,
                workAuthor:"author",
                workType:"problem",
                workCont:"Who cares",
                // 如果为题目，则读取workTitle；否则不读取
                workTitle:"How to complete miniprogram",
            }
            
        },
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    lifetimes:{
        ready:function(){
            this.selectComponent("#editor")
            //TO-DO 获得选定的子组件标识
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
