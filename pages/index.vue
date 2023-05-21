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
    <v-sheet height="55vh" width="100%" style="background: aliceblue;">

        <v-carousel cycle height="100%" hide-delimiter-background show-arrows="hover">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">
                            {{ slide }} Slide
                        </div>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </v-sheet>
</template>
<script setup lang="ts">
const colors = ref([
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
])
const slides = ref([
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
])

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
</style>