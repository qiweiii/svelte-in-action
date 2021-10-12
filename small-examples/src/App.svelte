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

	<h1>Employee breeds: for each example</h1>
	<Employee />
	<hr />

</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>