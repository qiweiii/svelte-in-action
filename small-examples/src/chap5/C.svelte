<script>
  import { getContext } from "svelte";
  const { color, number } = getContext("favorites");
</script>

<div>
  This is in C.
  <div>favorite color is {color}</div>
  <div>favorite number is {number}</div>
</div>
