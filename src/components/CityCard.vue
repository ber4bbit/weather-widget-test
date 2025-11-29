<script setup lang="ts">
import { onBeforeMount, ref, computed } from "vue";
import { getCurrentWeatherData } from "@/api";
import WeatherIcon from "@/components/WeatherIcon.vue";

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
const weatherState = computed(() => (
	expandedCity.value.weather[0].main
))

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
			<WeatherIcon :weather="weatherState" />
            <span>{{Math.round(expandedCity.main.temp)}}°C</span>
        </div>
        <p>Feels like {{Math.round(expandedCity.main.feels_like)}}°C.</p>
    </div>
</template>

<style scoped lang="scss">

</style>