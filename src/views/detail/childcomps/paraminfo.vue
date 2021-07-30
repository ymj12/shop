<template>
    <div class="param-info"  v-if="Object.keys(paraminfo).length !== 0">
        <table class="info-size" v-for="(table,index) in paraminfo.rule.tables" :key="index">
            <tr v-for="(tr,indey) in table" :key="indey">
                <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(info,index) in paraminfo.info.set" :key="index">
                <td class="key">{{info.key}}</td>
                <td class="value">{{info.value}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'Paraminfo',
    props:{
        paraminfo:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>
<style scoped>
.param-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f3f5f8;
}
.param-info table{
    width: 100%;
    border-collapse: collapse;
}
.param-info table tr{
    height: 42px;
}
.param-info table tr td{
    border-bottom: 1px solid rgba(100, 100, 100, .1);
}
.key{
    width:95px;
}
.info-param{
    border-top:1px solid rgba(0, 0, 0, .1)
}
.value{
    color: #eb4868;
}
</style>