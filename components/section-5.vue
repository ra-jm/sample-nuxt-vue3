<template>
    <v-sheet class="section-05 py-15 ">
        <v-container>
            <div class="mb-9 text-center">
                <v-chip color="primary" label>
                    <p class="text-h6 font-weight-bold ">Featured tours</p>
                </v-chip>
                <h3 class="text-h2 font-weight-bold my-15">Amazing tour places around <br /> the world
                </h3>
            </div>
            <v-row>
                <v-col>
                    <v-card class="mx-auto card-decors" max-width="400">
                        <v-img class="align-end text-white" height="400" src="/S02-03.jpeg" cover>
                            <v-chip color="white" label class="my-4 fixed-top-left">
                                <p class="text-h6 font-weight-bold ">Featured</p>
                            </v-chip>
                            <div class="card-content">
                                <v-rating bg-color="orange-lighten-1" color="blue"></v-rating>
                                <h3 class="text-h5 font-weight-bold">Discovery island kayak tour</h3>
                                <p class="text-body-1 mt-3"><v-icon icon="$marker" class="mr-3"></v-icon> Main Street,
                                    Brooklyn, NY</p>
                                <p class="text-body-1 mt-3"><v-icon icon="$currency" class="mr-3"></v-icon> From <span
                                        class="text-primary font-weight-bold">$129.00</span></p>
                            </div>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mx-auto card-decors" max-width="400">
                        <v-img class="align-end text-white" height="400" src="/S02-02.jpeg" cover>
                            <v-chip color="white" label class="my-4 fixed-top-left">
                                <p class="text-h6 font-weight-bold ">Featured</p>
                            </v-chip>
                            <div class="card-content">
                                <v-rating bg-color="orange-lighten-1" color="blue"></v-rating>
                                <h3 class="text-h5 font-weight-bold">Beautiful floating villa</h3>
                                <p class="text-body-1 mt-3"><v-icon icon="$marker" class="mr-3"></v-icon> Main Street,
                                    Brooklyn, NY</p>
                                <p class="text-body-1 mt-3"><v-icon icon="$currency" class="mr-3"></v-icon> From <span
                                        class="text-primary font-weight-bold">$116.00</span></p>
                            </div>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mx-auto card-decors" max-width="400">
                        <v-img class="align-end text-white" height="400" src="/S02-01.jpeg" cover>
                            <v-chip color="white" label class="my-4 fixed-top-left">
                                <p class="text-h6 font-weight-bold ">Featured</p>
                            </v-chip>
                            <div class="card-content">
                                <v-rating bg-color="orange-lighten-1" color="blue"></v-rating>
                                <h3 class="text-h5 font-weight-bold">Peninsula & Caribbean</h3>
                                <p class="text-body-1 mt-3"><v-icon icon="$marker" class="mr-3"></v-icon> Main Street,
                                    Brooklyn, NY</p>
                                <p class="text-body-1 mt-3"><v-icon icon="$currency" class="mr-3"></v-icon> From <span
                                        class="text-primary font-weight-bold">$619.00</span></p>
                            </div>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="mt-13">
                <v-col cols="12" md="4">
                    <v-card class="card-decors">
                        <v-card-text class="pa-9">
                            <v-row align="center">
                                <v-col cols="3"><v-icon icon="$account" size="55" color="primary"></v-icon></v-col>
                                <v-col>
                                    <h5 class="text-h5 font-weight-bold">Best Security</h5>
                                    <h5 class="text-body-1 mt-5">When nothing prevents our to we like best, every pleasure
                                        to be.
                                    </h5>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="card-decors">
                        <v-card-text class="pa-9">
                            <v-row align="center">
                                <v-col cols="3"><v-icon icon="$home" size="55" color="primary"></v-icon></v-col>
                                <v-col>
                                    <h5 class="text-h5 font-weight-bold">Free Internet</h5>
                                    <h5 class="text-body-1 mt-5">When nothing prevents our to we like best, every pleasure
                                        to be.
                                    </h5>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="card-decors">
                        <v-card-text class="pa-9">
                            <v-row align="center">
                                <v-col cols="3"><v-icon icon="$marker" size="55" color="primary"></v-icon></v-col>
                                <v-col>
                                    <h5 class="text-h5 font-weight-bold">Solar</h5>
                                    <h5 class="text-body-1 mt-5">When nothing prevents our to we like best, every pleasure
                                        to be.
                                    </h5>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="card-decors">
                        <v-card-text class="pa-9">
                            <v-row align="center">
                                <v-col cols="3"><v-icon icon="$bike" size="55" color="primary"></v-icon></v-col>
                                <v-col>
                                    <h5 class="text-h5 font-weight-bold">Mountain biking</h5>
                                    <h5 class="text-body-1 mt-5">When nothing prevents our to we like best, every pleasure
                                        to be.
                                    </h5>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="card-decors">
                        <v-card-text class="pa-9">
                            <v-row align="center">
                                <v-col cols="3"><v-icon icon="$swim" size="55" color="primary"></v-icon></v-col>
                                <v-col>
                                    <h5 class="text-h5 font-weight-bold">Swimming</h5>
                                    <h5 class="text-body-1 mt-5">When nothing prevents our to we like best, every pleasure
                                        to be.
                                    </h5>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="card-decors">
                        <v-card-text class="pa-9">
                            <v-row align="center">
                                <v-col cols="3"><v-icon icon="$camp" size="55" color="primary"></v-icon></v-col>
                                <v-col>
                                    <h5 class="text-h5 font-weight-bold">GYM & Yoga</h5>
                                    <h5 class="text-body-1 mt-5">When nothing prevents our to we like best, every pleasure
                                        to be.
                                    </h5>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<style>
.fixed-top-left {
    position: absolute;
    top: 0;
}
</style>