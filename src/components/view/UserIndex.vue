<template>
  <div>
    <div>
      <UserIndexTop></UserIndexTop>
    </div>
    <div id="top">
      <UserIndexMenu></UserIndexMenu>
    </div>
    <div id="bottom">
      <CarouselMap></CarouselMap>
    </div>
  </div>
</template>

<script>
  import UserIndexMenu from "./UserIndexMenu";
  import UserIndexTop from "./UserIndexTop";
  import CarouselMap from "./CarouselMap";

  export default {
    name: "UserIndex",
    components: {UserIndexMenu: UserIndexMenu, UserIndexTop: UserIndexTop, CarouselMap: CarouselMap}
  }
</script>

<style scoped>

</style>
