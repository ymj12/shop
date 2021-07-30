<template>
    <div class="shopcar">
    <Navbar class="carnavbar"><div slot="center">购物车({{carcount}})</div></Navbar>
    <Carlist :carlist="carlist"></Carlist>
    <Bottombar></Bottombar>
    </div>
</template>
<script>
import Navbar from 'components/common/navbar.vue'
import Carlist from './childcomps/carlist.vue'
import Bottombar from './childcomps/bottombar.vue'
export default {
name:"shopcart",
components:{
    Navbar,
    Carlist,
    Bottombar
},
computed:{
    carlist(){
        return this.$store.getters.carlist
    },
    carcount(){
        return this.$store.getters.carcount
        }
}
}
</script>
<style scoped >
.carnavbar{
    /* position: relative; */
    background-color:#ff5777;
    font-size: 20px;
    color: #fff;
}
</style>
