<script>
  import StopLight from "./StopLight.svelte";
  let go = false;
  // tally
  import Tally from "./Tally.svelte";
  // parent-child
  import Parent from "./Parent.svelte";
  let tally,
    taxRate = 0,
    grandTotal = 0;
  function update() {
    taxRate = tally.taxRate;
    grandTotal = tally.getGrandTotal();
  }
  // color pick
  import ColorPicker from "./ColorPicker.svelte";
  let hex = "000000";
</script>

<h1>chap5: component communication</h1>
<h2>StopLight example: <code>props</code></h2>
<StopLight />
<StopLight on />
<StopLight on={go} />
<button on:click={() => (go = !go)}>Toggle</button>
<hr />

<h2>Tally example: <code>bind:this</code></h2>
<Tally bind:this={tally} />
<button on:click={update}>Update</button>
<div>
  Tax Rate = {(taxRate * 100).toFixed(2)}%; Grand Total = {grandTotal.toFixed(
    2
  )}
</div>
<hr />

<h2>Parent-Child example: <code>prop go out with bind</code></h2>
<Parent />
<hr />

<h2>Color Picker: <code>bind</code></h2>
<ColorPicker bind:hex />
<div class="swatch" style="background-color: {hex}">
  {hex}
</div>
<input type="color" bind:value={hex} />
<hr />

<style>
  .swatch {
    color: white;
    display: inline-block;
    height: 100px;
    line-height: 100px;
    text-align: center;
    width: 100px;
  }
</style>
