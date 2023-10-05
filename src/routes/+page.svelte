<script>
	import About from './../components/About.svelte';
	import { Button, GradientButton } from 'flowbite-svelte';
	import Card from '../components/Card.svelte';
	import Article from '../components/Article.svelte';
	import Faq from '../components/Faq.svelte';
	import Accord from '../components/Accord.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div>
	<header class=" bg-gray-200 flex w-full mx-auto justify-between px-1 lg:px-[10%] items-center">
		<div class="flex space-x-3">
			<h2 class="font-bold text-sm lg:text-lg">PERSONAL</h2>
			<h2 class=" text-gray-400 text-sm lg:text-lg">PRIVATE</h2>
			<h2 class=" text-gray-400 text-sm lg:text-lg">BUSINESS</h2>
		</div>
		<div class="flex space-x-10 items-center py-5">
			<div class=" flex space-x-3 items-center">
				<svg
					class="lg:w-6 lg:h-6 w-3 h-3 text-[#0eb43b]"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
					/>
				</svg>
				<p class=" text-sm lg:text-lg text-gray-400">Help Center</p>
			</div>

			<div class=" flex space-x-3 items-center">
				<svg
					class="lg:w-6 lg:h-6 w-3 h-3 text-[#0eb43b]"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 18"
				>
					<path
						d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"
					/>
				</svg>
				<p class=" text-gray-400 text-sm lg:text-lg">Contact Us</p>
			</div>
		</div>
	</header>
	<nav class=" w-full py-5">
		<ul class=" w-full mx-auto items-center lg:flex justify-evenly text-gray-400 grid grid-cols-3 gap-2">
			<img class=" w-[64px] lg:w-[100px]" src="https://i.postimg.cc/NMLrkTdj/logo.png" alt="" />
			<div>
				<h2 class=" text-sm lg:text-lg font-bold text-black">Bank with Us</h2>
				<p class=" text-gray-500 text-xs lg:text-lg ">Needs and Solutions</p>
			</div>
			<div>
				<h2 class=" text-sm lg:text-lg font-bold text-black">Credit Cards</h2>
				<p class=" text-xs lg:text-lg text-gray-500">Credit and Rewards</p>
			</div>
			<div>
				<h2 class=" text-sm lg:text-lg font-bold text-black">Save</h2>
				<p class=" text-gray-500 text-xs lg:text-lg">Accounts and Discounts</p>
			</div>
			<div>
				<h2 class=" text-sm lg:text-lg font-bold text-black">Borrow</h2>
				<p class=" text-xs lg:text-lg text-gray-500">Loan & Marketplace</p>
			</div>
			<div>
				<h2 class=" text-sm lg:text-lg font-bold text-black">Invest</h2>
				<p class=" text-gray-500 text-xs lg:text-lg">Funds & Research</p>
			</div>
		</ul>
	</nav>
	<main
		class=" w-full h-[70vh] bg-[url(https://i.postimg.cc/3xRsFxgx/krakenimages-376-KN-ISpl-E-unsplash.jpg)] bg-[#f2f2f2] bg-left bg-blend-multiply bg-cover flex lg:pl-[20%] pl-[5%] items-center"
	>
		<Card />
	</main>
	<section class=" w-full">
		<div class=" w-[80%] mx-auto py-10 space-y-16">
			<About />

			<Article />

			<Accord />
		</div>
	</section>
	<footer class=" w-full bg-[#3c3c3c]">
		<Footer />
	</footer>
</div>

<style>
	main {
		background-color: rgba(128, 128, 128, 0.423);
		background-blend-mode: multiply;
	}
</style>
