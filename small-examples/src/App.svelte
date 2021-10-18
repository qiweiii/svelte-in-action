<script>
  import Chap3 from "./chap3/index.svelte";
  import Chap4 from "./chap4/index.svelte";
  import Chap5 from "./chap5/index.svelte";
</script>

<main>
  <Chap3 />
  <Chap4 />
  <Chap5 />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
