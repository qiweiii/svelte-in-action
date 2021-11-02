<script>
  let markup = '<h1 style="color: red">Hello!</h1>';
</script>
 
<textarea bindtoken:value={markup} rows={5} />
{@html markup}
 
<style>
  textarea {
    width: 950px;
  }
</style>