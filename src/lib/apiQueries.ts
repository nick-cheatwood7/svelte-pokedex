import type { Pokemon } from './@types/Pokemon';
import { POKEMON_API_URL, SPRITE_URL } from './constants';

export const fetchPokemon = async (
	limit: number,
	offset: number | undefined
): Promise<Pokemon[]> => {
	const url = `${POKEMON_API_URL}/pokemon?limit=${limit}&offset=${offset ?? 0}`;
	const res = await fetch(url);
	const data = await res.json();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const loadedPokemon = data.results.map((data: any) => {
		const stringArr = String(data.url).split('/');
		const id = stringArr[stringArr.length - 2];
		return {
			id,
			name: data.name,
			imageUrl: `${SPRITE_URL}/${id}.png`
		};
	});

	return loadedPokemon;
};
