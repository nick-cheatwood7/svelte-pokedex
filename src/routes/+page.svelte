<script lang="ts">
  import { pokemon } from "../lib/stores/pokeStore";
  $:{
    console.log($pokemon)
  }
</script>

<svelte:head>
  <title>Svelte Pokedex</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each $pokemon as poke}
  <p>{poke.name}</p>
{/each}