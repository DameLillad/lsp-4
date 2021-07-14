<template>
  <div>
    首页
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/log">登录</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/register">注册</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/admin">后台管理</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/userIndex">用户首页</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
