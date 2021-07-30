<template>
<div class="carlist">
    <Scroll class="content" ref="car" >
    <div>
    <Carlistitem v-for="(item,index) in carlist" :key="index" :listitem="item" @carsimg="carsimg"></Carlistitem>
    </div>
    </Scroll>
</div>


</template>
<script>
import Carlistitem from './carlistitem.vue'
import Scroll from 'components/common/scroll.vue'

export default {
    name:'Carlist',
    components:{
        Scroll,
        Carlistitem
    },
    props:{
        carlist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        carsimg(){
            this.$refs.car.refresh()
        }
    },
    activated() {
      this.$refs.car.refresh()
    },
}
</script>
<style scoped>
.carlist{
    position: relative;
    height: 100vh;
    /* z-index: 11; */
}
.content{
    height:calc(100% - 139px);
    overflow: hidden;
}

</style>