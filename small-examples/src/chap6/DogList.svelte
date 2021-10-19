<script>
  import { createEventDispatcher } from "svelte";
  import { dogStore } from "./stores";
  import { sortOnName } from "./util";

  const dispatch = createEventDispatcher();

  $: dogs = sortOnName(Object.values($dogStore));

  let selectedDogs = [];

  function deleteSelected() {
    const ids = selectedDogs.map((dog) => dog.id);
    dogStore.update((dogMap) => {
      for (const id of ids) {
        delete dogMap[id];
      }
      return dogMap;
    });
    selectedDogs = [];
  }

  const dogToString = (dog) => dog.name + " is a " + dog.size + " " + dog.breed;

  function onSelect(event) {
    const { selectedOptions } = event.target;
    selectedDogs = Array.from(selectedOptions).map(
      (option) => $dogStore[option.value]
    );
    dispatch("select", selectedDogs[0]);
  }
</script>

{#if dogs.length}
  <select multiple on:change={onSelect}>
    {#each dogs as dog (dog.id)}
      <option value={dog.id}>{dogToString(dog)}</option>
    {/each}
  </select>
{:else}
  <h3>No dogs have been added yet.</h3>
{/if}

<div class="buttons">
  <button on:click={() => dispatch("mode", "create")}>
    <span aria-label="plus" role="img">&#x2795;</span>
  </button>
  <button
    disabled={selectedDogs.length === 0}
    on:click={() => dispatch("mode", "update")}
  >
    <span aria-label="pencil" role="img">&#x270E;</span>
  </button>
  <button disabled={selectedDogs.length === 0} on:click={deleteSelected}>
    <span aria-label="trash can" role="img">&#x1F5D1;</span>
  </button>
</div>

<style>
  button {
    background-color: transparent;
    border: none;
    font-size: 24px;
  }

  option {
    font-size: 18px;
  }

  select {
    padding: 10px;
  }
</style>
