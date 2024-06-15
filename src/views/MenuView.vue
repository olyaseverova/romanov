<template>
  <div class="menu">
    <div class="change-language">
      <label class="label-lang" id="eng">
        <input class="input-lang" type="radio" id="eng" name="lang" value="eng" @click="changeLang" />
        ENG
      </label>
      <label class="label-lang label-rus none" id="rus">
        <input class="input-lang" type="radio" id="rus" name="lang" value="rus" @click="changeLang" />
        РУС
      </label>
    </div>

    <ul class="pages-list list">
      <li class="pages-list__item" v-for="page in pages" :key="page.id">
        <router-link :to="page.link" class="page-link" id="eng">
          <p class="page-name" id="eng">{{ page.name }}</p>
        </router-link>
        <router-link :to="page.linkENG" class="page-link" id="rus">
          <p class="page-name none" id="rus">{{ page.nameENG }}</p>
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
          nameENG: "about",
          link: "/about",
          linkENG: "/abouteng"
        },
        {
          name: "галерея",
          nameENG: "gallery",
          link: "/gallery",
          linkENG: "/galleryeng"
        },
        {
          name: "контакты",
          nameENG: "contacts",
          link: "/contacts",
          linkENG: "/contacts"
        }
      ]
    }
  },

  methods: {
    changeLang: function (event) {
      let labelsLang = document.querySelectorAll(".label-lang");
      let pageNames = document.querySelectorAll(".page-name");

      labelsLang.forEach(function (label) {
        label.classList.remove("none");

        if (event.target.id === label.id) {
          label.classList.add("none");
        }
      });

      pageNames.forEach(function (name) {
        name.classList.remove("none");

        if (event.target.id === name.id) {
          name.classList.add("none");
        }
      });
    },
  }

}
</script>
