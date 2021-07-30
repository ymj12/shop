<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" class="control" :class="{active:index ===currentindex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"Tabcontrol",
    props:{
       titles:{
            type:Array,
        default(){
            return[]
        }
       }
    },
    data(){
        return{
            currentindex:0
        }
    },
    methods:{
      itemClick(index) {
        this.currentindex = index;
        this.$emit('tabClick',index)
      }
    }
}
</script>
<style scoped>
.tabcontrol{
    display:flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    
}
.control{
    flex: 1;
}
.control span{
     padding: 5px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 2px solid var(--color-high-text);
}
</style>