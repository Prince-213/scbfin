<script>
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarCta } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, FileEditSolid, CloseOutline } from 'flowbite-svelte-icons';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  </script>
  
  <Sidebar class=" bg-transparent">
    <SidebarWrapper class=" bg-transparent">
      <SidebarGroup>
        <SidebarItem on:click={() => goto('/dashboard', {replaceState: true})} label="Profile">
          <svelte:fragment slot="icon">
            <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <br>
        <SidebarItem on:click={() => goto('/dashboard/transfer', {replaceState: true})} label="Transfer" {spanClass}>
          <svelte:fragment slot="icon">
            <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
         
        </SidebarItem>
        <br>
        <SidebarItem label="History" {spanClass}>
          <svelte:fragment slot="icon">
            <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
          </svelte:fragment>
        </SidebarItem>
        <br>
        <SidebarItem label="Terms and Conditions">
          <svelte:fragment slot="icon">
            <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <br>
        <SidebarItem on:click={() => goto('/', {replaceState: true})} label="Sign Out">
          <svelte:fragment slot="icon">
            <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>