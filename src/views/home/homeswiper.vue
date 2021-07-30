<template>
  <Swiper class="top">
    <Swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageload">
      </a>
    </Swiper-item>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        isload:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imageload(){
        if (!this.isload){ 
          this.$emit('swiperimgload')
          this.isload =true
          }
       
      }
    }
  }
</script>

<style scoped>
/* .top{
  
  padding-top: 44px;
} */
</style>