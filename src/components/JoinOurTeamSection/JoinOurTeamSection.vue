<script setup>
import SectionCard from '../SectionCard/SectionCard.vue';
</script>
<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <div class="lg:w-1/2">
      <img
        src="../../../public//images/join-our-team-section-img.svg"
        alt="Team Building Dinner Image"
        class="w-full h-full object-cover"
      />
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
