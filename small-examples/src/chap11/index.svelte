<script>
  import App1 from './App1.svelte';
</script>

<div class="chap">
  <h1>Chap 11: Debugging</h1>

  <div class="example">
    <h2>Debug example 1: <code>@debug</code></h2>
    <App1 />
  </div>

  <div class="example">
    <h2>Debug example 2: <code>reactive statements</code></h2>
    <div>Basically, print stuff out on state change...</div>
    <code>$: console.log('count on date', date, 'is', count);</code>
  </div>

  <div class="example">
    <h2>Debug example 3: <code>Svelte Devtools</code></h2>
    <a href="https://github.com/RedHatter/svelte-devtools"
      >github.com/RedHatter/svelte-devtools</a
    >/>
  </div>
</div>
