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

    /**
     * 组件的方法列表
     */
    // console.log是控制台输出函数，用于调试中获取内容，验证正确性
    methods: {
        OnChange(e) {
            console.log(e)
            console.log(this.data.navData)
            console.log("#"+this.data.navData.navArray[e.detail.index].id)
            var current = this.selectComponent('#1')
            console.log(current)           
        }
    }
})