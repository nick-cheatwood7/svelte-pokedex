<script lang="ts">
	import type { Pokemon } from '../@types/Pokemon';
	export let pokemon: Pokemon;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${pokemon.id}`}
>
	<img class="h-40 w-40" src={pokemon.imageUrl} alt={pokemon.name} />
	<h2 class="uppercase text-xl">{pokemon.id}. {pokemon.name}</h2>
</a>
