<template>
  <div class="userLogMain">
    <div id="top" style="width: 100%;height: 150px;background-color: #3B9DFC">
      顶部照片
      <div id="navbar">
        <ul class="menu-choice">
          <li>首页</li>
          <li>团购服务</li>
          <li>会员服务</li>
          <li>站车服务</li>
          <li>商务服务</li>
          <li>出行指南</li>
          <li>信息查询</li>
        </ul>
      </div>
    </div>
    <div id="center">
      <ul id="imglist">
        <!-- active 会展示在前面，不使用z-index是因为，我让全部图片都重叠在一起 -->
        <li class="item active"><img src="../../assets/images//banner-login-20200629.jpg"
                                     style="width: 100%;height: 100%;"></li>
        <li class="item"><img src="../../assets/images/banner-login-20200924.jpg" style="width: 800px;height: 400px;">
        </li>
      </ul>
      <div id="login-box" style="width: 320px;height: 458px;background-color: #F8F8F8">
        <div id="login-head">
          <ul>
            <li>
              <a>扫码登录</a>
            </li>
            <li>
              <a>账号登录</a>
            </li>
          </ul>
        </div>
        <div id="login-item">
          <el-input placeholder="用户名/邮箱/手机号" v-model="username"></el-input>
          <el-input placeholder="密码" v-model="pwd"></el-input>
        </div>
        <div id="login-bto">
          <el-button type="primary" class="logBto" v-on:click="userLog" style="margin-right:160px">立即登录</el-button>
        </div>
      </div>
    </div>
    <div id="bootom" style="width: 100%;height: 150px;background-color: aqua"></div>
  </div>
</template>
<script>
  export default {
    name: "Log",
    data() {
      return {
        username: '',
        pwd: '',
      };
    },
    methods: {
      //2、将值传给父组件
      userLog: function () {
        // this.$emit("getSunMsg",this.count++);
        if (this.uName === '') {
          alert("用户名不能为空");
        }
        if (this.pwd === '') {
          alert("密码不能为空");
        }
        if (this.username != '' && this.pwd != '') {
          //4 发送请求
          //设置参数
          this.$axios.post('toLog', {
            action: 'login',
            userName: this.userName,
            password: this.pwd
          }).then(response => {
            console.log(response.data);

            this.$router.push('/adminIndex');
          }).catch(error => {

          });
        }
      },
      open() {

      }
    }
  }
</script>

<style scoped>

</style>
