<template>
  <div>
    <div id="user-menu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/userIndex">首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title">车票</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/log">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">团购服务</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">会员服务</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">站车服务</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">商旅服务</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">出行指南</template>
          <el-menu-item index="">选项1</el-menu-item>
          <el-menu-item index="">选项2</el-menu-item>
          <el-menu-item index="">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">信息服务</template>
          <el-menu-item index="1">选项1</el-menu-item>
          <el-menu-item index="">选项2</el-menu-item>
          <el-menu-item index="">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

  </div>
</template>

<script>
  export default {
    name: "UserIndexMenu",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
