import { defineCustomElement } from "vue";
import WeatherWidgetComponent from "@/WeatherWidget.ce.vue";

const weatherWidget = defineCustomElement(WeatherWidgetComponent);

customElements.define('weather-widget', weatherWidget);