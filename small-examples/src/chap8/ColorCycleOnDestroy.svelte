<script>
  import { onDestroy, onMount } from 'svelte';
  export let text;
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  let colorIndex = 0;
  let token;

  onMount(() => {
    token = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
    }, 500);
  });

  onDestroy(() => {
    console.log('ColorCycle destroyed');
    clearInterval(token);
  });
</script>

<h2 style="color: {colors[colorIndex]}">{text}</h2>
