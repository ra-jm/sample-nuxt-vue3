<template>
    <v-sheet class="section-03 py-9">
        <v-container>
            <v-row>
                <v-col></v-col>
                <v-col>
                    <div class="mb-9">
                        <v-chip color="primary" label class="my-4">
                            <p class="text-h6 font-weight-bold">About company</p>
                        </v-chip>
                        <h3 class="text-h3 font-weight-bold">Great oppurtunity for adventure & travels</h3>
                    </div>
                    <v-timeline side="end" align="start">
                        <v-timeline-item dot-color="red" size="small">
                            Hellow
                        </v-timeline-item>
                        <v-timeline-item dot-color="red" size="small">
                            Hellow
                        </v-timeline-item>
                        <v-timeline-item dot-color="red" size="small">
                            Hellow
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
    height: 75vh;
}

.v-timeline {
    float: left !important;
}
</style>