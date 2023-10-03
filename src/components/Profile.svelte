<script>
	import Pie from './Pie.svelte';
</script>

<div class=" flex flex-col items-center">
	<h1 class=" text-center text-2xl font-semibold">My Profile</h1>
	<div class=" translate-x-5 lg:translate-x-0 ">
		<Pie />
	</div>

	<div class=" w-full">
		<div class=" pl-10">
			<h1 class=" text-2xl pb-2">Savings</h1>

			<hr />
			<div class=" py-5 w-full flex justify-between">
				<p>Saving balance</p>
				<p>$141,435</p>
			</div>
		</div>
		<br />
		<div class=" pl-10">
			<h1 class=" text-2xl pb-2">Current</h1>

			<hr />
			<div class=" py-5 w-full flex justify-between">
				<p>Current balance</p>
				<p>$727, 432</p>
			</div>
		</div>
	</div>
</div>
