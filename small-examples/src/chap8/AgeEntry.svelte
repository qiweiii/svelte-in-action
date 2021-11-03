<script>
  import { onMountFocus, onMountLog } from './helper';
  export let age;
  onMountLog('AgeEntry');
  onMountFocus();
</script>

<label>
  Age
  <input type="number" min="0" bind:value={age} />
</label>
