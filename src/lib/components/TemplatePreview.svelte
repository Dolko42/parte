<script>
	export let data;
</script>

<div class="bg-white p-8 rounded-lg shadow-md border border-gray-200">
	<div class="text-3xl font-bold text-center mb-8">
		{data.fullName}
	</div>
	
	<div class="text-gray-600 text-sm mb-8">
		<p>Born: {data.dateOfBirth}</p>
		<p>Passed: {data.dateOfDeath}</p>
	</div>
	
	<div class="mb-8">
		{#if data.image}
			<img src={data.image} alt="In Memoriam" class="w-full rounded-lg shadow-lg" />
		{/if}
	</div>
	
	<div class="text-lg leading-relaxed">
		{data.notice}
	</div>
</div>
