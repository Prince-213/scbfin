<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper, Avatar } from 'flowbite-svelte';
    import User from '../store';
    import { goto } from '$app/navigation';
    import { ChartPieSolid, GridSolid, ShoppingCartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, FileEditSolid } from 'flowbite-svelte-icons';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  </script>
  
  <div class=" pl-5 mr-10 hidden lg:block border-r-2 border-gray-400 ">
    <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <Avatar src="image.jpeg" border class="mr-5 ring-green-400 dark:ring-red-300" />{$User.name}
        </h5>
        
    </div>
    <Sidebar class=" bg-transparent">
        <SidebarWrapper class=" bg-transparent  space-y-10">
          <SidebarGroup class=" space-y-10">
            <SidebarItem on:click={() => goto('/dashboard', {replaceState: true})} label="Profile">
              <svelte:fragment slot="icon">
                <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem on:click={() => goto('/dashboard/transfer', {replaceState: true})} label="Transfer" {spanClass}>
              <svelte:fragment slot="icon">
                <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
             
            </SidebarItem>
            <SidebarItem label="History" {spanClass}>
              <svelte:fragment slot="icon">
                <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
              <svelte:fragment slot="subtext">
                <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Terms and Conditions">
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
  </div>
 