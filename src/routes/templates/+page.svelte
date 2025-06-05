<script>
	import Layout from '$lib/components/Layout.svelte';
	import TemplateEditor from '$lib/components/TemplateEditor.svelte';
</script>

<Layout>
	<div class="bg-white shadow sm:rounded-lg">
		<div class="px-4 py-5 sm:p-6">
			<h3 class="text-lg font-medium leading-6 text-gray-900">Create New Template</h3>
			<div class="mt-4">
				<TemplateEditor />
			</div>
		</div>
	</div>
</Layout>
