<script lang="ts">
	import { Section, Register } from 'flowbite-svelte-blocks';
	import { Button, Checkbox, Label, Input, Spinner } from 'flowbite-svelte';
	import User from '../store';
	import { goto } from '$app/navigation';
	import CurrentUser from '../user';
	import { MoonSolid } from 'flowbite-svelte-icons';

	type Recents = {
		id: number;
		icon: boolean;
		detail: string;
		time: string;
	}[];

	let name = '';
	let password = '';

	$: username = '';
	let history: Recents = [];
	let slide = true;
	let page = 1;
	$: pin = '';
	$: image = '';
	$: savings = '';
	$: current = '';
	$: isLoading = false;

	type Users = {
		name: string;
		slide: boolean;
		page: number,
		pin: string;
		image: string;
		savings: string;
		current: string;
		isLoggedIn: boolean;
		history: Recents;
	};

	let invalid = false;

	const handleLogin = async (e: any) => {
		e.preventDefault;
		for (let index = 0; index < $User.length; index++) {
			if ($User[index]['name'] == name && $User[index]['password'] == password) {
				username = $User[index]['fullname'];
				pin = $User[index]['pin'];
				image = $User[index]['image'];
				savings = $User[index]['savings'];
				current = $User[index]['current'];
				history = $User[index]['history'];

				invalid = false;

				try {
					CurrentUser.update((user): any => {
						return {
							...user,
							name: username,
							pin: pin,
							image: image,
							savings: savings,
							current: current,
							history: history
						};
					});

					isLoading = true;

					setTimeout(function () {
						goto(`/dashboard`, { replaceState: true });
						console.log($CurrentUser);
					}, 1500);
				} catch (error) {
				} finally {
				}
			} else {
				invalid = true;
			}
		}
	};
</script>

<Section name="login">
	<Register href="/">
		<svelte:fragment slot="top">
			<img class="w-[100px] mr-2" src="logo.svg" alt="logo" />
		</svelte:fragment>
		{#if invalid}
			<h3 class="text-red-500 font-semibold">Invalid name or password</h3>
		{/if}

		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<form class="flex flex-col space-y-6" on:submit|preventDefault={handleLogin}>
				<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Change Password</h3>
				<Label class="space-y-2">
					<span>Your username</span>
					<Input
						bind:value={name}
						type="text"
						name="name"
						placeholder="enter your username..."
						required
					/>
				</Label>
				<Label class="space-y-2">
					<span>Your password</span>
					<Input
						bind:value={password}
						type="password"
						name="password"
						placeholder="•••••"
						required
					/>
				</Label>
				<div class="flex items-start">
					<Checkbox>Remember me</Checkbox>
					<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
						>Forgot password?</a
					>
				</div>

				{#if isLoading}
					<Button>
						<Spinner class="mr-3" size="4" color="white" />
					</Button>
				{:else}
					<Button type="submit" class="w-full1">Sign in</Button>
				{/if}

				<p class="text-sm font-light text-gray-500 dark:text-gray-400">
					Don’t have an account yet? <a
						href="/sign"
						class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a
					>
				</p>
			</form>
		</div>
	</Register>
</Section>
