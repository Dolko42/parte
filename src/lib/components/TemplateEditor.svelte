<script>
	import { onMount } from 'svelte';
	import TemplatePreview from './TemplatePreview.svelte';
	
	let templateData = {
		fullName: '',
		dateOfBirth: '',
		dateOfDeath: '',
		notice: '',
		image: ''
	};
	
	function handleInputChange(event) {
		const { name, value } = event.target;
		templateData = { ...templateData, [name]: value };
	}
	
	function handleImageUpload(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				templateData = { ...templateData, image: e.target.result };
			};
			reader.readAsDataURL(file);
		}
	}
	
	function generatePDF() {
		// TODO: Implement PDF generation
		console.log('Generating PDF with data:', templateData);
	}
</script>

<div class="bg-gray-50">
	<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Editor Form -->
			<div class="bg-white shadow sm:rounded-lg">
				<div class="px-4 py-5 sm:p-6">
					<h3 class="text-lg font-medium leading-6 text-gray-900">Template Editor</h3>
					<div class="mt-2 space-y-4">
						<div>
							<label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
							<input
								type="text"
								name="fullName"
								id="fullName"
								value={templateData.fullName}
								on:input={handleInputChange}
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						
						<div>
							<label for="dateOfBirth" class="block text-sm font-medium text-gray-700">Date of Birth</label>
							<input
								type="date"
								name="dateOfBirth"
								id="dateOfBirth"
								value={templateData.dateOfBirth}
								on:input={handleInputChange}
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						
						<div>
							<label for="dateOfDeath" class="block text-sm font-medium text-gray-700">Date of Death</label>
							<input
								type="date"
								name="dateOfDeath"
								id="dateOfDeath"
								value={templateData.dateOfDeath}
								on:input={handleInputChange}
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						
						<div>
							<label for="notice" class="block text-sm font-medium text-gray-700">Notice</label>
							<textarea
								name="notice"
								id="notice"
								rows="4"
								value={templateData.notice}
								on:input={handleInputChange}
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							></textarea>
						</div>
						
						<div>
							<label for="image" class="block text-sm font-medium text-gray-700">Image</label>
							<input
								type="file"
								name="image"
								id="image"
								on:change={handleImageUpload}
								accept="image/*"
								class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
							/>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Template Preview -->
			<div class="bg-white shadow sm:rounded-lg">
				<div class="px-4 py-5 sm:p-6">
					<h3 class="text-lg font-medium leading-6 text-gray-900">Preview</h3>
					<div class="mt-4">
						<TemplatePreview {templateData} />
					</div>
				</div>
			</div>
		</div>
		
		<div class="mt-8">
			<button
				on:click={generatePDF}
				class="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
			>
				Generate PDF
			</button>
		</div>
	</div>
</div>
