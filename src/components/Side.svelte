<script>
    import { Drawer, Button, CloseButton, Avatar } from 'flowbite-svelte';
    import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
    import { sineIn } from 'svelte/easing';
    import User from '../store';
	import Dash from './Dash.svelte';
    let hidden1 = true;
    let transitionParams = {
      x: -320,
      duration: 200,
      easing: sineIn
    };

    const open = () => {
        User.update((currentUser) => {
            return {...currentUser, slide: !currentUser.slide}
        })
    }
  </script>
  

  
  <Drawer transitionType="fly" {transitionParams} bind:hidden={$User.slide} id="sidebar1">
    <div class="flex items-center">
      <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
        <Avatar src="image.jpeg" border class="mr-5 ring-green-400 dark:ring-red-300" />{$User.name}
      </h5>
      <CloseButton on:click={open} class="mb-4 dark:text-white" />
    </div>
    <Dash />
  </Drawer>