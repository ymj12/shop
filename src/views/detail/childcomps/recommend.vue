<template>
    <div>
        <div class="recommend">
        <Goodsitem v-for="(item,id) in recommend" :key="id"  :goodsitem="item"/>
        </div>
    </div>
</template>

<script>
import Goodsitem from 'views/home/goodsitem'

export default {
    name:'Recommend',
        components:{
        Goodsitem
    },
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.recommend{
     display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
    background-color: #fff;
}
</style>