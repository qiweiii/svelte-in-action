<div>
  <div>Ship To:</div>
  <!-- this is the default content of slot -->
  <slot name="name">unknown</slot>
  <slot name="address" />
</div>

<style>
  div {
    display: block;
    font-weight: bold;
  }
</style>
