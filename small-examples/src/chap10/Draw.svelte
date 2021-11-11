<script>
  import { draw } from 'svelte/transition';
  const commands = 'M 2 5 v-4 h3 v3 h2 v-3 h3 v4 h-9 l 5 4 l 5 -4 h-1';
  const max = 12;
  let show = true;
</script>

<div>
  <button on:click={() => (show = !show)}> Toggle </button>
</div>

{#if show}
  <svg width={200} height={200} viewBox="0 0 {max} {max}">
    <g transform="translate(0 {max}) scale(1 -1)">
      <path
        transition:draw={{ duration: 1000 }}
        d={commands}
        fill="none"
        stroke="red"
        stroke-width="0.1px"
      />
    </g>
  </svg>
{/if}

<style>
  svg {
    outline: solid lightgray 1px;
  }
</style>
