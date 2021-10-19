<script>
  import DogForm from "./DogForm.svelte";
  import DogList from "./DogList.svelte";

  let dog = {};
  let mode = "list";

  function changeMode(event) {
    mode = event.detail;
    if (mode === "create") dog = {};
  }

  const selectDog = (event) => (dog = event.detail);
</script>

{#if mode === "list"}
  <DogList on:mode={changeMode} on:select={selectDog} />
{:else}
  <DogForm {dog} {mode} on:mode={changeMode} />
{/if}
