<script setup lang="ts">
import { onActivated, onBeforeMount, ref } from "vue";
import CityCard from "@/components/CityCard.vue";

interface ICity {
    name: string;
    country: string;
    lat: number;
    lon: number;
}

const LS_CITIES_KEY = "weather-widget-cities";

const cities = ref<ICity[]>();

const getCitiesFromLS = () => {
    if (localStorage.getItem(LS_CITIES_KEY)) {
        cities.value = JSON.parse(localStorage.getItem(LS_CITIES_KEY) as string);
    }
}

onBeforeMount(getCitiesFromLS)

onActivated(getCitiesFromLS)
</script>

<template>
    <ul class="cities">
        <li v-for="city in cities" :key="`${city.lat}${city.lon}`">
            <CityCard :city="city" />
        </li>
    </ul>
</template>

<style scoped lang="scss">

</style>