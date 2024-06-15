<template>
    <div class="about">
        <ArrowsComp image="arrows-white.png" width="30" height="76" />
        <div class="about-info">
            <img class="romanov-img romanov-img-eng" src="@/img/romanov.png" alt="Владимир Романов" />
            <p class="about-info__text text text-eng">Vladimir Romanov was born in Leningrad in 1974.
                Leaving the B. Ioganson Secondary Art School in 1992, Vladimir went on to continue his education at the Ilya
                Repin Institute of Arts, the book graphics workshop supervised by Professor A.A. Pakhomov, which he
                graduated from in 1999 presenting a series of prints based on "Spring in Fialta", a set of the stories by
                V.V. Nabokov, as his graduation project.Between 2000 and 2012, Vladimir created some murals,
                panel-paintings, reliefs and worked on decorative interior design in Russia, the USA and the UK. Among other
                locations, the Marriott WTC New York Hotel which was part of the Twin Towers of the World Trade Center, the
                Atlantic Central Brooklyn New York, the Boca Raton Club Hotel Florida and the Barkley and Marriott hotels in
                London should be mentioned.
            </p>
            <p class="about-info__text text text-eng">Vladimir has worked on designing the settings of cultural and social
                events and
                has created sketches of theatrical costumes and sets. For instance, he was an artistic designer of a project
                to create a new generation show, "The Horrors of St. Petersburg – a Territory of Ghosts". He created
                sketches of sets and video projections for "The Bremen Town Musicians on Ice" production at Ledovy Dvorets
                in St. Petersburg (The Ice Palace arena). He also took part in the design of the Scarlet Sails show on
                Palace Square. He created some artwork (sculptures) for the "Imperial Gardens" exhibition, which was held in
                the Mikhailovsky Garden of the State Russian Museum. Currently, Vladimir teaches at the Graphic Faculty of
                the St. Petersburg Ilya Repin Academy of Arts. He has participated in numerous exhibitions. In 2013, a
                personal exhibition was held at the Moika, 12 All-Russian Pushkin Museum. He is a member of the Union of
                Artists of Russia.</p>
        </div>

        <ul class="quotes-list list">
            <li class="quotes-list__item" v-for="quote in quotes" :key="quote.id">
                <blockquote class="quote">
                    <p class="quote-text text text-eng">{{ quote.text }}</p>
                    <cite class="quote-cite">{{ quote.cite }}</cite>
                </blockquote>
            </li>
        </ul>

        <p class="text text-question text-eng">
            What does art talk to us about?<br>
            What questions does it pose?<br>
            About beauty and eternity?<br>
            About new meanings and time?<br>
            About the frailty of life?<br>
            I believe that art speaks about freedom.<br>
            About going into the realm of fantasy beyond the rational.<br>
            Into the territory of the mysterious.<br>
            It is freedom only that can be a guide in these spaces…
        </p>
    </div>
</template>
    
<script>
import ArrowsComp from "../components/ArrowsComp.vue";

export default {
    name: 'AboutengView',

    components: {
        ArrowsComp
    },

    data() {
        return {
            quotes: [
                {
                    text: "«The reason why I like the works by Vladimir Romanov is their professionalism and a recognizable, pronounced individual style. They have a sense of the author's thoughtful and serious attitude to the world around him, where everything is of value to him: nature, the architecture of his hometown, its canals and bridges, the interiors of a house inspired by human presence. V. Romanov's compositions are verified, clearly constructed; they often have some rigour, even severity; sometimes they strike the viewer with their strangeness, with a Piranesi-like fantasy whereas sometimes it is their classical clarity that impresses. The complex mixed technique used by the artist allows him to create expressive works exquisite in terms of colour, the works that always bear an imprint of his mood.»",
                    cite: "Tamara Bukovskaya, poet, essayist, author of articles on the problems of modern fine art."
                },
                {
                    text: "«Vladimir Romanov's works are meaningful, emotional and beautiful. They are characterized by pictorial and plastic culture, unexpected composition and finality.»",
                    cite: "Andrey Pakhomov, Corresponding Member of the Russian Academy of Arts, Honoured Artist of the Russian Federation."
                }
            ]
        }
    }
}
</script>
    