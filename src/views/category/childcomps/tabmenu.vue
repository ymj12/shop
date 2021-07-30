<template>
    <Scroll id="tab-menu">
        <div class="menu-list">
            <div class="menu-list-item" v-for="(item,index) in categroies" :key="index">{{item.title}}</div>
        </div>
    </Scroll>

</template>

<script>
import Scroll from 'components/common/scroll.vue'

export default {
    name:'Tabmenu',
    components:{
        Scroll
    },
    props:{
        categroies:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
  #tab-menu {
    background-color: #f6f6f6;
    height: 100vh;
    overflow: hidden;
    width: 100px;
    box-sizing: border-box;
  }
.menu-list{
    height:300px;
    /* overflow: hidden; */
}
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
</style>