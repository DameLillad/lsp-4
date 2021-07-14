<template>
  <div>
    注册

    <!--  {{getParam}}-->
  </div>
</template>

<script>
  export default {
    name: "Register",
    //计算属性，可以用来拿参数
    computed: {
      getParam: function () {
        return this.$route.params.pid;
      }
    }
  }
</script>

<style scoped>

</style>
