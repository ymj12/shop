<template>
    <Navbar class="detailnavbar" >
        <div class="backimg" slot="left" @click="backsclick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
    <div class="title" slot="center" >
        <span class="titleitem" v-for="(item,index) in titles" :key="index" :class="{active: currentindex ===index}" @click="itemclick(index)"> {{item}}</span>
    </div>
    </Navbar>
</template>
<script>
import Navbar from 'components/common/navbar.vue'

export default {
    name:'Detailnavbar',
    components:{
        Navbar,

    },
    props:{
        currentindex:{
            type:Number,
             default:0}
    },

    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            // currentindex:0
        }
    },
   methods:{
        itemclick(index){
        this.$emit('itemclick',index)
    },
        backsclick(){
            this.$router.go(-1)
        }
   }
}
</script>
<style scoped>
.title{
    display: flex;
}
.titleitem{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.backimg{

margin-top: 6px;
}
</style>