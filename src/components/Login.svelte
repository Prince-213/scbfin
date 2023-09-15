<script lang="ts">import { Section, Register } from 'flowbite-svelte-blocks';
    import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
    import User from '../store';
	import { goto } from '$app/navigation';

     let name = ''
     let password = ''

     const handleLogin = () => {
        if ((name == $User.name) && (password == $User.password)) {
            goto(`/dashboard`, { replaceState: true }) 
        } else {
            goto(`/`, { replaceState: true }) 
        }
     }
</script>
    
    <Section name="login">
      <Register href="/">
        <svelte:fragment slot="top">
            <img class="w-[100px] mr-2" src="logo.svg" alt="logo" />
          
          
        </svelte:fragment>
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="flex flex-col space-y-6" on:submit|preventDefault={handleLogin}>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Change Password</h3>
            <Label class="space-y-2">
              <span>Your username</span>
              <Input bind:value={name} type="text" name="name" placeholder="enter your username..." required />
            </Label>
            <Label class="space-y-2">
              <span>Your password</span>
              <Input bind:value={password} type="password" name="password" placeholder="•••••" required />
            </Label>
            <div class="flex items-start">
              <Checkbox>Remember me</Checkbox>
              <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
            </div>
            <Button type="submit" class="w-full1">Sign in</Button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a href="/sign" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
          </form>
        </div>
      </Register>
    </Section>