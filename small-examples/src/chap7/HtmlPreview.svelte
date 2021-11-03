<script>
  let markup = '<h2 style="color: red">Hello!</h2>';
</script>

<textarea bindtoken:value={markup} rows={5} />
{@html markup}

<style>
  textarea {
    width: 950px;
  }
</style>
