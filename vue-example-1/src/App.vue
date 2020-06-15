<template>
  <div>
    <!-- 2. 绑定数据:{{}}-->
    <div>{{count}}</div>
    <!-- 4.绑定事件：使用v-on:指令或者简写使用@，进行事件绑定 -->
    <button v-on:click="addClick">增加</button>
    <button @click="minusClick">减少</button>
  </div>
</template>

<script>
export default {
  name: "app",
  // 1. 数据注册
  data: () => {
    return {
      count: 0
    };
  },
  // 3. 方法注册：直接对count进行操作
  methods: {
    addClick() {
      this.count += 1;
    },
    minusClick() {
      this.count -= 1;
    }
  },
  // 生命周期
  created() {
    window.alert("组件已经创建好了");
  },
  mounted() {
    window.alert("组件装载好了");
  },
  updated(){
    window.alert("组件已经完成更新");
  }
};
</script>

<style scoped>
div {
  font-size: 30px;
}
</style>
