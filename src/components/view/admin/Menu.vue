<template>
  <div>
    <el-menu
      @close="handleClose"
      @open="handleOpen"
      class="el-menu-vertical-demo"
      default-active="2"
      router :default-active="this.$route.path">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userManagement">用户列表</el-menu-item>
          <el-menu-item index="1-2">增加用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>票务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userManagement">售票</el-menu-item>
          <el-menu-item index="1-2">退票</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

  </div>
</template>
<script>
  export default {
    name: "Menu",
    mounted() {
      this.$axios.get('/admin/getMenu', {
        // action: 'login',
        userName: this.userName,
        password: this.pwd
      }).then(response => {
        console.log(response.data);

        // this.$router.push('/adminIndex');
      }).catch(error => {
        console.log(error);
      });
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      method(){

      }
    }
  }
</script>

<style scoped>

</style>
