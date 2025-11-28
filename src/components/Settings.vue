<script setup lang="ts">
import {computed, ref} from "vue";
import {getCordsByCityName} from "@/api";

const LS_CITIES_KEY = "weather-widget-cities";

const inputValue = ref<string>('');
const getCitiesResults = ref<{
    name: string;
    country: string;
    lat: number;
    lon: number;
}[]>([]);
const getCitiesResultsComputed = computed(() => (
     getCitiesResults.value?.length ?
        {
            name: getCitiesResults.value[0].name,
            country: getCitiesResults.value[0].country,
            lat: getCitiesResults.value[0].lat,
            lon: getCitiesResults.value[0].lon,
        }
        : null
));

const addToLS = (): void => {
    if (getCitiesResultsComputed.value !== null) {
        if (localStorage.getItem(LS_CITIES_KEY)) {
            const savedCities = JSON.parse(localStorage.getItem(LS_CITIES_KEY) as string);
            const citiesToSaves = JSON.stringify([...savedCities, getCitiesResultsComputed.value]);
            localStorage.setItem(LS_CITIES_KEY, citiesToSaves)
        } else {
            localStorage.setItem(LS_CITIES_KEY, JSON.stringify([getCitiesResultsComputed.value]))
        }
    }
}

const onBlurSearchInput = (event: FocusEvent): void => {
    // @ts-ignore
    const value = event.target!.value;
    if (value !== '') {
        getCordsByCityName(value).then(response => {
            getCitiesResults.value = response;
        })
    }
}
</script>

<template>
    <main class="settings">
        <h2 class="settings__title">Settings</h2>
        <div class="settings__add">
            <span>Add a location:</span>
            <div class="settings__input">
                <input v-model="inputValue" @blur="onBlurSearchInput" @change="getCitiesResults = []" />
                <button class="settings__btn" @click="addToLS">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 7V8.2C20 9.88016 20 10.7202 19.673 11.362C19.3854 11.9265 18.9265 12.3854 18.362 12.673C17.7202 13 16.8802 13 15.2 13H4M4 13L8 9M4 13L8 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <pre>{{getCitiesResultsComputed}}</pre>
        </div>
    </main>
</template>

<style lang="scss">
</style>