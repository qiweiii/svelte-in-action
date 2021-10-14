<script>
// (chap3: svelte basics)
import Cylinder from "./Cylinder.svelte"
import Select from "./Select.svelte";
const options = [
	'',
	'Red',
	{label: 'Green'},
	{label: 'Blue', value: 'b'}
];
let selected;
const handleSelect = event => selected = event.detail;


// (chap4: block structures)
import Dogs from "./Dogs.svelte";
import Employee from "./Employee.svelte";


// (chap5: component communication)
import StopLight from './StopLight.svelte';
let go = false;
</script>

<main>
	<h1>Cylinder Calculations: reactive statement example</h1>
	<Cylinder />
	<hr/>

	<h1>Select: event example</h1>
	<Select options={options} on:select={handleSelect} />
	{#if selected}
		<div>You selected {selected}.</div>
	{/if}
	<hr />

	<h1>Dog breeds: await example</h1>
	<Dogs />
	<hr />

	<h1>Employee: for each example</h1>
	<Employee />
	<hr />

	<h1>StopLight: props example</h1>
	<StopLight />
	<StopLight on />
	<StopLight on={go} />
	<button on:click={() => go = !go}>Toggle</button>

</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	hr {
		border: 0;
    border-bottom: 1px dashed #ccc;
    background: #999;
		width: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>