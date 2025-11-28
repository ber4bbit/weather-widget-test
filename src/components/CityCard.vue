<script setup lang="ts">
import { onBeforeMount, ref, computed } from "vue";
import { getCurrentWeatherData } from "@/api";

interface ICity {
    name: string;
    country: string;
    lat: number;
    lon: number;
}

interface IProps {
    city: ICity
}

const props = defineProps<IProps>();
const expandedCity = ref();
const isLoading = ref<boolean>(false);

// const weatherIcon = computed(() => {
//     if (expandedCity.value.weather.main === 'Clear') {
//        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></svg>
//     }
// })

onBeforeMount(() => {
    isLoading.value = true;
    getCurrentWeatherData(props.city.lat, props.city.lon).then((response) => {
        isLoading.value = false;
        expandedCity.value = response;
    })
})
</script>

<template>
    <span v-if="isLoading">Loading...</span>
    <div v-else class="city-card">
        <span class="city-card__title">{{`${expandedCity.name}, ${expandedCity.sys.country}`}}</span>
        <div class="city-card__temperature">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></svg>
            <span>{{Math.round(expandedCity.main.temp)}}°C</span>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>