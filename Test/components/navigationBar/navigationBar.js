// components/navigationBar/navigationBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        navData: {
            type: Object,
            value: {
                navArray: [{
                    title: "HTML",
                    id: "0",
                }, {
                    title: "CSS",
                    id: "1",
                }, {
                    title: "JavaScript",
                    id: "2",
                }],
            },
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    lifetimes: {
       ready:function()
       {
        console.log(".hometab0")
        var current = this.selectComponent(".hometab0"+' .homelist')
        console.log(current)
        current.onRefresh() 
       }
    },
    /**
     * 组件的方法列表
     */
    // console.log是控制台输出函数，用于调试中获取内容，验证正确性
    methods: {
        OnChange(e) {
            //改变后获得了当前homelist的this对象current，可通过调用current的方法实现切换页面后是否读
            //新内容的操作
            console.log(".hometab"+this.data.navData.navArray[e.detail.index].id)
            var current = this.selectComponent(".hometab"+this.data.navData.navArray[e.detail.index].id+' .homelist')
            console.log(current)
            if(current.data.currentPage===-1)
            current.onRefresh() 
        }
    }
})