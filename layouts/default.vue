<template>
    <v-app>
        <v-navigation-drawer theme="dark" v-model="drawer" location="right" temporary>
            <v-list>
                <v-list-item prepend-icon="$home" title="Home"></v-list-item>

                <v-list-group prepend-icon="$travel" value="Users">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="$travel" title="Tours"></v-list-item>
                    </template>
                    <v-list-item title="Search"></v-list-item>
                    <v-list-item title="List"></v-list-item>
                    <v-list-item title="Filter"></v-list-item>
                </v-list-group>
                <v-list-group prepend-icon="$marker" value="dest">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="$marker" title="Destination"></v-list-item>
                    </template>
                    <v-list-item title="California"></v-list-item>
                    <v-list-item title="Switzerland"></v-list-item>
                    <v-list-item title="Thailand"></v-list-item>
                </v-list-group>
                <v-list-item prepend-icon="$email" title="Contact"></v-list-item>

            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="app-topbar" color="primary" density="compact" border>
            <v-container>
                <v-row>
                    <v-col style="display: flex;gap: 23px;align-items: center;justify-content: start;">
                        <p class="app-topbar-content d-none d-lg-flex">
                            <v-icon icon="$marker"></v-icon>
                            250 Main Street, 2nd Floor, USA
                        </p>
                        <p class="app-topbar-content d-none d-md-flex">
                            <v-icon icon="$email"></v-icon>
                            contact@example.com
                        </p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col style="display: flex;gap: 23px;align-items: center;justify-content: end;">
                        <p class="app-topbar-content d-none d-md-flex">Book Now</p>
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
            <v-app-bar-nav-icon class="d-flex d-md-none" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-container>
                <v-row>
                    <v-col>
                        <v-app-bar-title>
                            <img src="/logo.png" height="29px" alt="">
                        </v-app-bar-title>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-none d-md-flex">
                        <v-btn flat>Home</v-btn>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn append-icon="$chevDown" flat v-bind="props">
                                    Tour
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(item, index) in ['Search', 'Filter', 'Lists']" :key="index"
                                    :value="index">
                                    <v-list-item-title class="text-black">{{ item }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn append-icon="$chevDown" flat v-bind="props">
                                    Destination
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(item, index) in ['California', 'Thailand']" :key="index"
                                    :value="index">
                                    <v-list-item-title class="text-black">{{ item }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-btn flat>Contact</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <slot />
        <v-footer style="background-color: #1D231F;">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-row class="py-15">
                            <v-col cols="3" class="text-center">
                                <v-icon icon="$agent" size="65" color="white"></v-icon>
                            </v-col>
                            <v-col>
                                <h4 class="text-h4 text-white font-weight-bold">Need any suport for tour & travels?</h4>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row class="py-15">
                            <v-col cols="3" class="text-center">
                                <v-icon icon="$travel" size="65" color="white"></v-icon>
                            </v-col>
                            <v-col>
                                <h4 class="text-h4 text-white font-weight-bold">Ready to get started with vaccations!</h4>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider class="mb-9" color="white"></v-divider>
                <v-row>
                    <v-col cols="12" md="3">
                        <img src="/logo-white.png" height="29px" alt="" class="mb-7">
                        <p class="text-body-1 text-white mb-7">
                            To take trivial example which us
                            ever undertakes laborious physica exercise except obsome.
                        </p>
                        <v-btn icon class="mr-2">
                            <v-icon icon="$facebook"></v-icon>
                        </v-btn>
                        <v-btn icon class="mr-2">
                            <v-icon icon="$instagram"></v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="3">
                        <h5 class="text-h5 font-weight-bold mb-5 text-white">Pages</h5>
                        <ul>
                            <li class="text-white mb-3">About us</li>
                            <li class="text-white mb-3">Work with us</li>
                            <li class="text-white mb-3">Community blog</li>
                            <li class="text-white mb-3">Contact us</li>
                            <li class="text-white mb-3">Privacy policy</li>
                        </ul>
                    </v-col>
                    <v-col cols="12" md="3">
                        <h5 class="text-h5 font-weight-bold mb-5 text-white">Newsletter</h5>
                        <p class="text-body-1 text-white mb-7">
                            Subscribe our newsletter to get our latest update & news.
                        </p>
                        <v-text-field append-inner-icon="$send" variant="solo" flat></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <h5 class="text-h5 font-weight-bold mb-5 text-white">Contact us</h5>
                        <v-list-item prepend-icon="$call" title="Drop a line" subtitle="+00(123) 456 889"></v-list-item>
                        <v-list-item prepend-icon="$email" title="Email" subtitle="contact@example.com"></v-list-item>
                        <v-list-item prepend-icon="$marker" title="Visit us"
                            subtitle="583 main street, NY, USA"></v-list-item>
                    </v-col>
                </v-row>
                <v-divider class="mb-9" color="white"></v-divider>
                <v-row>
                    <v-col class="text-center">
                        <p class="text-white">
                            {{ new Date().getFullYear() }} — <strong>Copyrights by Gowilds</strong>
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>
<script lang="ts" setup>
const drawer = ref(false);
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

ul {
    list-style-type: none;
}

.v-list-item {
    padding: 1.2rem !important;
    color: white;
}

.v-list-item-title {
    font-size: large !important;
    font-weight: 700 !important;
    font-family: "Kumbh Sans", sans-serif !important;
}
</style>