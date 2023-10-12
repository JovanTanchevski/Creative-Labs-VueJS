<template>
  <footer class="bg-black text-white py-8">
    <div
      class="container w-11/12 lg:w-full mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="md:w-1/2">
        <div class="flex items-center space-x-2 mb-2 md:mb-0">
          <img
            src="/images/creative-labs-logo-img.svg"
            alt="Creative Labs Logo"
            class="h-10"
          />
          <img
            src="/images/creative-labs-text-logo.svg"
            alt="Creative Labs Text Logo"
            class="h-24"
          />
        </div>
        <p class="md:w-9/12 text-sm leading-7 desc-text text-[#F5F5F5]">
          Creative Labs, a web agency based in Sweden, is expanding its reach
          and opening a new office in Macedonia. The agency is well-known for
          providing cutting-edge solutions to businesses across a wide range of
          industries, and their expansion to Macedonia is a testament to their
          commitment to delivering exceptional results for their clients on a
          global scale.
        </p>
      </div>

      <div
        class="w-full mt-12 md:mt-0 md:flex md:w-1/2 md:justify-between gap-6"
      >
        <FooterColumn title="Creative Labs" :items="creativeLabsItems" />
        <FooterColumn title="Contact us" :items="contactUsItems" />
      </div>
    </div>
    <div
      class="mt-20 container w-11/12 lg:w-full text-center md:text-left mx-auto md:flex text-[#A7A7A7]"
    >
      <p>© COPYRIGHT 2023 Creative Labs. All rights reserved.</p>
      <div class="ml-8 mt-6 md:mt-0">
        <a href="#" class="underline pr-4 border-r-2 border-gray-500"
          >Privacy policy</a
        >
        <a href="#" class="underline pl-4">Cookie policy</a>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterColumn from './FooterColumn.vue';

export default {
  components: {
    FooterColumn,
  },
  data() {
    return {
      creativeLabsItems: [
        'Work',
        'What we do',
        'Stories',
        'Contact us',
        'Careers',
        'About us',
      ],
      contactUsItems: [
        'Contact us',
        'Creative Labs',
        'Pelagonka 2',
        'Bitola, Macedonia',
        'hi@creativelabs.se',
        'LinkedIn',
      ],
    };
  },
};
</script>
