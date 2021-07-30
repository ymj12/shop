<template>
<div id="home">
      <Navbar class="navcenter"><div slot="center">购物街</div></Navbar>
       <Tabcontrol :titles="['流行','新款','精选']" class="tabcontrol" ref="tabcontrol1" @tabClick="tabClick" v-show="istabfixed"></Tabcontrol>
      <Scroll class="content" ref="scroll" :probe-type="3" :data="showgoods" @scroll="contentscroll" :pull-up-load="true" @pullingUp="loadMore">  
      <Home-swiper :banners="banners" @swiperimgload="swiperimgload"/>
      <Recommend :recommends="recommends"/>
      <Feature/>
      <Tabcontrol :titles="['流行','新款','精选']"  ref="tabcontrol2" @tabClick="tabClick"></Tabcontrol>
      <Goodslist :goodsshop="showgoods" @itemimgload="itemimgload"/> 
      </Scroll>
       <Backtop @click.native="backClick" v-show="isShowBackTop"/>
</div>
</template>
<script>
import Navbar from 'components/common/navbar.vue'
import {getHomeMultidata,getHomeGoods} from '../../network/home'
import HomeSwiper from './homeswiper'
import Recommend from './recommendview.vue'
import Feature from './feature.vue'
import Tabcontrol from 'components/content/tabcontrol.vue'
import Goodslist from 'components/content/goodslist.vue'
import Scroll from 'components/common/scroll.vue'
import Backtop from 'components/common/backtop.vue'
import {debounce} from 'common/untils'

export default {
  name:"home",
  components:{
    Navbar,
    HomeSwiper,
    Recommend,
    Feature,
    Tabcontrol,
    Goodslist,
    Scroll,
    Backtop
  },
  data(){
    return {
      banners:[],
      recommends:[],
       goods: {
          'pop': {page: 0 , list:[]},
          'new': {page: 0 , list:[]},
          'sell': {page: 0, list:[]},
        },
        currentType: 'pop',
        isShowBackTop:false,
        taboffsettop:0,
        istabfixed:false,
         saveY: 0
        
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell')

  },
  // mounted(){
  //   // const refresh =
  //       this.$bus.$on('itemimgload', ( ) => {
  //        debounce(this.$refs.scroll.refresh(),200)
  //   })
  // },
        mounted(){
    const refresh =debounce(this.$refs.scroll.refresh,100)
        this.$bus.$on('itemimgloads', ( ) => {
          refresh()
    })
  },
   computed: {
      showgoods() {
        return this.goods[this.currentType].list
      },
    },
    destroyed() {
      console.log('home destroyed');
    },
    activated() {
      // console.log('djl');
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // console.log('jjj');
      this.saveY = this.$refs.scroll.getScrollY()
    },
   
  methods:{
    swiperimgload(){
    this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break  
          case 1:
          this.currentType='new'
          break
          case 2:
          this.currentType='sell'
          break
      }
      this.$refs.tabcontrol1.currentindex=index;
      this.$refs.tabcontrol2.currentindex=index;
    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.recommends =res.data.recommend.list;
      })
    },
   getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then( res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
    },
    contentscroll(position){
      this.isShowBackTop= (-position.y)>1000
      this.istabfixed =position.y< -this.taboffsettop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    itemimgload(){
    this.$refs.scroll.refresh()
    }
   
  }
}
</script>
<style scoped>
 #home {
    height: 100vh;
    position: relative;
  }
.navcenter{ 
    background-color: var(--color-tint);
    color: #fff;
    position: relative;

}
.tabcontrol{
    position: relative;
    z-index: 9;
}

.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

} 
</style>
