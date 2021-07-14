<template>

  <div>
    <div id="top">后台管理页面</div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <!--        菜单-->
          <Menu></Menu>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
    <!--    导航栏-->
  </div>
</template>

<script>
  import Menu from './Menu'

  export default {
    name: "admin",
    components: {Menu: Menu},
    methods: {}
  }
</script>

<style scoped>
  /*.el-row {*/
  /*  margin-bottom: 20px;*/
  /*}*/
  /*.el-col {*/
  /*  border-radius: 4px;*/
  /*}*/
  /*.bg-purple-dark {*/
  /*  background: #99a9bf;*/
  /*}*/
  /*.bg-purple {*/
  /*  background: #d3dce6;*/
  /*}*/
  /*.bg-purple-light {*/
  /*  background: #e5e9f2;*/
  /*}*/
  /*.grid-content {*/
  /*  border-radius: 4px;*/
  /*  min-height: 36px;*/
  /*}*/
  /*.row-bg {*/
  /*  padding: 10px 0;*/
  /*  background-color: #f9fafc;*/
  /*}*/
</style>
