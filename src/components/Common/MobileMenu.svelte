<script>
  import { slide } from 'svelte/transition';
</script>

<nav
  class="absolute  left-1/2 -translate-x-1/2  z-50   overflow-hidden px-5 sm:px-14 border-t-2 border-grey-200 bg-white shadow-lg w-[90%] mx-auto rounded-b-xl"
  transition:slide
>
  <ul class="flex flex-col justify-between    gap-2 sm:gap-5 py-2 sm:py-5">
    <li
      class="flex flex-col justify-between text-grey-700 text-2xl font-heading font-bold  border-grey-200"
    >
      <a href="/">Home</a>
    </li>
    <li><div class="h-[2px] w-full bg-grey-200" /></li>

    <li class=" text-grey-700 text-2xl font-heading font-bold  border-grey-200">
      <a href="/fully-furnished-apartments">Fully Furnished Apartments</a>
    </li>

    <li><div class="h-[2px] w-full bg-grey-200" /></li>

    <li class=" text-grey-700 text-2xl font-heading font-bold  border-grey-200">
      <a href="/listings">Listings</a>
    </li>
    <!-- 
          <li> <div class="h-[2px] w-full bg-grey-200"></div></li>

          <li class=" text-grey-700 text-2xl font-heading font-bold  border-grey-200">
            <a href="/blog">Blog</a>
          </li> -->

    <li><div class="h-[2px] w-full bg-grey-200" /></li>

    <li class=" text-grey-700 text-2xl font-heading font-bold  border-grey-200">
      <a href="/faq">FAQ</a>
    </li>

    <li><div class="h-[2px] w-full bg-grey-200" /></li>

    <li class=" text-grey-700 text-2xl font-heading font-bold  border-grey-200">
      <a href="/testimonials">Testimonials</a>
    </li>

    <li><div class="h-[2px] w-full bg-grey-200" /></li>

    <li class=" text-grey-700 text-2xl font-heading font-bold  border-grey-200">
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>
