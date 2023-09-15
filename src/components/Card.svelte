<script>
	import { goto } from '$app/navigation';
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
  </script>
  
  <Card class="bg-[#13387b] min-w-[55%] text-white border-none shadow-xl ">
    <h5 class="mb-2 text-2xl font-bold tracking-tighttext-white">Online Banking</h5>
    <p class="mb-3 font-normal text-gray-200 ">Take complete control of your accounts and manage your finaces. Reliable and efficient finance</p>
    
    <div class=" flex space-x-5">
      <Button class="w-fit bg-[#0eb43b]" on:click={() => goto('/sign', {replaceState: true})}>
        Register Now <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
      </Button>
      <Button class="w-fit bg-[#0eb43b]" on:click={() => goto('/login', {replaceState: true})}>
        Continue to Login  <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
      </Button>
    </div>
    
  </Card>