import { fetchPokemon } from '$lib/apiQueries';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? '0');
	const offset = Number(url.searchParams.get('offset') ?? '0');

	const pokemon = await fetchPokemon(limit, offset);
	return json(pokemon);
};
