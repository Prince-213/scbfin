<script lang="ts">import { Section } from 'flowbite-svelte-blocks';
    import { Label, Input, Button, Select, Textarea, Spinner } from 'flowbite-svelte';
    const handleSubmit = async () => {

        let spin = setInterval(() => {loading = true}, 5000)

        loading = true

        setTimeout(() => { alert(" An OTP has been sent to your email address check your email to confirm the transaction ") }, 5000)
        
        
    };
    let selected: string ;
    let loading: boolean = false;
    let countries = [
        { value: 'tv', name: 'DEUTSCHE BANK' },
        { value: 'pc', name: 'BNP PARIBAS' },
        { value: 'hs', name: 'HSBC UK' },
        { value: 'boa', name: 'BANK OF AMERICA' },
        { value: 'uni', name: 'UNICREDIT' },
        { value: 'ra', name: 'RAIFFEISEN BANK INTERNATIONAL' },
        { value: 'cred', name: 'CREDIT SUISSE' },
    ];
    </script>
    
    <Section class="" name="crudcreateform">
        
            <div class=" space-x-2 flex">
                <p>Saving balance:</p>
                <p>$141,435</p>
            </div>
        
        <br>
        
            <div class=" space-x-2 flex">
                <p>Current balance:</p>
                <p>$727, 432</p>
            </div>
       <br>
      <form class=" w-[30em]" on:submit|preventDefault={handleSubmit}>
        <div class="grid w-full gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="w-full">
                <Label for="price" class="mb-2">Amount</Label>
                <Input type="text" id="price" placeholder="$29999" required />
            </div>
          <div class="w-full">
            <Label for="brand" class="mb-2">Account Number</Label>
            <Input type="text" id="brand" placeholder="Account Number" required />
          </div>
          
          <div class="w-full">
            <Label
              >Bank of Recepient
              <Select class="mt-2" items={countries} bind:value={selected} required />
            </Label>
          </div>
          <div class="w-full">
            <Label for="weight" class="mb-2">PIN</Label>
            <Input type="password" id="weight" placeholder="" required />
          </div>
         
          {#if loading }
            <Button>
              <Spinner class="mr-3" size="4" color="white" />TRANSFERING ...
            </Button>
            {:else}
            <Button type="submit" class="">TRANSFER </Button>

          {/if}
          
        </div>
      </form>
    </Section>