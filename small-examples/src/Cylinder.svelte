<script>
  let diameter = 1;
  let height = 1;
 
  // reactive statements
  $: volume = area * height;

  $: area = Math.PI * radius ** 2;

  $: radius = diameter / 2;
</script>

<label>
  Diameter
  <input type="number" bind:value={diameter}>
</label>
<label>
  Height
  <input type="number" bind:value={height}>
</label>

<div>Radius: {radius}</div>
<div>Area: {area.toFixed(2)}</div>
<div>Volume: {volume.toFixed(2)}</div>

<style>
  input {
    width: 50px;
  }
</style>