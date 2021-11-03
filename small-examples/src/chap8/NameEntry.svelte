<script>
  import { onMountFocus, onMountLog } from './helper';
  export let name;
  onMountLog('NameEntry');
  onMountFocus();
</script>

<label>
  Name
  <input bind:value={name} />
</label>
