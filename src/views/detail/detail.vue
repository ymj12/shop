<template>
    <div id="detail" class="detail">
        <Detailnavbar  class="navbar" @itemclick="titlesclick" :currentindex="currentindex"></Detailnavbar>
        <!-- <div>
            <ul>
                <li v-for="(item,index) in $store.state.carlist " :key="index">{{item}}</li>
            </ul>
        </div> -->
        <Scroll class="content" ref="scrollss" 
        :probe-type="3"  @scroll="contentscroll" 
         :data="[topimages, goods, shop, info, paraminfo, commentinfo, recommend]">
        <div>
        <Detailswiper ref="base" :topimages="topimages"></Detailswiper>
        <Detailbaseinfo :goods="goods"></Detailbaseinfo>
        <Detailshopinfo :shop="shop"></Detailshopinfo>
        <Detailinfo :info="info"  ></Detailinfo>
        <Paraminfo ref="param" :paraminfo="paraminfo"></Paraminfo>
        <Commentinfo ref="comment" :commentinfo="commentinfo"></Commentinfo>
        <Recommend ref="recommend" :recommend="recommend"></Recommend>
        <div></div>
      <!-- <Goodslist ref="recommend" :goodsshop="recommend"/>  -->
        </div>
        </Scroll>
        <Bottombar @addtocart="addtocart"></Bottombar>
        <Backtop @click.native="backtop" v-show="isShowBackTop"></Backtop>
    </div>
</template>

<script>
import Detailnavbar from './childcomps/detailnavbar.vue'
import {getDetail,goods,shop,getRecommend} from 'network/detail'
import Detailswiper from './childcomps/detailswiper'
import Detailbaseinfo from './childcomps/detailbaseinfo.vue'
import Detailshopinfo from './childcomps/detailshopinfo.vue'
import Detailinfo from './childcomps/detailinfo.vue'
import Scroll from 'components/common/scroll'
import Paraminfo from './childcomps/paraminfo.vue'
import Commentinfo from './childcomps/commentinfo.vue'
import Recommend from './childcomps/recommend.vue'
import {debounce} from 'common/untils'
// import Goodslist from 'components/content/goodslist.vue'
import Backtop from 'components/common/backtop.vue'
import Bottombar from './childcomps/bottombar.vue'






export default {
    name:'detail',
    components:{
        Detailnavbar,
        Detailswiper,
        Detailbaseinfo,
        Detailshopinfo,
        Detailinfo,
        Scroll,
        Paraminfo,
        Commentinfo,
        Backtop,
        Recommend,
    // Goodslist,
    Bottombar
    },
    data(){
       return{
            iid:'',
            topimages:[],
            goods:{},
            shop:{},
            info:{},
            paraminfo:{},
            commentinfo:{},
            recommend:[],
            themetops:[],
            currentindex:0,
            isShowBackTop:false,
       }
    },
    created(){
        this.iid =this.$route.params.iid
        getDetail(this.iid).then(res=>{
            const data =res.result
        this.topimages = data.itemInfo.topImages;
        // console.log(res);
        // console.log(res.result.itemInfo.topImages);
        // console.log(this.topimages);
        this.goods = new goods(data.itemInfo,data.columns,data.shopInfo)
        this.shop =new shop(data.shopInfo)
        this.info = data.detailInfo
        this.paraminfo = data.itemParams
        this.commentinfo = data.rate
       })
        getRecommend().then(res=>{
            this.recommend=res.data.list
        })
    },
      mounted(){
    const refresh =debounce(this.$refs.scrollss.refresh,100)
        this.$bus.$on('itemimgload', ( ) => {
          refresh()
    })
  },
    updated() {
      this.getoffsettops()
    },
    methods:{
        getoffsettops(){
            this.themetops=[]
            this.themetops.push(this.$refs.base.$el.offsetTop)
            this.themetops.push(this.$refs.param.$el.offsetTop)
            this.themetops.push(this.$refs.comment.$el.offsetTop)
            this.themetops.push(this.$refs.recommend.$el.offsetTop)
            this.themetops.push(Number.MAX_VALUE)
        },
        contentscroll(position){
      this.isShowBackTop= (-position.y)>1000
            this.listenscrolltheme(-position.y)
        },
        listenscrolltheme(position){
            let length =this.themetops.length;
            for(let i=0;i<length;i++){
                let ipos =this.themetops[i];
                if (position >= ipos && position < this.themetops[i+1]){
                    if(this.currentindex !==i){
                        this.currentindex =i;
                    }
                    break;
                }
            }
        },
        // detailimage(){
        //     this.$refs.scrollss.refresh()
        // },
        titlesclick(index){
            console.log(-this.themetops[index]);
            this.$refs.scrollss.scrollTo(0,-this.themetops[index],100)
        },
            backtop(){
      this.$refs.scrollss.scrollTo(0,0)
    },
    addtocart(){
        const obj ={}
        obj.iid =this.iid;
        obj.imgurl =this.topimages[0];
        obj.title =this.goods.title;
        obj.desc =this.goods.desc;
        obj.newprice =this.goods.nowPrice;
        this.$store.commit('addcart',obj)
    }
    }                                                                                                                                                                                                                    
}
</script>
<style scoped>
#detail{
    position: relative;
    z-index: 11;
    height: 100vh;
    background-color: #fff;
}
.navbar{
    position: relative;
    background-color: #fff;
    z-index: 11;
}
.content{
    height:calc(100% - 103px);
    overflow: hidden;
}
</style>