<script>
import CountApp from "./CountApp.svelte";
import DogApp from "./DogApp.svelte";
import TaxApp from "./TaxApp.svelte";

</script>

<div class="chap">
  <h1>chap6: Stores</h1>

  <div class="example">
    <h2>DogApp example: <code>writable store</code></h2>
    <DogApp />
  </div>

  <div class="example">
    <h2>TaxApp example: <code>writable derived store</code></h2>
    <TaxApp />
  </div>

  <div class="example">
    <h2>CountApp example: <code>custom store</code></h2>
    <CountApp />
  </div>

  <div class="example">
    <h2>PointApp example: <code>store with class</code></h2>
    <CountApp />
    <p>The main takeaway is that instance methods can be used to update objects in stores, but the updates must be performed inside the function passed to the store’s update method. In addition, those functions must return the updated object.</p>
  </div>
</div>
