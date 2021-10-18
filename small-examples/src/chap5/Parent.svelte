<script>
  import Child from "../chap5/Child.svelte";
  let pValue = 1;
  let triple;
</script>

<Child bind:cValue={pValue} bind:triple />
<div>pValue = {pValue}</div>
<div>triple = {triple}</div>
<p>
  Note: If the name of the variable in the parent component matches the name of
  the prop, the bind expression can be shortened.
</p>
