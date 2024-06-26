<template>
  <!-- <div class="home-wrap"> -->
  <router-link class="router-home" to="/menu">
    <div class="home">
      <h1 class="headline">ВЛАДИМИР РОМАНОВ</h1>
      <ArrowsComp image="arrows.png" width="42" height="97" link="/menu" />
      <h1 class="headline">VLADIMIR ROMANOV</h1>
    </div>
  </router-link>
  <!-- </div> -->
</template>

<script>
import ArrowsComp from "../components/ArrowsComp.vue";

export default {
  components: {
    ArrowsComp
  }
}
</script>
