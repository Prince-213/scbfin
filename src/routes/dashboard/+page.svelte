<script>
    import { Drawer, Button, CloseButton } from 'flowbite-svelte';
    import { fade } from 'svelte/transition';
    import { sineIn } from 'svelte/easing';
    import User from '../../store'
	import Pie from '../../components/Pie.svelte';
	import Profile from '../../components/Profile.svelte';
	import History from '../../components/History.svelte';
	import Terms from '../../components/Terms.svelte';
	import Transfer from '../../components/Transfer.svelte';
	import CurrentUser from '../../user';
    

    const open = () => {
        CurrentUser.update((currentUser) => {
            return {...currentUser, slide: !currentUser.slide}
        })
    }
  </script>

<div class=" w-[90%]  ">
    
   {#if $CurrentUser.page == 1}
        <div transition:fade={{ delay: 250, duration: 300 }} >
            <Profile />
        </div>
        
        {:else if $CurrentUser.page == 2}
        <div transition:fade={{ delay: 250, duration: 300 }} >
            <Transfer />
        </div>
        
        {:else if $CurrentUser.page == 3}
        <div transition:fade={{ delay: 250, duration: 300 }} >
            <History />
        </div>
        
        {:else if $CurrentUser.page == 4}
        <div transition:fade={{ delay: 250, duration: 300 }} >
            <Terms />
        </div>
        
        
   {/if}
    
</div>