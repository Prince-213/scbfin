<script>
    import { Drawer, Button, CloseButton } from 'flowbite-svelte';
    import { sineIn } from 'svelte/easing';
    import User from '../../store'
	import Pie from '../../components/Pie.svelte';
    const open = () => {
        User.update((currentUser) => {
            return {...currentUser, slide: !currentUser.slide}
        })
    }
  </script>

<div class="">
    <h1 class=" text-center text-2xl font-semibold">My Profile</h1>
    <Pie />
    <div class=" pl-10">
        <h1 class=" text-2xl pb-2" >Savings </h1>

        <hr>
        <div class=" py-5 w-full flex justify-between">
            <p>Saving balance</p>
            <p>$141,435</p>
        </div>
    </div>
    <br>
    <div class=" pl-10">
        <h1 class=" text-2xl pb-2" >Current </h1>

        <hr>
        <div class=" py-5 w-full flex justify-between">
            <p>Current balance</p>
            <p>$727, 432</p>
        </div>
    </div>
    
</div>