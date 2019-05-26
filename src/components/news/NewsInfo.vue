<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsInfo.add_time|dateFormat}}</span>
            <span>点击:{{newsInfo.click}}</span>

        </p>
        <hr>
        <div class="content" v-html='newsInfo.content'></div>
        <comment :id="this.id"></comment>

    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponent/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsInfo:[]

        }
    },
    created () {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo:function(){
            this.$http.get(`http://www.liulongbin.top:3005/api/getnew/${this.id}`).then(result=>{
                console.log(result)
                if(result.body.status===0){
                    this.newsInfo=result.body.message[0]

                }else{
                    Toast('获取数据失败')
                }

            })
        }
        
    },
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>
   .newsinfo-container{
       padding: 0 4px;
       .title{
           font-size: 16px;
           text-align: center;
           margin: 15px 0;
           color: red;         
       }
       .subtitle{
           font-size: 13px;
           color:#226aff;
           display: flex;
           justify-content: space-between;


       }
       .content{
           img{
               width:100%
           }

       }
   }

</style>


