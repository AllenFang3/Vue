<<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars2.githubusercontent.com/u/46414144?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2012-12-12 12：12:12</span>
                                <span>点击:0次</span>
                            </p>
						</div>
					</a>
				</li>
                <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars2.githubusercontent.com/u/46414144?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2012-12-12 12：12:12</span>
                                <span>点击:0次</span>
                            </p>
						</div>
					</a>
				</li>
                <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars2.githubusercontent.com/u/46414144?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2012-12-12 12：12:12</span>
                                <span>点击:0次</span>
                            </p>
						</div>
					</a>
				</li>
				

			</ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            newslist:[]

        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList(){
            this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>{
                console.log(result)
                if(result.body.status===0){
                    this.newslist=result.body.message;

                }else{
                    Toast("获取失败")

                }
            })
        }
    }
    
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}

</style>


