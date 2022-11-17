import { writable } from 'svelte/store';
import { POKEMON_API_URL, SPRITE_URL } from '../constants';

interface Pokemon {
	id: number;
	name: string;
	imageUrl: string;
}

export const pokemon = writable<Pokemon[]>([]);

const fetchPokemon = async (limit: number) => {
	const url = `${POKEMON_API_URL}/pokemon?limit=${limit}`;
	const res = await fetch(url);
	const data = await res.json();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const loadedPokemon = data.results.map((data: any, index: number) => {
		const id = index++;
		return {
			id,
			name: data.name,
			imageUrl: `${SPRITE_URL}/${id}.png`
		};
	});

	pokemon.set(loadedPokemon);
};

fetchPokemon(150);
