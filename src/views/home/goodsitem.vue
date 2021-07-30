<template>
    <div class="item" @click="itemclick" >
        <img v-lazy="showimages" :key="showimages" alt=""  @load="imageload">
        <div class="goodsinfo">
            <p>{{goodsitem.title}}</p>
            <span class="price">¥{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default { 
    name:'Goodsitem',
    props:{
        goodsitem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    computed:{
            showimages(){
                return this.goodsitem.image
            }
    },
    methods:{
            imageload(){
                this.$bus.$emit('itemimgload') 
            },
        itemclick(){
            this.$router.push('/detail/'+ this.goodsitem.iid)
        }
    }

}
</script>

<style scoped>
.item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    
}
.item img {
    width: 100%;
    border-radius: 5px;
}
.goodsinfo{
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
}
.goodsinfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap ;
    margin-bottom: 3px;
}
.goodsinfo .price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.goodsinfo .collect{
    position: relative;
}
.goodsinfo .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg")0 0/14px 14px;
}
</style>