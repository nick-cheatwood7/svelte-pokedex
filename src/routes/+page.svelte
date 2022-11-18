<script lang="ts">
	import Title from '$lib/components/page-title.svelte';
	import PokemonCard from '$lib/components/pokemon-card.svelte';
	import { pokemon } from '$lib/stores/pokeStore';
	import type { Pokemon } from '../lib/@types/Pokemon';
	let searchTerm = '';
	let filteredPokemon: Pokemon[] = [];

	let page = 1;

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokemon) => {
				return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
			});
		} else {
			filteredPokemon = [...$pokemon];
		}
	}

	async function getNextPage() {
		const res = await fetch(`/api/pokemon?limit=150&offset=${page * 150}`);
		const data = await res.json();
		page++;
		pokemon.update((p) => [...p, ...data]);
	}

	function clear() {
		searchTerm = '';
	}
</script>

<svelte:head>
	<title>Svelte Pokedex</title>
</svelte:head>

<Title>Svelte Kit Pokedex</Title>

<input
	class="w-full rounded-md text-md p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search..."
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as poke}
		<PokemonCard pokemon={poke} />
	{/each}
</div>

{#if searchTerm.length > 0}
	<button class="w-full bg-gray-200 py-3 px-2 rounded-md shadow-sm hover:shadow-md" on:click={clear}
		>Clear Search</button
	>
{:else}
	<button
		class="w-full bg-blue-400 text-white py-3 px-2 rounded-md shadow-sm hover:shadow-md"
		on:click={getNextPage}>Load More Pokemon</button
	>
{/if}
