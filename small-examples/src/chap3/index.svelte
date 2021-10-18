<script>
  import Cylinder from "./Cylinder.svelte";
  import Select from "./Select.svelte";
  const options = [
    "",
    "Red",
    { label: "Green" },
    { label: "Blue", value: "b" },
  ];
  let selected;
  const handleSelect = (event) => (selected = event.detail);
</script>

<div class="chap">
  <h1>chap3: svelte basics</h1>

  <div class="example">
    <h2>Cylinder example: <code>reactive statement</code></h2>
    <Cylinder />
  </div>

  <div class="example">
    <h2>Select example: <code>event</code></h2>
    <Select {options} on:select={handleSelect} />
    {#if selected}
      <div>You selected {selected}.</div>
    {/if}
  </div>
</div>
