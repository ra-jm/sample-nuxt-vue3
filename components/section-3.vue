<template>
    <v-sheet class="section-03 py-15">
        <v-container class="fill-height">
            <v-row class="fill-height" align="center">
                <v-col>
                    <div class="hero-image">
                        <!-- <div class="hero-thumbnail"></div>
                        <div class="hero-xp">
                            <h3 class="text-h3 font-weight-bold text-primary">28</h3>
                            <p class="text-body-1">Years of experience</p>
                        </div> -->
                    </div>
                </v-col>
                <v-col>
                    <div class="mb-9">
                        <v-chip color="primary" label class="my-4">
                            <p class="text-h6 font-weight-bold">About company</p>
                        </v-chip>
                        <h3 class="text-h2 font-weight-bold">Great oppurtunity for adventure & travels</h3>
                    </div>
                    <v-timeline side="end" align="start">
                        <v-timeline-item dot-color="primary" size="small">
                            <h5 class="text-h5 font-weight-bold">Safety first always</h5>
                            <p class="text-body-1 mb-9">Set perspiciatis unde omnis estenatus voluptatem totarem aperiae.</p>
                        </v-timeline-item>
                        <v-timeline-item dot-color="green" size="small">
                            <h5 class="text-h5 font-weight-bold">Affordable & Friendly</h5>
                            <p class="text-body-1 mb-9">Quis autem vel eum iure voluptate velit esse nihile consequatur.</p>
                        </v-timeline-item>
                        <v-timeline-item dot-color="indigo" size="small">
                            <h5 class="text-h5 font-weight-bold">Trusted travel guide</h5>
                            <p class="text-body-1 mb-9">At vero accusamus dignissimos ducimus blanditiis deleniti atque quos.</p>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<style>
.section-03 {
    background: url('/bg-section-03.png') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
}

.v-timeline {
    float: left !important;
}

.hero-image {
    background: url('/S03-01.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    border-top-right-radius: 5rem;
    border-bottom-left-radius: 5rem;
    height: 300px !important;
    width: 300px !important;
    display: block;
}

.hero-thumbnail {
    background: url('/S03-02.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    border-radius: 2rem;
    border: 13px solid white;
    height: 225px;
    width: 300px;
    position: relative;
    bottom: -300px;
    left: -100px;
}

.hero-xp {
    background: white;
    border-radius: 13px;
    display: flex;
    gap: 13px;
    width: min-content;
    padding: 1.5rem 2rem;
    position: relative;
    bottom: -200px;
    right: -350px;
}
</style>