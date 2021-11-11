<script>
  import { backInOut, linear } from 'svelte/easing';

  let springy = false;
  $: duration = springy ? 2000 : 1000;
  $: easing = springy ? backInOut : linear;
  $: options = { duration, easing, times: 2 };

  let show = true;
  const toggle = () => (show = !show);

  function spin(node, options) {
    const { easing, times = 1 } = options;
    return {
      ...options,
      css(t) {
        const eased = easing(t);
        const degrees = 360 * times;
        return `transform: scale(${eased}) rotate(${eased * degrees}deg);`;
      },
    };
  }
</script>

<label>
  <input type="checkbox" bind:checked={springy} /> Springy
</label>
<div>duration = {duration}</div>
<button on:click={toggle}>Toggle</button>

{#if show}
  <div class="center" in:spin={options} out:spin={options}>
    <div class="content">Take me for a spin!</div>
  </div>
{/if}

<style>
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .content {
    position: absolute;
    transform: translate(-50%, -50%);

    font-size: 64px;
    text-align: center;
    width: 300px;
  }
</style>
