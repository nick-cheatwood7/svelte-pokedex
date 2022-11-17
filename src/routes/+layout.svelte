<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<main class="p-8 max-w-6xl mx-auto">
	<Nav />
	<slot />
</main>
