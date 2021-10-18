<script>
  import { setContext } from "svelte";
  import B from "./B.svelte";
  setContext("favorites", { color: "yellow", number: 19 });
</script>

<div>
  This is in A.
  <B />
</div>
