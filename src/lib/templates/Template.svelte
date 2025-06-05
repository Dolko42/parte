<script>
	export let data = {};
	
	// Template styles
	const styles = {
		container: 'max-w-4xl mx-auto px-4 py-8',
		header: 'text-4xl font-bold text-center mb-8',
		content: 'text-lg leading-relaxed',
		meta: 'text-gray-600 text-sm',
		image: 'w-full rounded-lg shadow-lg',
		button: 'mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
	};
</script>

<div class="{styles.container}">
	<div class="{styles.header}">
		{data.fullName}
	</div>
	
	<div class="mb-8">
		<p class="{styles.meta}">Born: {data.dateOfBirth}</p>
		<p class="{styles.meta}">Passed: {data.dateOfDeath}</p>
	</div>
	
	<div class="mb-8">
		{#if data.image}
			<img src={data.image} alt="In Memoriam" class="{styles.image}" />
		{/if}
	</div>
	
	<div class="{styles.content}">
		{data.notice}
	</div>
	
	<button class="{styles.button}">
		Download PDF
	</button>
</div>
