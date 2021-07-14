<!--走马灯-->
<template>
  <div id="">
    <el-carousel>
      <el-carousel-item v-for="item in this.images" key="item">

        <img :src="(item)">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "CarouselMap",
    data() {
      //
      return {
        images: [
          require('../../assets/images/banner-login-20200629.jpg'),
          require('../../assets/images/banner-login-20200924.jpg')
        ]
      }
    }
  }
</script>

<style scoped>

</style>
