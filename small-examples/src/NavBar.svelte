<script>
</script>

<nav>
  <a href="/chap3" class="nav-item">Chap 3: Svelte basics</a>
  <a href="/chap4" class="nav-item">Chap 4: Block structures</a>
  <a href="/chap5" class="nav-item">Chap 5: Component communication</a>
  <a href="/chap6" class="nav-item">Chap 6: Stores</a>
  <a href="/chap7" class="nav-item">Chap 7: DOM interactions</a>
  <a href="/chap8" class="nav-item">Chap 8: Lifecycle functions</a>
  <a href="/chap9" class="nav-item">Chap 9: Client side routing</a>
  <a href="/chap10" class="nav-item">Chap 10: xxx</a>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: lightskyblue;
  }

  .nav-item {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    color: black;
  }

  .nav-item:not(:last-child):hover {
    background-color: lightblue;
  }

  .nav-item:last-child:hover {
    background-color: darkcyan;
  }
</style>
