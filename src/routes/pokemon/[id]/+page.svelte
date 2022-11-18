<script lang="ts">
	import Title from '$lib/components/page-title.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const type = data.pokemon.types[0].type.name;
	const imageUrl = data.pokemon.sprites['front_default'];
</script>

<svelte:head>
	<title>{data.pokemon.name}</title>
</svelte:head>

<Title>{data.pokemon.name}</Title>

<div class="flex flex-col items-center">
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{data.pokemon.height}></strong> | Weight:
		<strong>{data.pokemon.weight}></strong>
	</p>
	<img class="h-40 w-40" src={imageUrl} alt={data.pokemon.name} />
</div>
