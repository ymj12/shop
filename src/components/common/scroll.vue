<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",  
props:{
      probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true},
    data:{
      type:Array,
      default:()=>{
        return []
      }
    }
},
  data() {
      return {
        scroll: {}
      }
    },
    // 组件创建完后调用
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper
      , {
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
      }
      )

      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll',position)
      })
        
      this.scroll.on('pullingUp', () => {
        // console.log('上啦加载更多')
        this.$emit('pullingUp')
      })
      
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      refresh(){
      this.scroll && this.scroll.refresh()
      },
      finishPullUp(){
       this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
        // return this. scroll.y
      }
    },
//      watch:{
// data(){
//         setTimeout(this.refresh, 20)
//       }
//     }

    
  }
</script>

<style scoped>

</style>
