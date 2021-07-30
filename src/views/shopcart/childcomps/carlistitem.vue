<template>
    <div class="carlistitem">
        <div class="selector">
            <Checkbutton @checkbtnclick="clickchange" v-model="listitem.checked"></Checkbutton>
        </div>
        <div class="item-img">
            <img v-lazy="listitem.imgurl" alt=""  @load="carimg">
        </div>
        <div class="item-info">
            <div class="item-title">{{listitem.title}}</div>
            <div class="item-desc">{{listitem.desc}}</div>
            <div class="item-bottom">
                <div class="item-price left">￥{{listitem.newprice}}</div>
                <div class="item-count right">X{{listitem.count}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import Checkbutton from './checkbutton.vue'
export default {
    name:'Carlistitem',
    components:{
        Checkbutton
    },
    props:{
        listitem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        clickchange(){
            this.listitem.checked = !this.listitem.checked
            // console.log(this.listitem.checked);
        },
        carimg(){
            this.$emit('carsimg')
        }
    }
}
</script>
<style scoped>
.carlistitem{
    width: 100%;
    display: flex;
    font-size: 10px;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
.selector{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-title ,.item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-img{
    padding: 5px;
}
.item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
.item-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
}
.left{
    float: left;
}
.right{
    float: right;
}
  .item-bottom .item-price {
    color: orangered;
  }
</style>