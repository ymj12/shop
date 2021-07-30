<template>
    <div class="goodslist">
        <Goodsitems v-for="(item,id) in goodsshop" :key="id"  :goodsitem="item"/>
    </div>
</template>
<script>
import Goodsitems from 'components/content/goodsitems'
export default {
    name:'Goodslist',
    components:{
        Goodsitems
    },
    props:{
            goodsshop:{
                type:Array,
                default(){
                    return[]
                }
            }
    }
}
</script>
<style scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
    background-color: #fff;
}
</style>