<template>
    <v-toolbar class="app-topbar" color="primary" density="compact" border>
        <v-container>
            <v-row>
                <v-col style="display: flex;gap: 23px;align-items: center;justify-content: start;">
                    <p class="app-topbar-content">
                        <v-icon icon="$marker"></v-icon>
                        250 Main Street, 2nd Floor, USA
                    </p>
                    <p class="app-topbar-content">
                        <v-icon icon="$email"></v-icon>
                        contact@example.com
                    </p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col style="display: flex;gap: 23px;align-items: center;justify-content: end;">
                    <p class="app-topbar-content">Book Now</p>
                    <p class="app-topbar-content">About</p>
                    <v-btn icon size="small">
                        <v-badge floating offset-x="3" offset-y="7" content="2" color="error">
                            <v-icon icon="$cart">
                            </v-icon>
                        </v-badge>
                    </v-btn>
                    <!-- <v-btn icon size="small">
                        <v-icon icon="$cart">
                        </v-icon>
                    </v-btn> -->
                </v-col>
            </v-row>
        </v-container>
    </v-toolbar>
    <v-app-bar height="90" elevation="0">
        <v-container>
            <v-app-bar-title>
                <img src="/logo.png" height="29px" alt="">
            </v-app-bar-title>
        </v-container>
    </v-app-bar>
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
</template>
<script setup lang="ts">

</script>
<style>
.app-topbar {
    font-weight: 600 !important;
    font-size: small;
    background: repeating-linear-gradient(45deg,
            rgba(189, 189, 189, 0.09),
            rgba(200, 200, 200, 0.09) 5px,
            rgba(130, 130, 130, 0.1) 5px,
            rgba(98, 98, 98, 0.1) 10px),
        #63AB45 !important;
}

.app-topbar>.v-toolbar__content {
    height: 39px !important;
}

.app-topbar-content {
    display: flex;
    gap: 13px;
    align-items: center;
}

.v-toolbar-title__placeholder {
    display: flex !important;
}

.v-badge__badge {
    height: 1rem;
}

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