<template>
<div>
         <div v-if="Object.keys(commentinfo).length !==0" class="comment-info">
         <div class="header" >
            <div class="title">用户评价</div>
            <div class="more"> <i>更多</i></div>
         </div>
         <div class="infouser" v-if="commentinfo.list">
             <img :src="commentinfo.list[0].user.avatar" alt="">
             <span>{{commentinfo.list[0].user.uname}}</span>
         </div>
         <div class="infodetail" v-if="commentinfo.list">
             <p>{{commentinfo.list[0].content}}</p>
             <div class="infoother" v-if="commentinfo.list">
                 <span class="date">{{commentinfo.list[0].created | showDate}}</span>
                 <span>{{commentinfo.list[0].style}}</span>
                 <div class="info-images" v-if="commentinfo.list">
                     <img :src="item" alt="" v-for="(item,index) in commentinfo.list[0].images" :key="index">
                 </div>
             </div>
         </div>
     </div>
</div>
</template>

<script>
import {formatDate} from 'common/untils'

export default {
     name:'Commentinfo',
     props:{
         commentinfo:{
             type:Object,
             default(){
                 return{}
             }
         }
     },
     filters:{
         showDate(value){
                let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
        
         }
     }
 }
</script>
<style scoped>
.comment-info{
    padding: 5px 20px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
}
.header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.title{
    float: left;
    font-size: 15px;
}
.more{
    float: right;
    margin-right: 10px;
    font-size: 13px;
}
.infouser{
    padding: 10px 0 5px;
}
.infouser img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
}
.infouser span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
}
.infodetail{
    padding: 0 5px 15px;
}
.infodetail p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
}
.infodetail .infoother{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
}
.infoother .date{
    margin-right: 8px;
}
.info-images{
    margin-top: 5px;
}
.info-images img{
    width: 70px;
    height:70px;
    margin-right: 5px;

}
</style>