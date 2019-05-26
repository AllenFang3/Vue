<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入内容(最多吐槽120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in messages" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}
                </div>
                 <div class="cmt-body">{{item.content}}</div>
            </div>
            
        </div>

        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>

    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    props:['id'],
    data(){
        return{
            pageIndex:1,
            messages:[]

        }
    },
    created () {
        this.getComments()
    },
    methods: {
        getComments:function(){
            this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(result=>{
                if(result.body.status===0){
                    console.log("-------"+result)
               
                    this.messages=this.messages.concat(result.body.message);

                }else{
                    Toast('获取评论失败！！！')
                }
            })
        },
        getmore(){
            this.pageIndex++;
            this.getComments();
        }
    },
   
    
}
</script>

<style lang="scss" scoped>
.cmt-container{
     h3{
         font-size: 18px;
     }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
     }
    .cmt-list{
        margin: 8px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;

            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;

            }

        }
    }
}

</style>


