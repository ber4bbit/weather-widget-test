<script setup lang="ts">
import {computed, onBeforeMount, ref} from "vue";
import {getCordsByCityName} from "@/api";
import draggable from "vuedraggable";

interface ICity {
    name: string;
    country: string;
    lat: number;
    lon: number;
}

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
const citiesFromLS = ref<ICity[]>([]);

const addToLS = (): void => {
    if (getCitiesResultsComputed.value !== null) {
        if (localStorage.getItem(LS_CITIES_KEY)) {
            const savedCities = JSON.parse(localStorage.getItem(LS_CITIES_KEY) as string);
            const citiesToSaves = JSON.stringify([...savedCities, getCitiesResultsComputed.value]);
            localStorage.setItem(LS_CITIES_KEY, citiesToSaves)
            citiesFromLS.value = [...savedCities, getCitiesResultsComputed.value];
        } else {
            localStorage.setItem(LS_CITIES_KEY, JSON.stringify([getCitiesResultsComputed.value]))
            citiesFromLS.value = [getCitiesResultsComputed.value];
        }
    }
};

const saveCitiesToLS = (): void => localStorage.setItem(LS_CITIES_KEY, JSON.stringify(citiesFromLS.value));

const getCitiesFromLS = (): ICity[] => {
    if (localStorage.getItem(LS_CITIES_KEY)?.length) {
        return JSON.parse(localStorage.getItem(LS_CITIES_KEY) as string);
    } else {
        return [];
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
};

const onRemoveCity = (lat: number, lon: number): void => {
    const newArr = getCitiesFromLS().filter(elem => elem.lon !== lon && elem.lat !== lat);
    localStorage.setItem(LS_CITIES_KEY, JSON.stringify(newArr));
    citiesFromLS.value = newArr;
}

onBeforeMount(() => {
    citiesFromLS.value = getCitiesFromLS();
})

</script>

<template>
    <main class="settings">
        <div>
            <h2 class="settings__title">Settings</h2>
            <draggable
                class="settings__list"
                v-model="citiesFromLS"
                item-key="lat"
                @end="saveCitiesToLS"
            >
                <template #item="{element}">
                    <div class="settings__item">
                        <div class="settings__item-left">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-p</title><line x1="102" y1="256" x2="410" y2="256" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/><line x1="102" y1="176" x2="410" y2="176" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/><line x1="102" y1="336" x2="410" y2="336" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/></svg>
                            <span>{{ element.name }}</span>
                        </div>
                        <button @click="onRemoveCity(element.lat, element.lon)">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </template>
            </draggable>
        </div>

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