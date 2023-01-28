<script>
    import MobileMenu from './MobileMenu.svelte';
  
    import { slide } from 'svelte/transition'
        let open= false
      const toggle = ()=> {
        open= !open
  
      }
  </script>
  

  <nav class=" mx-auto max-w-[1600px] relative ">
    <div class=" px-5 sm:px-10   ">
      <div class="relative flex justify-between lg:grid lg:grid-cols-10 items-center">
        <div class=" col-span-3">
          <a href="/" class="">
            <img
              src={'/images/logo.png'}
              alt="Apollo Properties"
              class="h-auto w-full max-w-[107px]"
            />
          </a>
        </div>
        <div class=" col-span-7 hidden lg:block">
          <ul class=" justify-between items-center flex ">
            <li>
              <a href="/fully-furnished-apartments" class=" text-lg">
                Fully Furnished Apartments
              </a>
            </li>
            <li>
              <a href="/listings" class=" text-lg">
                Listings
              </a>
            </li>
            <li>
              <a href="/blog" class=" text-lg">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" class=" text-lg">
                FAQ
              </a>
            </li>
            <li>
              <a href="/testimonials" class=" text-lg">
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/contact"
                class="bg-blue-400 hover:bg-blue-600 text-white text-lg font-body py-2 px-4 font-bold rounded-md shadow-lg hover:shadow-none inline-block max-w-[min-content] whitespace-nowrap transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button class="flex flex-col gap-[9px]  lg:hidden px-2 " on:click={toggle} aria-label="Open mobile menu"> 
          <div class="w-[37px] h-1 bg-blue-400 rounded origin-[0%_50%] transition-transform {open ? " rotate-45" : ""}"></div>
          <div class="w-[37px] h-1 bg-blue-400 rounded transition-opacity {open ? " opacity-0" : ""}"  ></div>
          <div class="w-[37px] h-1 bg-blue-400 rounded origin-[0%_50%] transition-transform {open ? "-rotate-45" : ""}"></div>
        </button>
      </div>
    </div>
    {#if open}
    <MobileMenu open={open} />
    {/if}
  </nav>