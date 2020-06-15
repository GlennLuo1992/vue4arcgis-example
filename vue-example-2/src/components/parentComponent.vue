<template>
  <div id='container'>
    <div @click="changeMsg">父组件：</div>
    <div>来自子组件的值：{{childMsg}}</div>
    <p></p>
    <!-- 父组件数据作为参数传给子组件 -->
    <childComponent :message="msg" v-on:listenToChildEvent="getMsgfromChild" />
  </div>
</template>
<script>
import childComponent from "./childComponent";
export default {
  data() {
    return {
      // 父组件状态
      msg: "",
      childMsg: ""
    };
  },
  methods: {
    changeMsg() {
      this.msg += "parent";
    },
    getMsgfromChild(data) {
      this.childMsg += data;
    }
  },
  components: {
    childComponent
  }
};
</script>

<style scoped>
div{
  font-size: 25px;
}
div:hover{
  cursor: pointer;
}
#container{
    background-color: beige;
    padding:20px;
}
</style>
<style>
body{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
</style>