// components/workDetail/workDetails.js
import {
    myService
} from "../../utils/util"
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        workType: {
            type: String,
        },
        workData: {
            type: Object,
        },

    },
    data: {
        editReady:false,
        dataReady:false
    },
    lifetimes: {
    },
    methods: {
        refresheditor(){
            this.data.dataReady=true;
            if(!this.data.editReady)
            {
                console.log("edit not Ready")
                return
            }
            else  {
                this.editorCtx.setContents({
                    html: this.data.workData.detail,
                    success:()=> {console.log("edit before data",this.data.workData.detail)},
                    fail: (err) => {
                        console.log(this.data.workData)
                        console.log(err)
                    },
                })
            } 
        },
        clickAddAnswer() {
            console.log(this.data.workData)
            wx.navigateTo({
                url: "/pages/editor/editor?type=answer&title=" + this.data.workData.title + "&problemId=" + this.data.workData.problemId
            })
        },

        onEditorReady() {
                 console.log("editorready")
                this.createSelectorQuery().select('#editor1').context( (res)=>{
                    console.log(res)
                    this.editorCtx = res.context
                    this.data.editReady=true; 
                    if(this.data.dataReady)
                    {
                        this.editorCtx.setContents({
                            html: this.data.workData.detail,
                            success:()=> {console.log("data before edit",this.data.workData.detail)},
                            fail: (err) => {
                                console.log(this.data.workData)
                                console.log(err)
                            },
                        })
                    }
                    else{
                        console.log("data not ready")
                    }
                   
                }).exec()
        },
    },
})