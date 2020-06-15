<template>
  <div id="viewDiv" />
</template>

<script>
import { loadModules, loadCss } from 'esri-loader';
import { mapMutations } from 'vuex';

// const options = {
//   url: 'http://218.94.9.8:18080/arcgis_js_api/4.11/dojo/dojo.js',
// };
loadCss();
export default {
  mounted() {
    loadModules(['esri/views/MapView', 'esri/Map'])
      .then(([MapView, Map]) => {
        const map = new Map({
          basemap: 'streets',
        });
        const view = new MapView({
          map,
          container: 'viewDiv',
          zoom: 3,
        });
        this.initMap(map);
        this.initView(view);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    ...mapMutations(['initMap', 'initView']),
  },
};
</script>

<style>
#viewDiv {
  z-index: 80;
  height: 800px;
  width: 100%;
}
</style>
