<script setup>
import SectionCard from '../SectionCard/SectionCard.vue';
</script>
<script>
import VueLoadImage from 'vue-load-image';

export default {
  components: {
    'vue-load-image': VueLoadImage,
  },
};
</script>
<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <div class="lg:w-1/2">
      <vue-load-image class="h-full">
        <template v-slot:image>
          <img
            src="../../../public//images/join-our-team-section-img.svg"
            alt="Team Building Dinner Image"
            class="w-full h-full object-cover"
          />
        </template>
        <template v-slot:preloader>
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          />
        </template>
        <template v-slot:error>Image load fails</template>
      </vue-load-image>
    </div>
    <div class="lg:w-1/2">
      <SectionCard
        backgroundColor="bg-gray-bg-1"
        title="Tincidunt tortor aliquam."
        subTitle="Join our team"
        shortDescription="Quam nulla porttitor massa id neque aliquam. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Nunc lobortis mattis aliquam faucibus purus in. Facilisis volutpat est velit egestas dui id. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. "
        textLink="We're hiring"
        secondDescription="Netus et malesuada fames ac. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Dictum sit amet justo donec enim diam vulputate. Condimentum id venenatis a condimentum vitae."
        thirdDescription="Urna neque viverra justo nec ultrices dui sapien. Faucibus nisl tincidunt eget nullam. Maecenas ultricies mi eget mauris pharetra."
        arrowColor="ED8380"
      />
    </div>
  </div>
</template>
