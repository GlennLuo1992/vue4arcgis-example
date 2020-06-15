<template>
  <div id="mapControl">
    <button @click="addLayerClick">添加图层</button>
    <button @click="reomveAllLayer">删除图层</button>
    <p>
      <b>图层数量:{{this.$store.state.layerCount}}</b>
    </p>
  </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['addLayer', 'reomveAllLayer']),
    addLayerClick() {
      this.addLayer();
    },
    removeAllLayer() {
      this.removeAllLayer();
    },
  },
};
</script>

<style>
#mapControl {
  background-color: #ffffff99;
  position: absolute;
  top: 100px;
  right: 50px;
  /* height: 200px;*/
  width: 100px;
  padding: 10px 50px;
}
button {
  background-color: white;
  padding: 10px;
  margin: 10px;
}
</style>
