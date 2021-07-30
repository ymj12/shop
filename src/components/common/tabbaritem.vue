<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemclick">
    <slot v-if="!isactive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="actives"><slot name="item-text"></slot>
    </div>
    <!--<img src="../../assets/img/tabbar/home.svg" alt="">-->
    <!--<div>首页</div>-->
  </div>
</template>
 
<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activecolor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isactive:true,

      }
    },
    computed:{
      isactive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      actives(){
        return this.isactive ? {color:this.activecolor}:{}
      }
    },
    methods:{
      itemclick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
