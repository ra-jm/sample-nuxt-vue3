<template>
    <v-sheet class="section-05 py-15 ">
        <v-parallax height="900" src="/bg-home-slide-02.jpeg">
            <div class="fill-height bg-overlay">
                <v-container class="fill-height">
                    <v-row align="center" class="fill-height">
                        <v-col cols="12" md="6">
                            <v-chip color="primary" label>
                                <p class="text-h6 font-weight-bold text-orange">Are you ready to travel?</p>
                            </v-chip>
                            <h3 class="text-h3 font-weight-bold text-white mt-9">
                                Ready to travel with real adventure & enjoy natural
                            </h3>
                            <v-btn size="x-large" color="primary" class="mt-9">Check availability</v-btn>
                        </v-col>
                        <v-col style="display: flex;justify-content: center;" cols="12" md="6">
                            <div class="tiles">
                                <div class="tile text-white">
                                    <v-icon icon="$bike"></v-icon>
                                    Wildlife tour
                                </div>
                                <div class="tile text-white">
                                    <v-icon icon="$travel"></v-icon>
                                    Paragliding tour
                                </div>
                                <div class="tile text-white">
                                    <v-icon icon="$hike"></v-icon>
                                    Wildlife tour
                                </div>
                                <div class="tile text-white">
                                    <v-icon icon="$marker"></v-icon>
                                    Wildlife tour
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-parallax>
    </v-sheet>
</template>
<style>
/* .section-05 {
    height: 95vh;
} */
.v-responsive__content {
    z-index: 1 !important;
}

.bg-overlay {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 100%);
}

.tiles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 11px;
}

.tile {
    aspect-ratio: 1/ 1;
    border: 1px solid grey;
    padding: 13px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 13px;
    font-size: x-large;
    font-weight: 700;
}
</style>