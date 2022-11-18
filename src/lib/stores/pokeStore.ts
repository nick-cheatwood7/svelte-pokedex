import { writable } from 'svelte/store';
import { fetchPokemon } from '../apiQueries';
import type { Pokemon } from '../@types/Pokemon';

export const pokemon = writable<Pokemon[]>([]);

const initialState = await fetchPokemon(150, 0);
pokemon.set(initialState);
