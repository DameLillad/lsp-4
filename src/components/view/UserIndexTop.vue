<template>
  <div id="userIdex-top">

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple" style="background-color: aqua">图片</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple" style="width: 20%">
          <el-menu>
            <el-submenu index="1">
              <template slot="title">English</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="/log">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
        <router-link to="/log">登录</router-link>
        <router-link to="/register">注册</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "UserIndexTop"
  }
</script>

<style scoped>

</style>
