<script>
export default {
  props: {
    backgroundColor: String,
    subTitle: String,
    title: String,
    shortDescription: String,
    secondDescription: String,
    thirdDescription: String,
    textLink: String,
    isBackgroundTransparent: Boolean,
    isSmallCard: Boolean,
    arrowColor: String,
  },
};
</script>
<template>
  <div
    :class="`${backgroundColor} ${isSmallCard && 'md:w-1/2'} 'flex flex-col'
    } rounded-lg p-8 ${isSmallCard ? 'h-auto' : 'h-full'}`"
  >
    <div class="mb-4">
      <h4
        :class="`text-sm font-bold ${
          isBackgroundTransparent ? 'text-white' : 'text-black'
        }`"
      >
        {{ subTitle }}
      </h4>
    </div>
    <div class="mb-6">
      <h2
        :class="` text-3xl md:text-5xl font-black ${
          isBackgroundTransparent ? 'text-white' : 'text-black'
        }`"
      >
        {{ title }}
      </h2>
    </div>
    <div class="mb-6">
      <p
        :class="`text-base ${
          isBackgroundTransparent ? 'text-white' : 'text-black'
        }`"
      >
        {{ shortDescription }}
      </p>
      <p
        v-if="secondDescription"
        :class="`text-base my-8 ${
          isBackgroundTransparent ? 'text-white' : 'text-black'
        }`"
      >
        {{ secondDescription }}
      </p>
      <p
        v-if="thirdDescription"
        :class="`text-base ${
          isBackgroundTransparent ? 'text-white' : 'text-black'
        }`"
      >
        {{ thirdDescription }}
      </p>
    </div>
    <div
      :class="`flex flex-col  ${isSmallCard ? 'items-start' : 'items-end'} `"
    >
      <a
        :class="`text-sm  ${
          isBackgroundTransparent ? 'text-white' : 'text-black'
        } font-bold`"
        href="#"
      >
        {{ textLink }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="12"
          viewBox="0 0 140 12"
          fill="none"
        >
          <path
            d="M140 6L130 0.226497V11.7735L140 6ZM0 7H131V5H0V7Z"
            :fill="`#${arrowColor}`"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
