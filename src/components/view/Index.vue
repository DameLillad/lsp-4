<template>
  <!--  父-->
  <div>
    用户首页
    <NavMenu :msg="message" :name="name" @getSunMsg="getMsg"></NavMenu>
    <!--    绑定路由-->
    <!--    <router-link to="/log">登录</router-link>-->
    <!--    <router-link to="/register/123">注册</router-link>-->
    <!--    <button @click="toAdmin">管理员</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import NavMenu from "./NavMenu";

  export default {
    name: "Index",
    data() {
      return {
        message: 'Roy3',
        name: 'Roy3e',
      }
    },
    methods: {
      getMsg: function (data) {
        console.log(data);
        this.message = data;
      },
      toAdmin: function () {
        this.$router.push({
          path: '/admin',
        })
      }
    },
    components: {NavMenu: NavMenu},
  }
</script>

<style scoped>

</style>
