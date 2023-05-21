<template>
    <v-sheet height="65vh" width="100%" style="background: aliceblue;">
        <v-carousel cycle height="100%" hide-delimiter-background hide-delimiters show-arrows="hover">
            <v-carousel-item>
                <div class="fill-height slide-1">
                    <v-container class="fill-height">
                        <div class="d-flex fill-height justify-start align-center">
                            <div>
                                <h2 class="text-h2 text-white font-weight-bold">Your journey begins here</h2>
                                <h6 class="text-h6 text-white mt-7">8000 tours available. Book now.</h6>
                                <v-btn class="mt-7" color="primary" size="x-large" variant="flat">Let's Get Started</v-btn>
                            </div>
                        </div>
                    </v-container>
                </div>
            </v-carousel-item>
            <v-carousel-item>
                <div class="fill-height slide-2">
                    <v-container class="fill-height">
                        <div class="d-flex fill-height justify-start align-center">
                            <div>
                                <h2 class="text-h2 text-white font-weight-bold">Tour Travel & Adventure camping</h2>
                                <h6 class="text-h6 text-white mt-7">8000 tours available. Book now.</h6>
                                <v-btn class="mt-7" color="primary" size="x-large" variant="flat">Let's Get Started</v-btn>
                            </div>
                        </div>
                    </v-container>
                </div>
            </v-carousel-item>
        </v-carousel>
    </v-sheet>
    <section-2></section-2>
    <section-3></section-3>
    <section-4></section-4>
    <section-5></section-5>
    <section-6></section-6>
    <section-7></section-7>
</template>
<script setup lang="ts">
useHead({
    title: "Gowilds - Tours & Travels",
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: 'Gowilds - Tours & Travels, one stop solution for all your travel requirements.'
        }
    ]
})
</script>
<style>
.slide-1::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url('/bg-home-slide-01.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: background;
    animation: breath 30s infinite;
}

.slide-2::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url('/bg-home-slide-02.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: background;
    animation: breath 30s infinite;
}

.card-content {
    padding: 2rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.05) 100%);
}

.card-decors {
    -webkit-box-shadow: 0 10px 60px rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 60px rgba(0, 0, 0, 0.1);
    margin-top: 0;
    border-radius: 13px;
}

@keyframes breath {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
</style>