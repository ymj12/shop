<template>
    <div class="recomend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
               <div>{{item.title}}</div>
            </a>
            
        </div>
    </div>
</template>
<script>
export default {
        name:"Recommend",
        props:{      
      recommends:{
        type:Array,
        default(){
          return[]
        }
      }         
 }
}
</script>
<style scoped>
 .recomend{
   display: flex;
   width: 100%;
   text-align: center;
    border-bottom: 10px solid #eee;
 }
 .recommend-item{
   flex: 1;
   font-size: 15px;
   padding: 10px 0 20px;
 }
 .recommend-item img{
   width: 65px;
   height: 65px;
   margin-bottom: 10px;
 }
</style>
    
    
    
