<script>
  import Chap3 from "./chap3/index.svelte";
  import Chap4 from "./chap4/index.svelte";
  import Chap5 from "./chap5/index.svelte";
  import Chap6 from "./chap6/index.svelte";
</script>

<main>
  <Chap3 />
  <Chap4 />
  <Chap5 />
  <Chap6 />
</main>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    main {
      max-width: none;
    }
  }
</style>
