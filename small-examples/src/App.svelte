<script>
  import page from 'page';
  import Chap3 from './chap3/index.svelte';
  import Chap4 from './chap4/index.svelte';
  import Chap5 from './chap5/index.svelte';
  import Chap6 from './chap6/index.svelte';
  import Chap7 from './chap7/index.svelte';
  import Chap8 from './chap8/index.svelte';
  import Chap9 from './chap9/index.svelte';
  import NavBar from './NavBar.svelte';
  import NotFound from './NotFound.svelte';

  let component;

  page.redirect('/', '/chap3');
  page('/chap3', () => (component = Chap3));
  page('/chap4', () => (component = Chap4));
  page('/chap5', () => (component = Chap5));
  page('/chap6', () => (component = Chap6));
  page('/chap7', () => (component = Chap7));
  page('/chap8', () => (component = Chap8));
  page('/chap9', () => (component = Chap9));
  page('*', () => (component = NotFound));
  page.start();
</script>

<NavBar />
<main>
  <svelte:component this={component} />
</main>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
    max-width: 1200px;
  }

  @media (max-width: 800px) {
    main {
      max-width: none;
    }
  }
</style>
