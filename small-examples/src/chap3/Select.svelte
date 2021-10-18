<script>
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();
  export let options;
 
  const getLabel = option =>
    typeof option === 'object' ? option.label : option;
 
  const getValue = option =>
    typeof option === 'object' ?
      option.value || option.label :
      option;
</script>
 
<select on:change={event => dispatch('select', event.target.value)}>
  {#each options as option}
    <option value={getValue(option)}>{getLabel(option)}</option>
  {/each}
</select>