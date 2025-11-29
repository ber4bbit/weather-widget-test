<script setup lang="ts">
import {EWeatherStates} from "@/shared/types";

interface IProps {
	weather: EWeatherStates;
}

defineProps<IProps>();
</script>

<template>
	<svg v-if="weather === EWeatherStates.clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
		<defs>
			<linearGradient id="a" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#fbbf24"/>
				<stop offset="0.45" stop-color="#fbbf24"/>
				<stop offset="1" stop-color="#f59e0b"/>
			</linearGradient>
		</defs>
		<circle cx="32" cy="32" r="10.5" stroke="#f8af18" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
		<path d="M32,15.71V9.5m0,45V48.29M43.52,20.48l4.39-4.39M16.09,47.91l4.39-4.39m0-23-4.39-4.39M47.91,47.91l-4.39-4.39M15.71,32H9.5m45,0H48.29" fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
			<animateTransform attributeName="transform" dur="45s" values="0 32 32; 360 32 32" repeatCount="indefinite" type="rotate"/>
		</path>
	</svg>

	<svg v-if="weather === EWeatherStates.clouds" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
		<defs>
			<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#f3f7fe"/>
				<stop offset="0.45" stop-color="#f3f7fe"/>
				<stop offset="1" stop-color="#deeafb"/>
			</linearGradient>
		</defs>
		<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)">
			<animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="7s" repeatCount="indefinite"/>
		</path>
	</svg>
	<svg v-if="weather === EWeatherStates.thunderstorm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
		<defs>
			<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#f3f7fe"/>
				<stop offset="0.45" stop-color="#f3f7fe"/>
				<stop offset="1" stop-color="#deeafb"/>
			</linearGradient>
			<linearGradient id="b" x1="26.74" y1="37.88" x2="35.76" y2="53.52" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#f7b23b"/>
				<stop offset="0.45" stop-color="#f7b23b"/>
				<stop offset="1" stop-color="#f59e0b"/>
			</linearGradient>
		</defs>
		<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
		<polygon points="30 36 26 48 30 48 28 58 38 44 32 44 36 36 30 36" stroke="#f6a823" stroke-miterlimit="10" stroke-width="0.5" fill="url(#b)">
			<animate attributeName="opacity" values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1" dur="2s" repeatCount="indefinite"/>
		</polygon>
	</svg>
	<svg v-if="weather === EWeatherStates.drizzle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
		<defs>
			<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#f3f7fe"/>
				<stop offset="0.45" stop-color="#f3f7fe"/>
				<stop offset="1" stop-color="#deeafb"/>
			</linearGradient>
			<linearGradient id="b" x1="23.31" y1="44.3" x2="24.69" y2="46.7" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#4286ee"/>
				<stop offset="0.45" stop-color="#4286ee"/>
				<stop offset="1" stop-color="#0950bc"/>
			</linearGradient>
			<linearGradient id="c" x1="30.31" y1="44.3" x2="31.69" y2="46.7" xlink:href="#b"/>
			<linearGradient id="d" x1="37.31" y1="44.3" x2="38.69" y2="46.7" xlink:href="#b"/>
		</defs>
		<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
		<line x1="24.08" y1="45.01" x2="23.92" y2="45.99" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#c)">
			<animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
		</line>
		<line x1="31.08" y1="45.01" x2="30.92" y2="45.99" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#d)">
			<animateTransform attributeName="transform" type="translate" begin="-0.5s" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="opacity" begin="-0.5s" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
		</line>
		<line x1="38.08" y1="45.01" x2="37.92" y2="45.99" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#e)">
			<animateTransform attributeName="transform" type="translate" begin="-1s" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="opacity" begin="-1s" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
		</line>
	</svg>
	<svg v-if="weather === EWeatherStates.snow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
		<defs>
			<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#f3f7fe"/>
				<stop offset="0.45" stop-color="#f3f7fe"/>
				<stop offset="1" stop-color="#deeafb"/>
			</linearGradient>
			<linearGradient id="b" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#86c3db"/>
				<stop offset="0.45" stop-color="#86c3db"/>
				<stop offset="1" stop-color="#5eafcf"/>
			</linearGradient>
			<linearGradient id="c" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlink:href="#b"/>
			<linearGradient id="d" x1="23.12" y1="43.48" x2="24.88" y2="46.52" xlink:href="#b"/>
			<linearGradient id="e" x1="22.67" y1="42.69" x2="25.33" y2="47.31" xlink:href="#b"/>
			<linearGradient id="f" x1="37.12" y1="43.48" x2="38.88" y2="46.52" xlink:href="#b"/>
			<linearGradient id="g" x1="36.67" y1="42.69" x2="39.33" y2="47.31" xlink:href="#b"/>
		</defs>
		<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
		<g>
			<circle cx="31" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#b)"/>
			<path d="M33.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M31,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#c)"/>
			<animateTransform attributeName="transform" type="translate" additive="sum" values="-1 -6; 1 12" dur="4s" repeatCount="indefinite"/>
			<animateTransform attributeName="transform" type="rotate" additive="sum" values="0 31 45; 360 31 45" dur="9s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite"/>
		</g>
		<g>
			<circle cx="24" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#d)"/>
			<path d="M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#e)"/>
			<animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-2s" dur="4s" repeatCount="indefinite"/>
			<animateTransform attributeName="transform" type="rotate" additive="sum" values="0 24 45; 360 24 45" dur="9s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite"/>
		</g>
		<g>
			<circle cx="38" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#f)"/>
			<path d="M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#g)"/>
			<animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-1s" dur="4s" repeatCount="indefinite"/>
			<animateTransform attributeName="transform" type="rotate" additive="sum" values="0 38 45; 360 38 45" dur="9s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite"/>
		</g>
	</svg>
	<svg v-if="weather === EWeatherStates.rain" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
		<defs>
			<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#f3f7fe"/>
				<stop offset="0.45" stop-color="#f3f7fe"/>
				<stop offset="1" stop-color="#deeafb"/>
			</linearGradient>
			<linearGradient id="b" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#4286ee"/>
				<stop offset="0.45" stop-color="#4286ee"/>
				<stop offset="1" stop-color="#0950bc"/>
			</linearGradient>
			<linearGradient id="c" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlink:href="#b"/>
			<linearGradient id="d" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlink:href="#b"/>
		</defs>
		<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
		<line x1="24.39" y1="43.03" x2="23.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#b)">
			<animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
		</line>
		<line x1="31.39" y1="43.03" x2="30.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#c)">
			<animateTransform attributeName="transform" begin="-0.4s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
			<animate attributeName="opacity" begin="-0.4s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
		</line>
		<line x1="38.39" y1="43.03" x2="37.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#d)">
			<animateTransform attributeName="transform" begin="-0.2s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
			<animate attributeName="opacity" begin="-0.2s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
		</line>
	</svg>
</template>

<style scoped lang="scss">

</style>