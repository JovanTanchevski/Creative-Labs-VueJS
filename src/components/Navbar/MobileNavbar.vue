<template>
  <header
    :class="`lg:hidden p-4 fixed ${mobileMenuOpen && 'bg-black'} z-10 w-full`"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-2">
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
      <button @click="toggleMobileMenu" class="text-3xl text-white">
        {{ mobileMenuOpen ? '✕' : '☰' }}
      </button>
    </div>
    <nav
      class="text-white"
      :class="{
        'hidden md:hidden': !mobileMenuOpen,
      }"
    >
      <ul
        class="space-y-4 pl-6 h-screen mt-36"
        :class="{
          'opacity-100': mobileMenuOpen,
          'opacity-0': !mobileMenuOpen,
        }"
      >
        <li>
          <a
            :class="{
              'text-2xl md:text-base': mobileMenuOpen,
              'text-lg md:text-lg': !mobileMenuOpen,
            }"
            href="#"
            class="hover:underline text-left"
            >Work</a
          >
        </li>
        <li>
          <a
            :class="{
              'text-2xl md:text-base': mobileMenuOpen,
              'text-lg md:text-lg': !mobileMenuOpen,
            }"
            href="#"
            class="hover:underline text-left"
            >What we do</a
          >
        </li>
        <li>
          <a
            :class="{
              'text-2xl md:text-base': mobileMenuOpen,
              'text-lg md:text-lg': !mobileMenuOpen,
            }"
            href="#"
            class="hover:underline text-left"
            >Stories</a
          >
        </li>
        <li>
          <a
            :class="{
              'text-2xl md:text-base': mobileMenuOpen,
              'text-lg md:text-lg': !mobileMenuOpen,
            }"
            href="#"
            class="hover:underline text-left"
            >Contact</a
          >
        </li>
        <li>
          <a
            :class="{
              'text-2xl md:text-base': mobileMenuOpen,
              'text-lg md:text-lg': !mobileMenuOpen,
            }"
            href="#"
            class="hover:underline text-left"
            >Careers</a
          >
        </li>
        <li>
          <a
            :class="{
              'text-2xl md:text-base': mobileMenuOpen,
              'text-lg md:text-lg': !mobileMenuOpen,
            }"
            href="#"
            class="hover:underline text-left"
            >About us</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>
