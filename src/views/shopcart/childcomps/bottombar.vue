<template>
    <div class="bottombar">
        <span>
        <Checkbutton class="selectall" @checkbtnclick="allclick" v-model="isselectall"></Checkbutton>
        </span>
        <span class="all">全选</span>
        <span class="totalprice">合计：￥{{total}}</span>
        <span class="buy">去计算({{$store.getters.carcount}})</span>
    </div>
</template>

<script>
import Checkbutton from './checkbutton.vue'

export default {
    name:'Bottombar',
    components:{
        Checkbutton
    },
    computed:{
        total(){
            const carlist =this.$store.getters.carlist;
            return carlist.filter(item =>{return item.checked}).reduce((prevalue,item)=>{return prevalue+ item.count*item.newprice},0).toFixed(2)
        },
        isselectall(){
            return this.$store.getters.carlist.find(item =>item.checked ===false)=== undefined;
        }
    },
    methods:{   
    allclick(){
        let isselectall =this.$store.getters.carlist.find(item => !item.checked);
        if (isselectall){
             this.$store.state.carlist.forEach(item=>{
                item.checked =true;
            });
        }else{
            this.$store.state.carlist.forEach(item=>{
                item.checked =false;
            })
        }
    }}
}
</script>

<style scoped>
.bottombar{
    height: 44px;
    width: 100%;
    position: fixed;
    bottom: 49px;
    background-color: #eee;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
    /* z-index: 11; */
}
.selectall{
    display: block;
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
}
.all{
    margin-left: 5px;
}
.totalprice{ 
  margin-left: 15px;
    font-size: 16px;
    color: #666;
}
.buy{
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
}
</style>