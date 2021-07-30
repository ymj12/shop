<template>
    <div class="checkbutton" :class="{active:checked}" @click="selectitem">
        <img src="~/assets/img/cart/tick.svg" alt="">
    </div>
</template>
<script>
export default {
    name:'Checkbutton',
    props:{
        value:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    data(){
        return{
            checked:this.value
        }
    },
    methods:{
        selectitem(){
            this.$emit('checkbtnclick')
           
        },
        
    },
    watch:{
        value(newvalue){
            this.checked = newvalue
          console.log('122');
        }
    }
}
</script>
<style scoped>
.checkbutton{
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
}
.active{
    background-color: #ff8198;
    border-color:#ff8198 ;
}
</style>