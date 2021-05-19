// components/myWork/myWork.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        myworkData:{
            type:Object,
            value:{
                myworkArray:[
                    {
                        title:"我的提问",
                        id:"0",
                    },
                    {
                        title:"我的回答",
                        id:"1",
                    }
                ]
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        activeNames: ['0'],
    },

    
    /**
     * 组件的方法列表
     */
    methods: {
        onChange(e) {
            this.setData({
              activeNames: e.detail,
            })
        },
    }
});
