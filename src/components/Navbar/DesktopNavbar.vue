<template>
  <div class="bg-transparent hidden lg:flex p-4 absolute z-10 w-full">
    <div
      class="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center relative"
    >
      <div class="flex items-center space-x-2 mb-2 md:mb-0 w-2/5">
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
      <nav class="text-white w-3/5">
        <ul class="flex space-x-6 w-full justify-around">
          <li class="hover:bg-light-green-bg-2 px-1 xl:px-4 py-2 rounded-lg">
            <a href="#">Work</a>
          </li>
          <li
            class="relative group hover:bg-light-green-bg-2 xl:px-4 py-2 rounded-lg"
          >
            <a href="#" @click="showSubMenu = !showSubMenu">What we do</a>
            <div
              v-if="showSubMenu"
              class="absolute top-14 left-0 w-[460px] xl:w-[526px] bg-transparent-bg-1 text-black p-4 hidden md:block rounded-[20px]"
            >
              <div class="grid grid-cols-2 gap-4 pl-2">
                <a href="#" class="text-sm">
                  <p class="flex items-center font-semibold">
                    Integer quis author elit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      viewBox="0 0 140 12"
                      fill="none"
                      class="w-8 ml-4"
                    >
                      <path
                        d="M140 6L130 0.226497V11.7735L140 6ZM0 7H131V5H0V7Z"
                        fill="#000000"
                      />
                    </svg>
                  </p>
                  <p>Arcu bibendum at varius vel.</p>
                </a>
                <a href="#" class="text-sm">
                  <p class="flex items-center font-semibold">
                    Integer quis author elit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      viewBox="0 0 140 12"
                      fill="none"
                      class="w-8 ml-4"
                    >
                      <path
                        d="M140 6L130 0.226497V11.7735L140 6ZM0 7H131V5H0V7Z"
                        fill="#000000"
                      />
                    </svg>
                  </p>
                  <p>Arcu bibendum at varius vel.</p>
                </a>
                <a href="#" class="text-sm">
                  <p class="flex items-center font-semibold">
                    Integer quis author elit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      viewBox="0 0 140 12"
                      fill="none"
                      class="w-8 ml-4"
                    >
                      <path
                        d="M140 6L130 0.226497V11.7735L140 6ZM0 7H131V5H0V7Z"
                        fill="#000000"
                      />
                    </svg>
                  </p>
                  <p>Arcu bibendum at varius vel.</p>
                </a>
                <a href="#" class="text-sm">
                  <p class="flex items-center font-semibold">
                    Integer quis author elit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      viewBox="0 0 140 12"
                      fill="none"
                      class="w-8 ml-4"
                    >
                      <path
                        d="M140 6L130 0.226497V11.7735L140 6ZM0 7H131V5H0V7Z"
                        fill="#000000"
                      />
                    </svg>
                  </p>
                  <p>Arcu bibendum at varius vel.</p>
                </a>
              </div>
            </div>
          </li>
          <li class="hover:bg-light-green-bg-2 xl:px-4 py-2 rounded-lg">
            <a href="#">Stories</a>
          </li>
          <li class="hover:bg-light-green-bg-2 xl:px-4 py-2 rounded-lg">
            <a href="#">Contact</a>
          </li>
          <li class="hover:bg-light-green-bg-2 xl:px-4 py-2 rounded-lg">
            <a href="#">Careers</a>
          </li>
          <li class="hover:bg-light-green-bg-2 xl:px-4 py-2 rounded-lg">
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSubMenu: false,
    };
  },
};
</script>
