// components/searchBar/searchBar.js
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
              value: '',
            },
            onChange(e) {
              this.setData({
                value: e.detail,
              });
            },
            onSearch() {
              Toast('搜索' + this.data.value);
            },
            onClick() {
              Toast('搜索' + this.data.value);
            },

    /**
     * 组件的方法列表
     */
    methods: {
        
    }
})
