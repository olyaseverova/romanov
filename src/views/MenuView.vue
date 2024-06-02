<template>
  <div class="menu">
    <ul class="pages-list list">
      <li class="pages-list__item" v-for="page in pages" :key="page.id">
        <router-link :to="page.link" class="page-link">
          {{ page.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'HomeView',

  data() {
    return {
      pages: [
        {
          name: "о художнике",
          link: "/about"
        },
        {
          name: "галерея",
          link: "/gallery"
        },
        {
          name: "контакты",
          link: "/contacts"
        }
      ]
    }
  }
}
</script>
