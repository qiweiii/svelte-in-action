<script>
  export const taxRate = 0.07;
 
  let price;
  let prices = [];
 
  $: total = prices.reduce((acc, n) => acc + n, 0);
 
  function add() {
    prices.push(price);
    prices = prices;
    price = '';
  }
 
  export const getGrandTotal = () => total * (1 + taxRate);
</script>
 
<input type="number" bind:value={price} />
<button on:click={add}>Add</button>
{#each prices as price}
  <div>{price}</div>
{/each}
<label>Total {total}, Tax Rate {(taxRate * 100).toFixed(2)}%</label>
