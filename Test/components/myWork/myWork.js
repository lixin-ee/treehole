// components/myWork/myWork.js
Component({
    properties: {
        myworkData:{
            type:Object,
            value:{
                myworkArray:[
                    {
                        title:"我的提问",
                        id:"0",
                        type:"problem",
                    },
                    {
                        title:"我的回答",
                        id:"1",
                        type:"answer",
                    }
                ]
            }
        }
    },
    data: {
        activeNames: ['0'],
    },
    methods: {
        onChange(e) {
            this.setData({
              activeNames: e.detail,
            })
        },
    }
});
