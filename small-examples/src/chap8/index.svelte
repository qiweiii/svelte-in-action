<script>
  import ColorCycleOnDestroy from './ColorCycleOnDestroy.svelte';
  import ColorCycleOnMount from './ColorCycleOnMount.svelte';
  import Demo from './Demo.svelte';
  let showDemo = false;
  import MovingFocus from './MovingFocus.svelte';
  import SelectionRange from './SelectionRange.svelte';
  let showCorlorCycle = true;

  import { onMountLog } from './helper';
  import AgeEntry from './AgeEntry.svelte';
  import NameEntry from './NameEntry.svelte';

  let age = 0;
  let enterAge = false;
  let name = '';
  onMountLog('App');
</script>

<div class="chap">
  <h1>Chap 8: Lifecycle functions</h1>

  <p>onMount to run code when a component is added to the DOM</p>
  <p>beforeUpdate to run code before every component update</p>
  <p>afterUpdate to run code after every component update</p>
  <p>onDestroy to run code when a component is removed from the DOM</p>

  <div class="example">
    <h2>Demo: all <code>Lifecycle methods</code> in console</h2>
    <label>
      <input type="checkbox" bind:checked={showDemo} />
      Show
    </label>
    {#if showDemo}
      <Demo />
    {/if}
  </div>

  <div class="example">
    <h2>Moving focus on mount</h2>
    <MovingFocus />
    <p>
      Also notice that <code>bind:this</code> directive sets a variable to a reference
      to a DOM element
    </p>
  </div>

  <div class="example">
    <h2>ColorCycle <code>onDestroy</code> clearInterval example</h2>
    <button on:click={() => (showCorlorCycle = !showCorlorCycle)}>Toggle</button
    >
    {#if showCorlorCycle}
      <ColorCycleOnDestroy text="Qiwei!" />
    {/if}
  </div>

  <div class="example">
    <h2>ColorCycle <code>onMount</code> clearInterval example</h2>
    <button on:click={() => (showCorlorCycle = !showCorlorCycle)}>Toggle</button
    >
    {#if showCorlorCycle}
      <ColorCycleOnMount text="Iewiq!" />
    {/if}
  </div>

  <div class="example">
    <h2>SelectionRange: <code>beforeUpdate afterUpdate</code> example</h2>
    <SelectionRange />
    <p>Note abt the API from html input element...</p>
  </div>

  <div class="example">
    <h2>Lifecycle functions as helpers</h2>

    {#if enterAge}
      <AgeEntry bind:age />
    {:else}
      <NameEntry bind:name />
    {/if}

    <label>
      Enter Age?
      <input type="checkbox" bind:checked={enterAge} />
    </label>

    <div>{name} is {age} years old.</div>

    <p>This is like hooks in react, but a lot much simpler to understand!</p>
  </div>
</div>
