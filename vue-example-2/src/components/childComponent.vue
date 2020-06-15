<template>
  <div id="c-container">
      <div @click="sendMsgToParent">子组件：</div>
      <div>父组件传来的值：{{message}}</div>
  </div>
</template>

<script>
export default {
    // 接收父组件数据
    props:["message"],
    data(){
        return{
            msg:"child"
        }
    },
    methods:{
        sendMsgToParent(){
            // 传子组件的数据给父组件
            this.$emit("listenToChildEvent",this.msg)
        }
    }

}
</script>

<style scoped>
#c-container{
    background-color: rgb(120, 209, 117);
}
</style>