<template>
    <div class="gallery" @keydown="closeModal">
        <ArrowsComp image="arrows-white.png" width="30" height="76" link="/menu" />

        <ul class="paintings-list list">
            <li class="paintings-list__item" v-for="painting in paintings" :key="painting.id" :id="painting.id"
                @click="openPicture">

                <button class="painting-button" type="button" @click="openPicture" :id="painting.id">
                    <img class="painting" :src="painting.src" :alt="painting.desc" width="500px" :height="painting.height"
                        :id="painting.id" />
                    <p class="description text" :id="painting.id">{{ painting.desc }}</p>
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
    name: 'GalleryView',

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
                    desc: "Направление. 2011. Бумага, темпера. 55x70",
                    id: "A5",
                },
                {
                    src: "paintings/1.jpg",
                    desc: "Ветер утих. 1997. Смешанная техника. 55x46",
                    id: "A1",
                },
                {
                    src: "paintings/2.jpg",
                    desc: "Города. 2011. Смешанная техника. 60x42",
                    id: "A2",
                },
                {
                    src: "paintings/8.jpg",
                    desc: "Прачечный мост. 2013. Смешанная техника. 60x70",
                    id: "A8",
                },
                {
                    src: "paintings/7.jpg",
                    desc: "Тревога. 2013. Картон, темпера. 58x72",
                    id: "A7",
                },
                {
                    src: "paintings/40.jpg",
                    desc: "Подмостки. 2011. Смешанная техника. 69x54",
                    id: "A40",
                },
                {
                    src: "paintings/25.jpg",
                    desc: "Внутреннее пространство. 2013. Смешанная техника. 60x80",
                    id: "A25",
                },
                {
                    src: "paintings/12.jpg",
                    desc: "Здесь давно никого нет. 2013. Смешанная техника. 60x75",
                    id: "A12",
                },
                {
                    src: "paintings/31.jpg",
                    desc: "Фабрика грез. 2013. Смешанная техника. 60x80",
                    id: "A31",
                },
                {
                    src: "paintings/66.jpg",
                    desc: "Кладовая. 2013. Смешанная техника. 60x80",
                    id: "A66",
                },
                {
                    src: "paintings/35.jpg",
                    desc: "Гамлет. 2022. Бумага, тушь. 74x47",
                    id: "A35",
                },
                {
                    src: "paintings/13.jpg",
                    desc: "Дверь N. 2023. Бумага, цветной карандаш. 73x56",
                    id: "A13",
                },
                {
                    src: "paintings/15.jpg",
                    desc: "Дорога. 2011. Смешанная техника. 69x55",
                    id: "A15",
                },
                {
                    src: "paintings/16.jpg",
                    desc: "Выстрел. 2023. Бумага, цветной карандаш. 74x56",
                    id: "A16",
                },
                {
                    src: "paintings/14.jpg",
                    desc: "Путешествие. 2012. Смешанная техника. 70x54",
                    id: "A14",
                },
                {
                    src: "paintings/55.jpg",
                    desc: "Урок литературы. 2023. Бумага, цветной карандаш. 73x56",
                    id: "A55",
                },
                {
                    src: "paintings/3.jpg",
                    desc: "Погружение. 2011. Смешанная техника. 70x55",
                    id: "A3",
                },
                {
                    src: "paintings/29.jpg",
                    desc: "Церковь Симеона и Анны. 2013. Смешанная техника. 70x56",
                    id: "A29",
                },
                {
                    src: "paintings/33.jpg",
                    desc: "Выход. 2011. Смешанная техника. 70x55",
                    id: "A33",
                },
                {
                    src: "paintings/6.jpg",
                    desc: "Встреча на Горсткином мосту. 2013. Смешанная техника. 60x73",
                    id: "A6",
                },
                {
                    src: "paintings/30.jpg",
                    desc: "Арка. 2016. Смешанная техника. 75x60",
                    id: "A30",
                },
                {
                    src: "paintings/36.jpg",
                    desc: "Остановка. 2018. Бумага, акварель, тушь. 66x56",
                    id: "A36",
                },
                {
                    src: "paintings/27.jpg",
                    desc: "Тот самый переулок. 2021. Смешанная техника. 74x60",
                    id: "A27",
                },
                {
                    src: "paintings/26.jpg",
                    desc: "Щукин двор. 2018. Бумага, темпера. 59x74",
                    id: "A26",
                },
                {
                    src: "paintings/28.jpg",
                    desc: "Идеальное расположение. 2018. Бумага, темпера. 60x74",
                    id: "A28",
                },
                {
                    src: "paintings/4.jpg",
                    desc: "Время и место. 2018. Смешанная техника. 74x59",
                    id: "A4",
                },
                {
                    src: "paintings/22.jpg",
                    desc: "Следующий ход. 2016. Бумага, темпера. 72x57",
                    id: "A22",
                },
                {
                    src: "paintings/32.jpg",
                    desc: "Случай в Вероне. 2020. Смешанная техника. 77x58",
                    id: "A32",
                },
                {
                    src: "paintings/39.jpg",
                    desc: "Мост. Венеция. 2020. Смешанная техника. 75x60",
                    id: "A39",
                },
                {
                    src: "paintings/10.jpg",
                    desc: "Римский форум. 2012. Смешанная техника. 60x75",
                    id: "A10",
                },
                {
                    src: "paintings/9.jpg",
                    desc: "Колизей. 2011. Смешанная техника. 60x80",
                    id: "A9",
                },
                {
                    src: "paintings/21.jpg",
                    desc: "Замок Святого Ангела. 2012. Смешанная техника. 69x52",
                    id: "A21",
                },
                {
                    src: "paintings/37.jpg",
                    desc: "Рим. Вид с Замка Святого Ангела. 2012. Бумага, темпера. 50x75",
                    id: "A37",
                },
                {
                    src: "paintings/38.jpg",
                    desc: "Холм Палатин. 2012. Смешанная техника. 71x56",
                    id: "A38",
                },
                {
                    src: "paintings/19.jpg",
                    desc: "Венеция. 2013. Смешанная техника. 80x60",
                    id: "A19",
                },
                {
                    src: "paintings/20.jpg",
                    desc: "Метель августа. 2022. Бумага, тушь. 42x30",
                    id: "A20",
                },
                {
                    src: "paintings/18.jpg",
                    desc: "Интерьер. Холл. 2012. Картон, темпера. 73x59",
                    id: "A18",
                },
                {
                    src: "paintings/23.jpg",
                    desc: "Репетиция. 2011. Смешанная техника. 54x72",
                    id: "A23",
                },
                {
                    src: "paintings/43.jpg",
                    desc: "Оля. 2012. Бумага, темпера. 74x60",
                    id: "A43",
                },
                {
                    src: "paintings/42.jpg",
                    desc: "Марианна сердится. 2012. Картон, темпера. 75x60",
                    id: "A42",
                },
                {
                    src: "paintings/17.jpg",
                    desc: "Коля в комнате. 2012. Картон, темпера. 52x67",
                    id: "A17",
                },
                {
                    src: "paintings/24.jpg",
                    desc: "Вечер. 2012. Бумага, темпера. 60x75",
                    id: "A24",
                },
                {
                    src: "paintings/11.jpg",
                    desc: "Вечерняя партия. 2012. Картон, темпера. 48x68",
                    id: "A11",
                },
                {
                    src: "paintings/44.jpg",
                    desc: "Вечерний Воронич с яблонями. 2017. Бумага, темпера. 57x74",
                    id: "A44",
                },
                {
                    src: "paintings/41.jpg",
                    desc: "Тригорское. 2016.Бумага, темпера. 57x74",
                    id: "A41",
                },
                {
                    src: "paintings/45.jpg",
                    desc: "Савкина горка. 2016. Бумага, темпера, масленная пастель. 60x74",
                    id: "A45",
                },
                {
                    src: "paintings/46.jpg",
                    desc: "Поле. 2016. Бумага, акварель.  60x75",
                    id: "A46",
                },
                {
                    src: "paintings/47.jpg",
                    desc: "Лист из серии по мотивам сборника рассказов В.В.Набокова «Весна в Фиальте». 1999. Литография. 38x28",
                    id: "A47",
                },
                {
                    src: "paintings/48.jpg",
                    desc: "Греция. Острова. 1997. Смешанная техника. 46x55",
                    id: "A48",
                },
                {
                    src: "paintings/49.jpg",
                    desc: "На островах в Средиземном море, 1997, Смешанная техника. 60х50",
                    id: "A49",
                },
                {
                    src: "paintings/50.jpg",
                    desc: "Причал. 1997 Смешанная техника. 45х55",
                    id: "A50",
                },
                {
                    src: "paintings/54.jpg",
                    desc: "Дорога на гору. 2015. Бумага, темпера. 60x74",
                    id: "A54",
                },
                {
                    src: "paintings/63.jpg",
                    desc: "Лист из серии по мотивам романа М.М.Позднева «Филин». 2021 Бумага, тушь. 42x30",
                    id: "A63",
                },
                {
                    src: "paintings/65.jpg",
                    desc: "Урок отечественной литературы. 2023. Литография. 47x38",
                    id: "A65",
                },
                {
                    src: "paintings/64.jpg",
                    desc: "Лист из серии по мотивам сборника рассказов В.В.Набокова «Весна в Фиальте». 1999. Литография. 38x28",
                    id: "A64",
                },
                {
                    src: "paintings/53.jpg",
                    desc: "Лист из серии по мотивам сборника рассказов В.В.Набокова «Весна в Фиальте». 1999. Литография. 38x28",
                    id: "A53",
                },
                {
                    src: "paintings/56.jpg",
                    desc: "Лист из серии по мотивам сборника рассказов В.В.Набокова «Весна в Фиальте». 1999. Литография. 38x28",
                    id: "A56",
                },
                {
                    src: "paintings/51.jpg",
                    desc: "Сумерки. 1998. Литография, 19х23",
                    id: "A51",
                },
                {
                    src: "paintings/52.jpg",
                    desc: "Лист из серии по мотивам сборника рассказов В.В.Набокова «Весна в Фиальте». 1999. Литография. 38x28",
                    id: "A52",
                },
                {
                    src: "paintings/57.jpg",
                    desc: "Лист из серии по мотивам романа М.М.Позднева «Филин». 2021. Бумага, тушь.  42x30",
                    id: "A57",
                },
                {
                    src: "paintings/58.jpg",
                    desc: "Лист из серии по мотивам романа М.М.Позднева «Филин». 2021. Бумага, тушь.  42x30",
                    id: "A58",
                },
                {
                    src: "paintings/59.jpg",
                    desc: "Лист из серии по мотивам романа М.М.Позднева «Филин». 2021. Бумага, тушь.  42x30",
                    id: "A59",
                },
                {
                    src: "paintings/60.jpg",
                    desc: "Лист из серии по мотивам романа М.М.Позднева «Филин». 2021. Бумага, тушь.  42x30",
                    id: "A60",
                },
                {
                    src: "paintings/61.jpg",
                    desc: "Лист из серии по мотивам романа М.М.Позднева «Филин». 2021. Бумага, тушь.  42x30",
                    id: "A61",
                },
                {
                    src: "paintings/62.jpg",
                    desc: "Мелодия. 1998 Литография. 34х22",
                    id: "A62",
                },
                {
                    src: "paintings/34.jpg",
                    desc: "Прогулка. 1996. Литография. 30x21",
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