<script>
  export let name;
  export let value;
</script>

<div>
  <label for="slider">{name}</label>
  <input id="slider" type="range" min="0" max="255" bind:value />
</div>

<style>
  label {
    display: inline-block;
    margin-right: 10px;
    text-align: right;
    width: 45px;
  }
</style>
