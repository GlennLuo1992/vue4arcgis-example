<template></template>

<script>
// 使用loadModules函数加载类
// 使用loadCss加载ESRI组件样式
import { loadModules ,loadCss} from "esri-loader";
// 通过在线引用某个特定的版本
// 引用某个确定的URL
const options = { version: "3.28" };
// const options = { url: `http://server/path/to/esri` };
// 引入样式可以选在指定版本，在线引用
// 通过指定URL引用样式
loadCss('3.28');
loadCss('http://server/path/to/esri/css/main.css');

export default {
  mounted() {
    //   异步加载需要使用的类，若加载成功，执行后续的逻辑
    loadModules(["esri/map"], options).then(([Map]) => {
      let map = new Map("mapNode", {
        center: [-118, 34.5],
        zoom: 8,
        basemap: "dark-gray"
      }).catch(err => {
        console.error(err);
      });
    });
  }
};
</script>

<style>
</style>