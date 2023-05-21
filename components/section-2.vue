<template>
    <v-sheet class="section-02 py-9">
        <v-container style="top: -95px;position: relative;background: transparent;">
            <v-card>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="4" lg="2">
                            <v-select prepend-icon="$marker" label="Location" hide-details
                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="solo"
                                flat></v-select>
                        </v-col>
                        <v-col cols="12" md="4" lg="2">
                            <v-select prepend-icon="$tour" label="Type" hide-details
                                :items="['Adventure', 'Biking', 'Discovery', 'Trekking']" variant="solo" flat></v-select>
                        </v-col>
                        <v-col cols="12" md="4" lg="3">
                            <v-text-field prepend-icon="$date" hide-details type="date" v-model="date" label="Date from"
                                variant="solo" flat></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="3">
                            <v-text-field hide-details type="number" label="Guests" v-model="totalGuests" variant="solo"
                                flat>
                                <template v-slot:append>
                                    <v-menu :close-on-content-click="false">
                                        <template v-slot:activator="{ props }">
                                            <v-btn flat icon v-bind="props">
                                                <v-icon icon="$pencil"></v-icon>
                                            </v-btn>
                                        </template>

                                        <v-card min-width="250">
                                            <v-card-text>
                                                <v-row>
                                                    <v-col><b>{{ guestsSplitup.child }}</b> Children</v-col>
                                                    <v-col class="text-right">
                                                        <v-btn
                                                            @click="guestsSplitup.child > 0 ? guestsSplitup.child -= 1 : null"
                                                            variant="outlined" icon flat size="23">
                                                            <v-icon size="small" icon="$minus"></v-icon>
                                                        </v-btn>
                                                        <v-btn @click="guestsSplitup.child += 1" variant="outlined" icon
                                                            flat size="23" class="ml-3">
                                                            <v-icon size="small" icon="$plus"></v-icon>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col><b>{{ guestsSplitup.youth }}</b> Youth</v-col>
                                                    <v-col class="text-right">
                                                        <v-btn
                                                            @click="guestsSplitup.youth > 0 ? guestsSplitup.youth -= 1 : null"
                                                            variant="outlined" icon flat size="23">
                                                            <v-icon size="small" icon="$minus"></v-icon>
                                                        </v-btn>
                                                        <v-btn @click="guestsSplitup.youth += 1" variant="outlined" icon
                                                            flat size="23" class="ml-3">
                                                            <v-icon size="small" icon="$plus"></v-icon>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col><b>{{ guestsSplitup.adult }}</b> Adult</v-col>
                                                    <v-col class="text-right">
                                                        <v-btn
                                                            @click="guestsSplitup.adult > 0 ? guestsSplitup.adult -= 1 : null"
                                                            variant="outlined" icon flat size="23">
                                                            <v-icon size="small" icon="$minus"></v-icon>
                                                        </v-btn>
                                                        <v-btn @click="guestsSplitup.adult += 1" variant="outlined" icon
                                                            flat size="23" class="ml-3">
                                                            <v-icon size="small" icon="$plus"></v-icon>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-card>
                                    </v-menu>
                                </template>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="2" class="text-right">
                            <v-btn size="x-large" color="primary">Search</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
        <div class="text-center">
            <v-chip color="primary" label class="my-4">
                <p class="text-h6 font-weight-bold">Popular Activities</p>
            </v-chip>
        </div>
        <div class="text-center">
            <h3 class="text-h2 font-weight-bold">Explore real adventure</h3>
        </div>
        <v-container>
            <Carousel :items-to-show="0.9" :breakpoints="{
                600: {
                    itemsToShow: 0.5,
                    snapAlign: 'center',
                },
                700: {
                    itemsToShow: 1.5,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: 3.5,
                    snapAlign: 'start',
                },
                1920: {
                    itemsToShow: 4.1,
                    snapAlign: 'start',
                }
            }" class="my-11" :wrap-around="true">
                <Slide v-for="(slide, index) in adventuresLists" :key="index">
                    <div class="adventure-card" :style="{ background: `url('${slide.bg}')` }">
                        <div class="ad-card-content">
                            <div class="bg-white">
                                <div class="seperator"></div>
                                <h5 class="text-h5 font-weight-bold">{{ slide.title }}</h5>
                                <p class="ad-card-desc mt-3">{{ slide.description }}</p>
                            </div>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </carousel>
        </v-container>
    </v-sheet>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const guestsSplitup = ref({
    child: 0,
    youth: 0,
    adult: 0
})

const date = ref("25/05/2023")

const totalGuests = computed(() => {
    return guestsSplitup.value.adult + guestsSplitup.value.youth + guestsSplitup.value.child
})

const adventuresLists = ref([
    {
        title: "Tent camping services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        bg: "/S02-01.jpeg"
    },
    {
        title: "Trailers & rv spots",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        bg: "/S02-02.jpeg"
    },
    {
        title: "Adventure & Climbing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        bg: "/S02-03.jpeg"
    },
    {
        title: "Couple camping",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        bg: "/S02-04.jpeg"
    },
    {
        title: "Mountaing climbing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        bg: "/S02-05.jpeg"
    },
])
</script>
<style>
/* Calendar component overrides */
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}

.section-02 {
    background: url('/bg-section-02.png') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: left !important;
}

.adventure-card {
    height: 400px;
    width: 350px;
    background: aliceblue;
    border-radius: 17px;
    padding: 2rem;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: top;
}

.ad-card-content {
    background: white;
    bottom: 0;
    padding: 1.3rem 1.5rem;
    border-radius: 11px;
    text-align: start;
    transition: all 0s, opacity 0.5s linear;

}

.seperator {
    height: 5px;
    width: 50px;
    background: #63AB45;
    border-radius: 100px;
    margin-bottom: 23px;
}

.adventure-card:hover {
    cursor: pointer;
}

.adventure-card:hover .ad-card-desc {
    opacity: 1;
    transition: display 0s, opacity 0.5s linear;
    height: 50px;
}

.ad-card-desc {
    transition: opacity 1s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: display 0s, opacity 0.5s linear;
}
</style>