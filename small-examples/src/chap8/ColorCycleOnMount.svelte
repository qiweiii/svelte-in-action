<script>
  import { onMount } from 'svelte';
  export let text;

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  let colorIndex = 0;

  onMount(() => {
    const token = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
    }, 500);
    return () => clearInterval(token);
  });
</script>

<h2 style="color: {colors[colorIndex]}">{text}</h2>
