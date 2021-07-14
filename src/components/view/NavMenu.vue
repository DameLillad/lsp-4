<!--子-->
<template>
  <div>
    菜单导航

    {{msg}}---{{name}}
    <!--    1、在子组件中绑定事件-->
    <button v-on:click="ReParentMsg">子传父组件</button>
  </div>
</template>

<script>
  export default {
    name: "NavMenu",
    props: ['msg', 'name'],
    data() {
      return {
        message: '',
        count: 1
      }
    },
    methods: {
      //2、将值传给父组件
      ReParentMsg: function () {
        this.$emit("getSunMsg", this.count++);
      }
    }


  }
</script>

<style scoped>

</style>
