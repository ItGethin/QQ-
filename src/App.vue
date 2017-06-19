<template>
  <div id="app">
    <header id='hd'>
        <i>QQ音乐</i>
        <mt-button size="small" class='btn'>下载APP</mt-button>
    </header>
    <nav class='table'>
      <router-link to='/recom'>推荐</router-link>
      <router-link to='/toplist'>排行榜</router-link>
      <router-link to='/search'>搜索</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

import './css/reset.css';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    // getData() {
    //   $('#hd').css('background','red');
    // }
  },
  mounted() {
    // this.getData();
  }
}
</script>

<style scope>
    @import './css/APP.css';
</style>
