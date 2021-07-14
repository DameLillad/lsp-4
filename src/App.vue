<template>
  <div id="app">

    <!--    <img src="./assets/logo.png">-->
    <!--    <HelloWorld/>-->
    <!--    <h1>vue</h1>-->
    <!--    路由占位符-->
    <!--    <router-link to="/login"> 登录页</router-link>-->
    <!--    <router-link to="/main">首页</router-link>-->
    <!--    <router-link to="/test">登录页</router-link>-->
    <!--    <router-link to="/HelloWorld">Hello</router-link>-->
    <!--    <Index></Index>-->
    <!--    <router-link to="/"></router-link>-->
    <router-view></router-view>

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Index from "./components/view/Index";
  import Log from "./components/view/Log";

  export default {
    name: 'App',
    components: {
      Index: Index,

    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
