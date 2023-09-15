<script>
	import BigSide from "../../components/BigSide.svelte";
import Side from "../../components/Side.svelte";
    import User from '../../store'
    const open = () => {
        User.update((currentUser) => {
            return {...currentUser, slide: !currentUser.slide}
        })
    }
</script>
<div>
    <button class=" lg:hidden w-6 h-6 absolute left-5 top-5 text-gray-800 dark:text-white" on:click={open}>
        <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
    </button>
    
    <div class=" w-full py-2 flex lg:pl-5 lg:justify-start justify-center mb-10">
        <img class="w-[100px] mr-2" src="logo.svg" alt="logo" />

    </div>
    <Side />
    <div class=" flex ">
        <BigSide />
        <slot />
    </div>
    
</div>