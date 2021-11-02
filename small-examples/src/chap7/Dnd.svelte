<script>
  let baskets = [
    {
      name: 'Basket 1',
      items: ['Orange', 'Pineapple'],
    },
    {
      name: 'Basket 2',
      items: ['Banana', 'Apple'],
    },
    {
      name: 'Basket 3',
      items: ['GrapeFruit'],
    },
  ];

  let hoveringOverBasket;

  function dragStart(event, basketIndex, itemIndex) {
    const data = { basketIndex, itemIndex };
    event.dataTransfer.setData('text/plain', JSON.stringify(data));
  }

  function drop(event, basketIndex) {
    const json = event.dataTransfer.getData('text/plain');
    const data = JSON.parse(json);

    const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);

    baskets[basketIndex].items.push(item);
    baskets = baskets;

    hoveringOverBasket = null;
  }
</script>

<div>Drag a fruit from one basket to another.</div>

{#each baskets as basket, basketIndex}
  <b>{basket.name}</b>
  <ul
    class:hovering={hoveringOverBasket === basket.name}
    on:dragenter={() => (hoveringOverBasket = basket.name)}
    on:dragleave={() => (hoveringOverBasket = null)}
    on:drop|preventDefault={(event) => drop(event, basketIndex)}
    on:dragover|preventDefault
  >
    {#each basket.items as item, itemIndex}
      <li
        draggable="true"
        on:dragstart={(event) => dragStart(event, basketIndex, itemIndex)}
      >
        {item}
      </li>
    {/each}
  </ul>
{/each}

<style>
  .hovering {
    border-color: orange;
  }
  li {
    background-color: lightgray;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    padding: 10px;
  }
  li:hover {
    background: orange;
    color: white;
  }
  ul {
    border: solid lightgray 1px;
    height: 40px; /* needed when empty */
    padding: 10px;
  }
</style>
