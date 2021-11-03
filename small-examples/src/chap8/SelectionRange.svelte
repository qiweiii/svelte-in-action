<script>
  import { afterUpdate, beforeUpdate } from 'svelte';

  let input, name, selectionEnd, selectionStart;

  beforeUpdate(() => {
    if (input) ({ selectionStart, selectionEnd } = input);
  });

  afterUpdate(() => {
    input.setSelectionRange(selectionStart, selectionEnd);
    input.focus();
  });
</script>

<input bind:this={input} bind:value={name} />
<button on:click={() => (name = name.toUpperCase())}>UPPER</button>
