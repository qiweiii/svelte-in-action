<script>
  export let on = false;
  $: color = on ? 'green' : 'red';
</script>

<div style="background-color: {color}">
  {color}
</div>

<style>
  div {
    border-radius: 25px;
    color: white;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    text-align: center;
    width: 50px;
  }
</style>