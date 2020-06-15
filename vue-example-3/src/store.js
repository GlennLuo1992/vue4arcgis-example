/* eslint-disable no-alert */
import Vue from 'vue';
import Vuex from 'vuex';
import {
  loadModules,
} from 'esri-loader';

const options = {
  url: 'http://218.94.9.8:18080/arcgis_js_api/4.11/dojo/dojo.js',
};
const layerURL = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    map: null,
    view: null,
    layerCount: 0,
  },
  mutations: {
    initMap(state, payload) {
      state.map = payload;
    },
    initView(state, payload) {
      state.view = payload;
    },
  },
  actions: {
    async addLayer({
      state,
    }) {
      const layer = await loadModules(['esri/layers/MapImageLayer'], options)
        .then(([MapImageLayer]) => new MapImageLayer({
          url: layerURL,
        }))
        .catch((err) => {
          console.error(err);
        });
      state.map.add(layer);
      layer.when(() => {
        window.alert('地图加载成功！');
        state.layerCount = state.map.layers.length;
      });
    },
    reomveAllLayer({ state }) {
      if (this.state.map.layers) {
        this.state.map.removeAll();
        state.layerCount = 0;
        window.alert('地图删除成功！');
      }
    },
  },
});
