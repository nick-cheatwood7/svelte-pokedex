import { POKEMON_API_URL } from '$lib/constants';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const id = Number(params.id);
		const url = `${POKEMON_API_URL}/pokemon/${id}`;
		const res = await fetch(url);

		if (res.status !== 200) {
			console.error('Pokemon not found');
			throw error(404, 'not found');
		}

		const data = await res.json();
		return {
			pokemon: { ...data }
		};
	} catch (err) {
		console.error(err);
		throw error(500, String(err));
	}
};

export const prerender = true;
