<template>
  <div class="arrows">
    <router-link class="arrows-link" to="/menu">
      <img class="black-arrows" :src="image" alt="Стрелки" :width="width" :height="height" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArrowsComp',
  props: {
    image: String,
    width: Number,
    height: Number
  }
}
</script>
