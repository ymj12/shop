<template>
  <div id="category" >
      <Navbar class="navcenter"><div slot="center">商品分类</div></Navbar>
    <div class="content">
      <Tabmenu :categroies="categroies"></Tabmenu>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar.vue'  
import {getCategroy} from '../../network/categroy'
import Tabmenu from './childcomps/tabmenu.vue'

  export default {
    name: "Category",
    components:{
      Navbar,
      Tabmenu
    },
    data() {
      return {
        categroies:[]
      }
    },
    created(){
     this.getCategroy()
    },
    // 组件创建完后调用
    methods:{
     getCategroy(){
       getCategroy().then(res=>{
         this.categroies =res.data.category.list
       })
     }
    },

  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }
.navcenter{
  background-color:var(--color-tint);
  color: #fff;
  /* position: relative; */
}
</style>
