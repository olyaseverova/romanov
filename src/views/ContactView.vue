<template>
    <div class="contact">
        <ArrowsComp image="arrows-white.png" width="30" height="76" link="/menu" />

        <div class="contact-info">
            <div class="contact-links">
                <a href="mailto:vladimir.v.romanov@mail.ru">vladimir.v.romanov@mail.ru</a>
                <a href="https://www.instagram.com/vladimirromanovv_?igsh=MTU5dDIxbWlsYm51ZA==">inst: vladimirromanovv_</a>
            </div>
            <img class="contact-back" src="contact-back.png" />
        </div>

    </div>
</template>
  
<script>
import ArrowsComp from "../components/ArrowsComp.vue";

export default {
    name: 'ContactView',

    components: {
        ArrowsComp
    }
}
</script>
  