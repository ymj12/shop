<template>
    <Swiper class="topimg">
        <Swiper-item v-for="(item, id) in topimages" :key="id">
        <img :src="item" alt="" >
        </Swiper-item>
    </Swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    name:'Detailswiper',
    components:{
        Swiper,
        SwiperItem
    },
        props:{
        topimages:{
            type:Array,
            default(){
                return[]
            }
        }
    },
}
</script>
<style scoped>
.topimg{
    height: 250px;
}
</style>