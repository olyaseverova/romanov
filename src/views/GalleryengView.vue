<template>
    <div class="gallery" @keydown="closeModal">

        <ArrowsComp image="arrows-white.png" width="30" height="76" link="/menueng" />

        <ul class="paintings-list list">
            <li class="paintings-list__item" v-for="painting in paintings" :key="painting.id" :id="painting.id"
                @click="openPicture">

                <button class="painting-button" type="button" @click="openPicture" :id="painting.id">
                    <img class="painting" :src="painting.src" :alt="painting.desc" width="500px" :height="painting.height"
                        :id="painting.id" />
                    <p class="description text description-eng" :id="painting.id">{{ painting.desc }}</p>
                </button>

                <div class="modal-wrapper none" :id="painting.id">
                    <img class="big-painting" :src="painting.src" :alt="painting.desc" :id="painting.id" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ArrowsComp from "../components/ArrowsComp.vue";
export default {
    name: 'GalleryengView',

    components: {
        ArrowsComp
    },

    // computed: {
    //     paintings() {
    //         console.log(store.state.paintings)
    //         store.state.paintings.forEach((p, i) => {
    //             p.id = i;
    //             // console.log(p)
    //         });
    //         return store.state.paintings;
    //     },
    // },
    // async mounted() {
    //     store.dispatch("fetchPaintings");
    // },

    data() {
        return {
            paintings: [
                {
                    src: "paintings/5.jpg",
                    desc: "The direction. 2011. Tempera on paper. 55x70",
                    id: "A5",
                },
                {
                    src: "paintings/1.jpg",
                    desc: "The wind died down. 1997 Mixed technique. 55x46",
                    id: "A1",
                },
                {
                    src: "paintings/2.jpg",
                    desc: "Cities. 2011. Mixed technique.60x42",
                    id: "A2",
                },
                {
                    src: "paintings/8.jpg",
                    desc: "The Prachechny bridge. 2013. Mixed technique. 60x70",
                    id: "A8",
                },
                {
                    src: "paintings/7.jpg",
                    desc: "An anxiety. 2013. Tempera on cardboard. 58x72",
                    id: "A7",
                },
                {
                    src: "paintings/40.jpg",
                    desc: "A stage. 2011. Mixed technique 69x54",
                    id: "A40",
                },
                {
                    src: "paintings/25.jpg",
                    desc: "An inner space. 2013. Mixed technique. 60x80",
                    id: "A25",
                },
                {
                    src: "paintings/12.jpg",
                    desc: "No one has been here for a long time. 2013. Mixed technique 60x75",
                    id: "A12",
                },
                {
                    src: "paintings/31.jpg",
                    desc: "Dream Factory. 2013. Mixed technique. 60x80",
                    id: "A31",
                },
                {
                    src: "paintings/66.jpg",
                    desc: "A storage room. 2013. Mixed technique. 60x80",
                    id: "A66",
                },
                {
                    src: "paintings/35.jpg",
                    desc: "Hamlet. 2022. Ink on paper.74x47",
                    id: "A35",
                },
                {
                    src: "paintings/13.jpg",
                    desc: "A door N. 2023. Colour pencils on paper. 73x56",
                    id: "A13",
                },
                {
                    src: "paintings/15.jpg",
                    desc: "The road. 2011. Mixed technique. 69x55",
                    id: "A15",
                },
                {
                    src: "paintings/16.jpg",
                    desc: "A shot. 2023. Colour pencils on paper. 74x56",
                    id: "A16",
                },
                {
                    src: "paintings/14.jpg",
                    desc: "The Journey. 2011. Mixed technique. 70x54",
                    id: "A14",
                },
                {
                    src: "paintings/55.jpg",
                    desc: "A literature lesson. 2023. Colours pencils on paper. 73x56",
                    id: "A55",
                },
                {
                    src: "paintings/3.jpg",
                    desc: "A plunge. 2011. Mixed technique. 70x55",
                    id: "A3",
                },
                {
                    src: "paintings/29.jpg",
                    desc: "The church of Simeon and Anna. 2013. Mixed technique. 2013",
                    id: "A29",
                },
                {
                    src: "paintings/33.jpg",
                    desc: "A way out. 2011. Mixed technique.70x55",
                    id: "A33",
                },
                {
                    src: "paintings/6.jpg",
                    desc: "A meeting on Gorstkin bridge. 2013. Mixed technique. 60x73",
                    id: "A6",
                },
                {
                    src: "paintings/30.jpg",
                    desc: "An arch. 2016. Mixed technique. 75x60",
                    id: "A30",
                },
                {
                    src: "paintings/36.jpg",
                    desc: "A stop. 2018. Watercolour on paper. 66x56",
                    id: "A36",
                },
                {
                    src: "paintings/27.jpg",
                    desc: "That same line. 2021. Mixed technique. 74x60",
                    id: "A27",
                },
                {
                    src: "paintings/26.jpg",
                    desc: "Shchukin dvor. 2018. Tempera on paper. 59x74",
                    id: "A26",
                },
                {
                    src: "paintings/28.jpg",
                    desc: "A perfect location. 2018. Tempera on paper. 60x74",
                    id: "A28",
                },
                {
                    src: "paintings/4.jpg",
                    desc: "Time and place. 2018. Mixed technique. 74x59",
                    id: "A4",
                },
                {
                    src: "paintings/22.jpg",
                    desc: "Next move. 2016. Tempera on paper. 72x57",
                    id: "A22",
                },
                {
                    src: "paintings/32.jpg",
                    desc: "A situation in Verona. 2020. Mixed technique. 77x58",
                    id: "A32",
                },
                {
                    src: "paintings/39.jpg",
                    desc: "The bridge. Venice. 2020. Mixed technique. 75x60",
                    id: "A39",
                },
                {
                    src: "paintings/10.jpg",
                    desc: "Forum Romanum. 2012. Mixed technique. 60x75",
                    id: "A10",
                },
                {
                    src: "paintings/9.jpg",
                    desc: "The Colloseum. 2012. Mixed technique.60x80",
                    id: "A9",
                },
                {
                    src: "paintings/21.jpg",
                    desc: "The castle Sant’Angelo. 2012. Mixed technique. 69x52",
                    id: "A21",
                },
                {
                    src: "paintings/37.jpg",
                    desc: "Roma. The view from castle Saint’Angelo. 2012. Tempera on paper. 50x75",
                    id: "A37",
                },
                {
                    src: "paintings/38.jpg",
                    desc: "Colle Palatino. 2012. Mixed technique. 71x56",
                    id: "A38",
                },
                {
                    src: "paintings/19.jpg",
                    desc: "Venice. 2013. Mixed technique. 80x60",
                    id: "A19",
                },
                {
                    src: "paintings/20.jpg",
                    desc: "An August blizzard. 2022. Ink on paper. 42x30",
                    id: "A20",
                },
                {
                    src: "paintings/18.jpg",
                    desc: "An interior. Hall. 2012. Tempera on cardboard. 73x59",
                    id: "A18",
                },
                {
                    src: "paintings/23.jpg",
                    desc: "A rehearsal. 2011. Mixed technique. 54x72",
                    id: "A23",
                },
                {
                    src: "paintings/43.jpg",
                    desc: "Olga. 2012. Tempera on paper. 74x60",
                    id: "A43",
                },
                {
                    src: "paintings/42.jpg",
                    desc: "Marianne is angry. 2012. Tempera on cardboard. 75x60",
                    id: "A42",
                },
                {
                    src: "paintings/17.jpg",
                    desc: "Nikolas in the room. 2012. Tempera on cardboard. 52x67",
                    id: "A17",
                },
                {
                    src: "paintings/24.jpg",
                    desc: "An evening. 2012 tempera on paper. 60x75",
                    id: "A24",
                },
                {
                    src: "paintings/11.jpg",
                    desc: "An evening game. 2012. Tempera on cardboard. 48x68",
                    id: "A11",
                },
                {
                    src: "paintings/44.jpg",
                    desc: "Voronich in the evening with apple trees. 2017. Tempera on paper. 57x74",
                    id: "A44",
                },
                {
                    src: "paintings/41.jpg",
                    desc: "Trigorskoe. 2016. Tempera on paper. 57x74",
                    id: "A41",
                },
                {
                    src: "paintings/45.jpg",
                    desc: "Savkina hill. 2016. Tempera and oil pastel on paper. 60x74",
                    id: "A45",
                },
                {
                    src: "paintings/46.jpg",
                    desc: "A field. 2016. Watercolour on paper. 60x75",
                    id: "A46",
                },
                {
                    src: "paintings/47.jpg",
                    desc: "From the series based storybook by Vladimir Nabokov “Spring in Fialta“. 1999. Lithography. 38x28",
                    id: "A47",
                },
                {
                    src: "paintings/48.jpg",
                    desc: "Greece. Islands. 1997. Mixed technique. 46x55",
                    id: "A48",
                },
                {
                    src: "paintings/49.jpg",
                    desc: "Mediterranean Islands. Mixed technique. 60x50",
                    id: "A49",
                },
                {
                    src: "paintings/50.jpg",
                    desc: "A dock. Mixed technique. 45x55",
                    id: "A50",
                },
                {
                    src: "paintings/54.jpg",
                    desc: "A road to a mountain. 2015. Tempera on paper. 60x74",
                    id: "A54",
                },
                {
                    src: "paintings/63.jpg",
                    desc: "From the series based novel by Michail Pozdnev “Owl”. 2021. Ink on paper. 42x32",
                    id: "A63",
                },
                {
                    src: "paintings/65.jpg",
                    desc: "A Russian literature lesson. 2023. Lithography. 47x38",
                    id: "A65",
                },
                {
                    src: "paintings/64.jpg",
                    desc: "From the series based storybook by Vladimir Nabokov “Spring in Fialta “. 1999. Lithography. 38x28",
                    id: "A64",
                },
                {
                    src: "paintings/53.jpg",
                    desc: "From the series based storybook by Vladimir Nabokov “Spring in Fialta”. 1999. Lithography. 38x28",
                    id: "A53",
                },
                {
                    src: "paintings/56.jpg",
                    desc: "From the series based storybook by Vladimir Nabokov “Spring in Fialta”. 1999. Lithography. 38x28",
                    id: "A56",
                },
                {
                    src: "paintings/51.jpg",
                    desc: "A twilight. 1998. Lithography. 19x23",
                    id: "A51",
                },
                {
                    src: "paintings/52.jpg",
                    desc: "From the series based storybook by Vladimir Nabokov “Spring in Fialta “. 1999. Lithography. 38x28",
                    id: "A52",
                },
                {
                    src: "paintings/57.jpg",
                    desc: "From the series based novel by Michail Pozdnev “Owl”. 2021. Ink on paper. 42x32",
                    id: "A57",
                },
                {
                    src: "paintings/58.jpg",
                    desc: "From the series based novel by Michail Pozdnev “Owl”. 2021. Ink on paper. 42x32",
                    id: "A58",
                },
                {
                    src: "paintings/59.jpg",
                    desc: "From the series based novel by Michail Pozdnev “Owl”. 2021. Ink on paper. 42x32",
                    id: "A59",
                },
                {
                    src: "paintings/60.jpg",
                    desc: "From the series based novel by Michail Pozdnev “Owl”. 2021. Ink on paper. 42x32",
                    id: "A60",
                },
                {
                    src: "paintings/61.jpg",
                    desc: "From the series based novel by Michail Pozdnev “Owl”. 2021. Ink on paper. 42x32",
                    id: "A61",
                },
                {
                    src: "paintings/62.jpg",
                    desc: "A melody. 1998. Lithography. 34x22",
                    id: "A62",
                },
                {
                    src: "paintings/34.jpg",
                    desc: "The walk. 1996. Lithography. 30x21",
                    id: "A34",
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

        closeModal: function (event) {
            this.keyValue = event.key

            let modalWrappers = document.querySelectorAll(".modal-wrapper");
            modalWrappers.forEach(function (modalWrapper) {
                if (event.key === "Escape") {
                    modalWrapper.classList.add("none");
                }
            });

        }
    }
}
</script>