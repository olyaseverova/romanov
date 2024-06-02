<template>
    <div class="gallery">

        <ArrowsComp image="arrows-white.png" width="30" height="76" />

        <ul class="paintings-list list">
            <li class="paintings-list__item" v-for="painting in paintings" :key="painting.id" @click="openPicture"
                :id="painting.id">
                <img class="painting" :src="painting.src" :alt="painting.desc" width="550px" :height="painting.height"
                    :id="painting.id" />
                <p class="description text" :id="painting.id">{{ painting.desc }}</p>

                <div class="modal-wrapper none" :id="painting.id" @click="closeModal">
                    <img class="big-painting" :src="painting.src" :alt="painting.desc" width="550px"
                        :height="painting.height" :id="painting.id" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ArrowsComp from "../components/ArrowsComp.vue";

export default {
    name: 'GalleryView',

    components: {
        ArrowsComp
    },

    data() {
        return {
            paintings: [
                {
                    src: "paintings/1.jpg",
                    desc: "Ветер утих. 1997. Смешанная техника. 55x46",
                    id: 1,
                },
                {
                    src: "paintings/2.jpg",
                    desc: "Города. 2011. Смешанная техника. 60x42",
                    id: 2,
                },
                {
                    src: "paintings/3.jpg",
                    desc: "Погружение. 2011. Смешанная техника. 70x55",
                    id: 3,
                },
                {
                    src: "paintings/4.jpg",
                    desc: "Время и место. 2018. Смешанная техника. 74x59",
                    id: 4,
                },
            ]
        }
    },

    methods: {
        openPicture: function (event) {
            let modalWrappers = document.querySelectorAll(".modal-wrapper");
            let paintingsList = document.querySelector(".paintings-list");

            modalWrappers.forEach(function (modalWrapper) {
                modalWrapper.classList.add("none");
                if (event.target.id === modalWrapper.id && !event.target.classList.contains("modal-wrapper")) {
                    modalWrapper.classList.remove("none");
                    paintingsList.classList.add("paintings-list-opacity")
                }
            });
        },
    }
}
</script>