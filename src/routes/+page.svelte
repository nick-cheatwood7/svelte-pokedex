<script lang="ts">
	import Title from '$lib/components/page-title.svelte';
	import { pokemon } from '$lib/stores/pokeStore';
	$: {
		console.log($pokemon);
	}
</script>

<svelte:head>
	<title>Svelte Pokedex</title>
</svelte:head>

<Title>Svelte Kit Pokedex</Title>

{#each $pokemon as poke}
	<p>{poke.name}</p>
{/each}
