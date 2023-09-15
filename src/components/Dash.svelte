<script lang="ts">
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import User from '../store';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarCta } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, FileEditSolid, CloseOutline } from 'flowbite-svelte-icons';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';

    const changePage = (number: number) => {
      User.update((currentUser) => {
        return {...currentUser, page: number}
      })
    }
  </script>
  
  <Sidebar class=" bg-transparent">
    <Sidebar class=" bg-transparent">
        <SidebarWrapper class=" bg-transparent  space-y-10">
          <SidebarGroup class=" space-y-10">
            <SidebarItem on:click={() => changePage(1)} label="Profile">
              <svelte:fragment slot="icon">
                <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem on:click={() => changePage(2)} label="Transfer" {spanClass}>
              <svelte:fragment slot="icon">
                <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
             
            </SidebarItem>
            <SidebarItem on:click={() => changePage(3)} label="History" {spanClass}>
              <svelte:fragment slot="icon">
                <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
              <svelte:fragment slot="subtext">
                <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem on:click={() => changePage(4)} label="Terms and Conditions">
              <svelte:fragment slot="icon">
                <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem on:click={() => goto('/', {replaceState: true})} label="Sign Out">
              <svelte:fragment slot="icon">
                <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
            
          </SidebarGroup>
        </SidebarWrapper>
      </Sidebar>
  </Sidebar>