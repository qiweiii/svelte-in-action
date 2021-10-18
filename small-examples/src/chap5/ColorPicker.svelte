<script>
  import ColorSlider from "./ColorSlider.svelte";
  export let hex;
  let red = 0;
  let green = 0;
  let blue = 0;

  function getHex(number) {
    const hex = number.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  $: hex = "#" + getHex(red) + getHex(green) + getHex(blue);
</script>

<ColorSlider name="Red" bind:value={red} />
<ColorSlider name="Green" bind:value={green} />
<ColorSlider name="Blue" bind:value={blue} />
