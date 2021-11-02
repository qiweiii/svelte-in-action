<script>
  import { createEventDispatcher } from 'svelte';
  import { dogStore } from './stores';
  import { getGuid } from './util';

  const dispatch = createEventDispatcher();
  export let dog;
  export let mode;

  let { name, breed, size } = dog;
  $: canSave = name && breed && size;

  function save() {
    const id = dog.id || getGuid();
    dogStore.update((dogMap) => {
      dogMap[id] = { id, name, breed, size };
      return dogMap;
    });
    dispatch('mode', 'list');
  }
</script>

<form on:submit|preventDefault={save}>
  <div>
    <label for="name">Name</label>
    <input id="name" bind:value={name} />
  </div>
  <div>
    <label for="breed">Breed</label>
    <input id="breed" bind:value={breed} />
  </div>
  <div>
    <div>Size</div>
    <span class="radios">
      <label>
        <input type="radio" value="small" bind:group={size} />
        Small
      </label>
      <label>
        <input type="radio" value="medium" bind:group={size} />
        Medium
      </label>
      <label>
        <input type="radio" value="large" bind:group={size} />
        Large
      </label>
    </span>
  </div>
  <div>
    <button disabled={!canSave}>{mode === 'create' ? 'Save' : 'Update'}</button>
    <button type="button" on:click={() => dispatch('mode', 'list')}>
      Cancel
    </button>
  </div>
</form>

<style>
  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  input {
    border: solid lightgray 1px;
    border-radius: 4px;
    font-size: 18px;
    margin: 0;
    padding: 4px;
  }

  input[type='radio'] {
    height: 16px;
  }

  label {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
    text-align: right;
    width: 60px;
  }

  .radios > label {
    font-weight: normal;
    width: auto;
  }
</style>
