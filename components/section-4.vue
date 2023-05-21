<template>
    <v-sheet class="section-04 py-15 ">
        <v-container>
            <div class="mb-9 text-center">
                <v-chip color="primary" label class="my-4">
                    <p class="text-h6 font-weight-bold text-orange">Popular Activity</p>
                </v-chip>
                <h3 class="text-h2 font-weight-bold text-white mt-5">Feel real adventure and very <br /> close to nature
                </h3>
            </div>
            <v-row class="mt-15">
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card-text class="pa-9">
                            <v-list-item title="Tent camping" prepend-icon="$camp">
                            </v-list-item>
                            <v-list-item title="Adventure travel" prepend-icon="$world">
                            </v-list-item>
                            <v-list-item title="Mountain biking" prepend-icon="$bike">
                            </v-list-item>
                            <v-list-item title="Discovery world" prepend-icon="$travel">
                            </v-list-item>
                            <v-list-item title="Fishing & Swimming" prepend-icon="$swim">
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" style="display: flex;flex-direction: column;justify-content: space-evenly;">
                    <img src="/S04-03.png" height="90" width="90" alt="">
                    <h5 class="text-h4 font-weight-bold text-white">
                        Real adventure & enjoy your dream tours
                    </h5>
                    <h5 class="text-body-1 text-white mt-7">
                        Sit amet consectetur velit integer tincidunt scelerisque volutpat neque fermeny massa lacus.
                    </h5>
                    <img width="250px" src="/S04-01.png" alt="" class="mt-7">
                    <div class="mt-7">
                        <v-row>
                            <v-col>
                                <h5 class="text-h6 text-white font-weight-bold">Satisfied clients</h5>
                            </v-col>
                            <v-col class="text-right">
                                <h5 class="text-h6 text-white font-weight-bold">89%</h5>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-progress-linear color="primary" bg-color="white" model-value="89"></v-progress-linear>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="mt-7">
                        <v-row>
                            <v-col>
                                <h5 class="text-h6 text-white font-weight-bold">Success rate</h5>
                            </v-col>
                            <v-col class="text-right">
                                <h5 class="text-h6 text-white font-weight-bold">89%</h5>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-progress-linear color="primary" bg-color="white" model-value="89"></v-progress-linear>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="third-col">
                    </div>
                </v-col>
            </v-row>
            <v-card class="mt-15"
                style="background: url(/bg-section-02.png);background-size: cover;background-color: #63AB45;">
                <v-card-text class="py-13 px-9">
                    <v-row align="center">
                        <v-col cols="2" md="1">
                            <v-icon size="65" color="white" icon="$travel"></v-icon>
                        </v-col>
                        <v-col cols="12" md="8">
                            <p class="text-body-1 text-white">QUISEQUE VEL ORTOR
                            </p>
                            <h3 class="text-h3 font-weight-bold text-white">
                                Ready to adventure and enjoy natural
                            </h3>
                        </v-col>
                        <v-col cols="12" md="3" class="text-center">
                            <v-btn flat size="x-large">Explore more</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </v-sheet>
</template>
<script setup lang="ts"></script>
<style scoped>
.section-04 {
    background: url('/bg-section-04.jpeg') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
}

.v-list-item {
    padding: 1.5rem !important;
    background: aliceblue !important;
    margin-bottom: 26px !important;
    color: black !important;
}

.v-list-item-title {
    font-size: large !important;
    font-weight: 700 !important;
    font-family: "Kumbh Sans", sans-serif !important;
    color: black !important;
}

.third-col {
    background: url('/S04-02.jpeg') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    height: 100%;
    width: 100%;
    border-radius: 13px;
}
</style>