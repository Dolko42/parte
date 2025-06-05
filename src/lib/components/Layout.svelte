<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/stores/auth';
	
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Dashboard', href: '/dashboard' },
		{ name: 'Templates', href: '/templates' }
	];
	
	let user;
	
	// Subscribe to auth changes
	auth.subscribe(u => {
		user = u;
	});
	
	// Check if user is authenticated
	$auth;
	
	// Redirect to login if not authenticated
	if (!user && page.url.pathname !== '/login' && page.url.pathname !== '/signup') {
		goto('/login');
	}
</script>

<div class="min-h-screen bg-gray-100">
	<nav class="bg-white shadow">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex">
					<div class="flex-shrink-0 flex items-center">
						<a href="/" class="text-xl font-bold text-gray-800">PArte</a>
					</div>
					<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
						{#each navigation as item}
							<a
								href={item.href}
								class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
								class:border-indigo-500 class:text-gray-900
								{page.url.pathname === item.href}
							>
								{item.name}
							</a>
						{/each}
					</div>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:items-center">
					{#if user}
						<div class="ml-3 relative">
							<div>
								<button
									type="button"
									class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
								>
									<span class="sr-only">Open user menu</span>
									<img
										class="h-8 w-8 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</button>
							</div>
						</div>
					{:else}
						<a
							href="/login"
							class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Sign in
						</a>
					{/if}
				</div>
			</div>
		</div>
	</nav>

	<main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
		<slot />
	</main>
</div>
